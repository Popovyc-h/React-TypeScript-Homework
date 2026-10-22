import { useState } from 'react'
import { addContact } from '@/app/features/Contact/contactSlice'
import { useAppDispatch } from '@/app/hooks'

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    isFavorite: false,
  })

  const dispatch = useAppDispatch()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const newContact = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      isFavorite: form.isFavorite,
    }

    dispatch(addContact(newContact))

    setForm({
      name: '',
      phone: '',
      email: '',
      isFavorite: false,
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={form.name}
          onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
        />

        <input
          type="text"
          name="phone"
          placeholder="phone"
          value={form.phone}
          onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
        />

        <input
          type="text"
          name="email"
          placeholder="email"
          value={form.email}
          onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
        />

        <input
          type="checkbox"
          name="isFavorite"
          onChange={(e) => setForm((prev) => ({ ...prev, isFavorite: e.target.checked }))}
          checked={Boolean(form.isFavorite)}
        />

        <button>Додати</button>
      </form>
    </div>
  )
}

export default ContactForm
