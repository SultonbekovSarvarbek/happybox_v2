import express from 'express'
import cors from 'cors'
import { Resend } from 'resend'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

const resend = new Resend(process.env.RESEND_KEY)

app.use(cors({
  origin: ['http://happybox.uz', 'https://happybox.uz', 'http://www.happybox.uz', 'https://www.happybox.uz', 'http://localhost:5173'],
  methods: ['GET', 'POST'],
  credentials: true
}))
app.use(express.json())

interface ContactFormData {
  company: string
  contact: string
  email: string
  phone: string
  teamSize: string
  boxType: string
  frequency: string
  comment?: string
}

app.post('/api/contact', async (req, res) => {
  try {
    const formData: ContactFormData = req.body

    const { company, contact, email, phone, teamSize, boxType, frequency, comment } = formData

    // Send notification email to admin
    await resend.emails.send({
      from: 'HappyBox <happy@happybox.uz>',
      to: 'sarvarsarvar944@gmail.com',
      subject: `Новая заявка от ${company}`,
      html: `
        <h2>Новая заявка на корпоративную подписку</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Компания</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Контактное лицо</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${contact}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Телефон</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Размер команды</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${teamSize}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Тип коробки</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${boxType}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Частота доставки</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${frequency}</td>
          </tr>
          ${comment ? `
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Комментарий</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${comment}</td>
          </tr>
          ` : ''}
        </table>
      `,
    })

    // Send confirmation email to client
    await resend.emails.send({
      from: 'HappyBox <happy@happybox.uz>',
      to: email,
      subject: 'Спасибо за заявку - HappyBox',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0A84FF;">Спасибо за вашу заявку!</h2>
          <p>Здравствуйте, ${contact}!</p>
          <p>Мы получили вашу заявку на корпоративную подписку HappyBox для компании <strong>${company}</strong>.</p>
          <p>Наша команда свяжется с вами в течение 24 часов для обсуждения деталей и подготовки персонального предложения.</p>
          <br>
          <p>С уважением,<br>Команда HappyBox</p>
        </div>
      `,
    })

    res.json({ success: true, message: 'Emails sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ success: false, error: 'Failed to send email' })
  }
})

const APP_STORE_URL = 'https://apps.apple.com/app/id6758584836'

app.get('/go/:handle', (req: express.Request, res: express.Response) => {
  const handle = req.params.handle.replace(/[^a-zA-Z0-9_.\-]/g, '')
  const deepLink = `happybox://cards/${handle}`

  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.send(`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HappyBox — Открываем карточку...</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
      background: #F2F2F7;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 24px;
    }
    .card {
      background: white;
      border-radius: 20px;
      padding: 40px 32px;
      text-align: center;
      max-width: 360px;
      width: 100%;
      box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    }
    h1 { font-size: 22px; font-weight: 700; color: #1C1C1E; margin-bottom: 8px; }
    p { font-size: 15px; color: #8E8E93; line-height: 1.5; margin-bottom: 28px; }
    .btn {
      display: block;
      width: 100%;
      padding: 16px;
      border-radius: 14px;
      font-size: 16px;
      font-weight: 600;
      text-decoration: none;
      margin-bottom: 12px;
      cursor: pointer;
      border: none;
    }
    .btn-primary { background: #0A84FF; color: white; }
    .btn-secondary { background: #F2F2F7; color: #0A84FF; }
    .spinner {
      width: 32px; height: 32px;
      border: 3px solid #E5E5EA;
      border-top-color: #0A84FF;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin: 0 auto 20px;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .hidden { display: none; }
  </style>
</head>
<body>
  <div class="card">
    <div id="loading">
      <div class="spinner"></div>
      <h1>Открываем HappyBox...</h1>
      <p>Подождите секунду</p>
    </div>

    <div id="fallback" class="hidden">
      <h1>Скачайте HappyBox</h1>
      <p>Установите приложение, чтобы увидеть карточку @${handle}</p>
      <a class="btn btn-primary" href="${APP_STORE_URL}">Скачать в App Store</a>
      <p style="margin-top: 20px; margin-bottom: 4px; font-size: 14px; color: #8E8E93;">
        <a href="tel:+998940444581" style="color: #0A84FF; text-decoration: none;">+998 94 044 45 81</a>
      </p>
      <p style="font-size: 14px; color: #8E8E93; margin-bottom: 0;">
        <a href="mailto:info@happybox.uz" style="color: #0A84FF; text-decoration: none;">info@happybox.uz</a>
      </p>
    </div>
  </div>

  <script>
    var deepLink = '${deepLink}';
    var appStoreUrl = '${APP_STORE_URL}';
    var didOpen = false;

    // Try to open the app
    window.location.href = deepLink;

    // Listen for when user comes back (app not installed)
    var timer = setTimeout(function() {
      if (!didOpen) {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('fallback').classList.remove('hidden');
      }
    }, 1800);

    // If page becomes hidden, app opened successfully
    document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
        didOpen = true;
        clearTimeout(timer);
      }
    });

    window.addEventListener('blur', function() {
      didOpen = true;
      clearTimeout(timer);
    });
  </script>
</body>
</html>`)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
