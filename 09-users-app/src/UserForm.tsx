import { useState } from 'react'

interface UserFormProps {
  onAddUser: (formData: {
    firstName: string
    lastName: string
    maidenName: string
    age: string
    email: string
    role: string
  }) => void
}

function UserForm({ onAddUser }: UserFormProps) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    maidenName: '',
    age: '',
    email: '',
    role: '',
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    onAddUser(form)

    setForm({
      firstName: '',
      lastName: '',
      maidenName: '',
      age: '',
      email: '',
      role: '',
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="firstName"
        value={form.firstName}
        onChange={(e) => setForm((prev) => ({ ...prev, firstName: e.target.value }))}
      />

      <input
        type="text"
        name="lastName"
        placeholder="lastName"
        value={form.lastName}
        onChange={(e) => setForm((prev) => ({ ...prev, lastName: e.target.value }))}
      />

      <input
        type="text"
        name="maidenName"
        placeholder="maidenName"
        value={form.maidenName}
        onChange={(e) => setForm((prev) => ({ ...prev, maidenName: e.target.value }))}
      />

      <input
        type="number"
        name="age"
        placeholder="age"
        value={form.age}
        onChange={(e) => setForm((prev) => ({ ...prev, age: e.target.value }))}
      />

      <input
        type="text"
        name="email"
        placeholder="email"
        value={form.email}
        onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
      />

      <input
        type="text"
        name="role"
        placeholder="role"
        value={form.role}
        onChange={(e) => setForm((prev) => ({ ...prev, role: e.target.value }))}
      />
      <button>Додати</button>
    </form>
  )
}

export default UserForm
