import { useState } from 'react'
import ContactForm from './ContactForm'
import UserList from './UserList'
import './PhoneBook.css'

export type User = {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
}

function PhoneBook() {
  const [users, setUsers] = useState<User[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  function handleAddUser(newUser: User) {
    setUsers((prev) => [newUser, ...prev])
  }

  function handleDeleteUser(id: number) {
    setUsers((prev) => prev.filter((user) => user.id !== id))
  }

  const filteredUsers = users.filter((user) => user.lastName.toLowerCase().includes(searchTerm.toLowerCase()))

  function handleUpdateUser(newUser: User) {
    setUsers((prev) => prev.map((user) => (user.id === newUser.id ? newUser : user)))
  }

  return (
    <div className="phonebook">
      <ContactForm onAddUser={handleAddUser} />

      <section className="search-section">
        <h2>Пошук контакту</h2>

        <input
          className="search-input"
          type="text"
          value={searchTerm}
          placeholder="Введіть прізвище яке хочете знайти:"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>

      <section className="results-section">
        <h3>Результати пошуку</h3>
        <UserList users={filteredUsers} onDeleteUser={handleDeleteUser} onUpdateUser={handleUpdateUser} />
      </section>
    </div>
  )
}

export default PhoneBook
