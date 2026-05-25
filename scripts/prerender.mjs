/**
 * Pre-render the SPA into static HTML files for SEO.
 *
 * What this does:
 *  1. Serves `dist/` as a static site on a random port.
 *  2. Launches headless Chrome (via Puppeteer) and navigates to each route.
 *  3. Waits for React to finish rendering (idle network, then a small extra delay).
 *  4. Reads the fully-rendered <html> from the page and saves it back as the static file.
 *
 * Result: when Google/Yandex bots hit the deployed site, they get a complete
 * HTML document with all the headings, copy and meta tags already in place,
 * instead of an empty `<div id="root"></div>` that requires JS execution.
 */

import { createServer } from 'node:http'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { writeFile, mkdir } from 'node:fs/promises'
import puppeteer from 'puppeteer'
import sirv from 'sirv'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST_DIR = join(__dirname, '..', 'dist')

// Routes to prerender. Single-page lander, but easy to extend later.
// Each entry: [pathname in browser, output file relative to dist/]
const ROUTES = [
  ['/', 'index.html'],
]

async function startStaticServer() {
  const handler = sirv(DIST_DIR, {
    single: true, // SPA fallback: unknown routes -> index.html
    dev: false,
  })
  return new Promise((resolve) => {
    const server = createServer((req, res) => handler(req, res))
    server.listen(0, '127.0.0.1', () => {
      const port = server.address().port
      resolve({ server, port })
    })
  })
}

async function prerender() {
  console.log('[prerender] starting static server for dist/...')
  const { server, port } = await startStaticServer()
  const baseUrl = `http://127.0.0.1:${port}`

  console.log('[prerender] launching headless chrome...')
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  try {
    for (const [route, outFile] of ROUTES) {
      const url = baseUrl + route
      console.log(`[prerender] -> ${route}`)

      const page = await browser.newPage()
      // Give bot-like UA so any UA-sniffing logic stays consistent
      await page.setUserAgent('Mozilla/5.0 (compatible; HappyBoxPrerender/1.0)')
      await page.setViewport({ width: 1280, height: 800 })

      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })

      // Tiny extra delay so React has a chance to commit final paint
      await new Promise((r) => setTimeout(r, 500))

      // Mark the document as pre-rendered (useful for hydration logic later)
      await page.evaluate(() => {
        document.documentElement.setAttribute('data-prerendered', 'true')
      })

      const html = await page.content()
      const outPath = join(DIST_DIR, outFile)
      await mkdir(dirname(outPath), { recursive: true })
      await writeFile(outPath, html, 'utf-8')
      console.log(`[prerender]    wrote ${outFile} (${(html.length / 1024).toFixed(1)} KB)`)

      await page.close()
    }
  } finally {
    await browser.close()
    server.close()
  }

  console.log('[prerender] done.')
}

prerender().catch((err) => {
  console.error('[prerender] FAILED:', err)
  process.exit(1)
})
