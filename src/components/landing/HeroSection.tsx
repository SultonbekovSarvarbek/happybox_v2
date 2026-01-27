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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Send, Phone, CheckCircle } from 'lucide-react'

const teamSizes = ['1–10', '10–50', '50–200', '200+']
const boxTypes = ['Snack Box', 'Drinks Box', 'Mixed Box', 'Premium Box']
const frequencies = ['Еженедельно', 'Ежемесячно', 'Квартально']

export function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    teamSize: '',
    boxType: '',
    frequency: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleOpenDialog = () => {
    setSubmitted(false)
    setIsDialogOpen(true)
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-4 sm:px-6 lg:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230A84FF%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          Корпоративная подписка
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Корпоративная подписка на снеки и подарочные боксы для вашей команды
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Ваша компания выбирает состав коробки, количество сотрудников и частоту доставки.
          Мы упаковываем и доставляем в офис или сотрудникам.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            onClick={handleOpenDialog}
            className="w-full sm:w-auto bg-[#0A84FF] hover:bg-blue-600 text-white px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 cursor-pointer"
          >
            Запросить предложение
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-2 border-gray-300 hover:border-[#0A84FF] hover:text-[#0A84FF] px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg rounded-xl transition-all"
            asChild
          >
            <a href="https://t.me/s_sarvar" target="_blank" rel="noopener noreferrer">
              <Send className="mr-2 h-5 w-5" />
              Написать в Telegram
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center text-gray-600">
          <a
            href="tel:+998940444581"
            className="flex items-center gap-2 hover:text-[#0A84FF] transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span>+998 94 044 45 81</span>
          </a>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <DialogHeader>
                <DialogTitle className="text-2xl text-center">Заявка отправлена!</DialogTitle>
                <DialogDescription className="text-center text-base mt-2">
                  Мы ответим в течение 24 часов и подготовим персональное предложение.
                </DialogDescription>
              </DialogHeader>
              <Button
                onClick={() => setIsDialogOpen(false)}
                className="mt-6 bg-[#0A84FF] hover:bg-blue-600"
              >
                Закрыть
              </Button>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">Запросить предложение</DialogTitle>
                <DialogDescription>
                  Заполните форму, и мы подготовим предложение для вашей компании
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Компания *</Label>
                    <Input
                      id="company"
                      name="company"
                      required
                      placeholder="ООО «Компания»"
                      value={formData.company}
                      onChange={handleChange}
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
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      required
                      placeholder="+998 XX XXX XX XX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Команда *</Label>
                    <Select
                      value={formData.teamSize}
                      onValueChange={(value) => handleSelectChange('teamSize', value)}
                      required
                    >
                      <SelectTrigger className="w-full">
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
                    <Label>Тип бокса *</Label>
                    <Select
                      value={formData.boxType}
                      onValueChange={(value) => handleSelectChange('boxType', value)}
                      required
                    >
                      <SelectTrigger className="w-full">
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
                    <Label>Частота *</Label>
                    <Select
                      value={formData.frequency}
                      onValueChange={(value) => handleSelectChange('frequency', value)}
                      required
                    >
                      <SelectTrigger className="w-full">
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

                <Button
                  type="submit"
                  className="w-full bg-[#0A84FF] hover:bg-blue-600 text-white py-5"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Отправить заявку
                </Button>

                <p className="text-center text-gray-500 text-xs">
                  Мы ответим в течение 24 часов
                </p>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
