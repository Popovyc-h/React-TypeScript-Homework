import { type User } from './PhoneBook'
import { useState } from 'react'

type ContactFormProps = {
  onAddUser: (newUser: User) => void
}

function ContactForm({ onAddUser }: ContactFormProps) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const newUser: User = {
      id: Date.now(),
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
    }

    onAddUser(newUser)
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    })
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={`Введіть ім'я:`}
        value={form.firstName}
        onChange={(e) => setForm((prev) => ({ ...prev, firstName: e.target.value }))}
      />

      <input
        type="text"
        placeholder="Введіть прізвище:"
        value={form.lastName}
        onChange={(e) => setForm((prev) => ({ ...prev, lastName: e.target.value }))}
      />

      <input
        type="email"
        placeholder="Введіть email:"
        value={form.email}
        onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
      />

      <input
        type="tel"
        placeholder="Введіть номер телефона:"
        value={form.phone}
        onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
      />

      <button className="add-button" type="submit">
        Додати
      </button>
    </form>
  )
}

export default ContactForm
