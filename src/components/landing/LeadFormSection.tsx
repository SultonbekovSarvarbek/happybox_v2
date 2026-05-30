import { useState } from 'react'
import { Check, Phone, Send } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { track } from '@/lib/amplitude'

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

const API_BASE = import.meta.env.VITE_API_URL || ''

// +998 XX XXX XX XX - оставляем только цифры после кода страны
function formatUzPhone(raw: string) {
  const digits = raw.replace(/\D/g, '').replace(/^998/, '').slice(0, 9)
  const parts = [
    digits.slice(0, 2),
    digits.slice(2, 5),
    digits.slice(5, 7),
    digits.slice(7, 9),
  ].filter(Boolean)
  return parts.length ? `+998 ${parts.join(' ')}` : '+998 '
}

function isValidUzPhone(value: string) {
  return value.replace(/\D/g, '').length === 12 // 998 + 9 digits
}

export function LeadFormSection() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [consent, setConsent] = useState(true)
  const [form, setForm] = useState({
    name: '',
    salon: '',
    phone: '+998 ',
    city: '',
  })

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'submitting') return
    if (!consent) return
    if (!isValidUzPhone(form.phone)) {
      setStatus('error')
      return
    }

    setStatus('submitting')
    track('lead_form_submitted', { city: form.city })

    try {
      const res = await fetch(`${API_BASE}/api/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('bad status')
      setStatus('success')
      setForm({ name: '', salon: '', phone: '+998 ', city: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="lead" className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-blue-50/40 to-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#0A84FF] font-semibold text-sm uppercase tracking-widest mb-3">
            {t('lead.label')}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            {t('lead.title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
            {t('lead.subtitle')}
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-white rounded-2xl border border-green-200 p-8 sm:p-12 text-center shadow-sm">
            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
              <Check className="w-7 h-7 text-green-500" />
            </div>
            <p className="text-xl font-semibold text-gray-900 mb-2">{t('lead.success')}</p>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md mx-auto">
              {t('lead.successDetail')}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://t.me/happybox_manager"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A84FF] hover:bg-[#0070E0] text-white text-sm font-medium transition-all"
              >
                Telegram: @happybox_manager
              </a>
              <a
                href="tel:+998940444581"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 hover:border-[#0A84FF] hover:text-[#0A84FF] text-gray-700 text-sm font-medium transition-all"
              >
                <Phone className="w-4 h-4" />
                +998 94 044 45 81
              </a>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-10 shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="lead-name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('lead.name')}
                </label>
                <input
                  id="lead-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder={t('lead.namePlaceholder')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0A84FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="lead-salon" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('lead.salon')}
                </label>
                <input
                  id="lead-salon"
                  type="text"
                  required
                  value={form.salon}
                  onChange={(e) => update('salon', e.target.value)}
                  placeholder={t('lead.salonPlaceholder')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0A84FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="lead-phone" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('lead.phone')}
                </label>
                <input
                  id="lead-phone"
                  type="tel"
                  inputMode="tel"
                  required
                  value={form.phone}
                  onChange={(e) => update('phone', formatUzPhone(e.target.value))}
                  onFocus={(e) => {
                    if (!e.target.value) update('phone', '+998 ')
                  }}
                  placeholder={t('lead.phonePlaceholder')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0A84FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="lead-city" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('lead.city')}
                </label>
                <input
                  id="lead-city"
                  type="text"
                  required
                  value={form.city}
                  onChange={(e) => update('city', e.target.value)}
                  placeholder={t('lead.cityPlaceholder')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0A84FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>
            </div>

            <label className="mt-6 flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#0A84FF] focus:ring-2 focus:ring-blue-100 cursor-pointer"
              />
              <span className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                {t('lead.consent')}
              </span>
            </label>

            <button
              type="submit"
              disabled={status === 'submitting' || !consent}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#0A84FF] hover:bg-[#0070E0] disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-4 text-base font-medium rounded-xl shadow-lg shadow-blue-500/15 transition-all hover:shadow-xl hover:shadow-blue-500/25"
            >
              <Send className="w-4 h-4" />
              {status === 'submitting' ? t('lead.submitting') : t('lead.submit')}
            </button>

            {status === 'error' && (
              <p className="mt-4 text-sm text-red-500 text-center">{t('lead.error')}</p>
            )}

            <p className="mt-5 text-xs text-gray-400 text-center">{t('lead.privacy')}</p>
          </form>
        )}

        {/* Alt channels */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400 mb-3">{t('lead.alt')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://t.me/happybox_manager"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('lead_telegram_clicked')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 hover:border-[#0A84FF] hover:text-[#0A84FF] text-gray-700 text-sm font-medium transition-all"
            >
              Telegram: @happybox_manager
            </a>
            <a
              href="tel:+998940444581"
              onClick={() => track('lead_phone_clicked')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 hover:border-[#0A84FF] hover:text-[#0A84FF] text-gray-700 text-sm font-medium transition-all"
            >
              +998 94 044 45 81
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
