import express from 'express'
import cors from 'cors'
import { Resend } from 'resend'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

const resend = new Resend(process.env.RESEND_KEY)

app.use(cors())
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
      from: 'happy@happybox.uz',
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
      from: 'happy@happybox.uz',
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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
