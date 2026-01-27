import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Send, CheckCircle } from 'lucide-react'

const teamSizes = ['1–10', '10–50', '50–200', '200+']
const boxTypes = ['Snack Box', 'Drinks Box', 'Mixed Box', 'Premium Box']
const frequencies = ['Еженедельно', 'Ежемесячно', 'Квартально']

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    teamSize: '',
    boxType: '',
    frequency: '',
    comment: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (submitted) {
    return (
      <section id="contact-form" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Заявка отправлена!
          </h2>
          <p className="text-gray-600 text-lg">
            Мы ответим в течение 24 часов и подготовим персональное предложение.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact-form" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Получить корпоративное предложение
          </h2>
          <p className="text-gray-600 text-lg">
            Оставьте заявку, и мы подготовим предложение для вашей компании
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="company">Название компании *</Label>
              <Input
                id="company"
                name="company"
                required
                placeholder="ООО «Компания»"
                value={formData.company}
                onChange={handleChange}
                className="bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact">Контактное лицо *</Label>
              <Input
                id="contact"
                name="contact"
                required
                placeholder="Имя Фамилия"
                value={formData.contact}
                onChange={handleChange}
                className="bg-white"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="email@company.uz"
                value={formData.email}
                onChange={handleChange}
                className="bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон / Telegram *</Label>
              <Input
                id="phone"
                name="phone"
                required
                placeholder="+998 XX XXX XX XX или @username"
                value={formData.phone}
                onChange={handleChange}
                className="bg-white"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label>Размер команды *</Label>
              <Select
                value={formData.teamSize}
                onValueChange={(value) => handleSelectChange('teamSize', value)}
                required
              >
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Выберите..." />
                </SelectTrigger>
                <SelectContent>
                  {teamSizes.map(size => (
                    <SelectItem key={size} value={size}>{size}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Тип коробки *</Label>
              <Select
                value={formData.boxType}
                onValueChange={(value) => handleSelectChange('boxType', value)}
                required
              >
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Выберите..." />
                </SelectTrigger>
                <SelectContent>
                  {boxTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Частота доставки *</Label>
              <Select
                value={formData.frequency}
                onValueChange={(value) => handleSelectChange('frequency', value)}
                required
              >
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Выберите..." />
                </SelectTrigger>
                <SelectContent>
                  {frequencies.map(freq => (
                    <SelectItem key={freq} value={freq}>{freq}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comment">Комментарий</Label>
            <textarea
              id="comment"
              name="comment"
              rows={4}
              placeholder="Дополнительная информация или вопросы..."
              value={formData.comment}
              onChange={handleChange}
              className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-[#0A84FF] hover:bg-blue-600 text-white py-6 text-lg rounded-xl"
          >
            <Send className="mr-2 h-5 w-5" />
            Запросить предложение
          </Button>

          <p className="text-center text-gray-500 text-sm">
            Мы ответим в течение 24 часов и подготовим персональное предложение
          </p>
        </form>
      </div>
    </section>
  )
}
