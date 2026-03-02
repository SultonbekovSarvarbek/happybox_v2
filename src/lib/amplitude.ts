import * as amplitude from '@amplitude/analytics-browser'

export function initAmplitude() {
  const apiKey = import.meta.env.VITE_AMPLITUDE_API_KEY
  if (!apiKey || apiKey === 'YOUR_AMPLITUDE_API_KEY') return
  amplitude.init(apiKey, { autocapture: true })
}

export function track(event: string, properties?: Record<string, unknown>) {
  amplitude.track(event, properties)
}
