import { useState } from 'react'
import { type User } from './PhoneBook'

type UserListProps = {
  users: User[]
  onDeleteUser: (id: number) => void
  onUpdateUser: (newUser: User) => void
}

function UserList({ users, onDeleteUser, onUpdateUser }: UserListProps) {
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editFormData, setEditFormData] = useState<User | null>(null)

  function startEditing(user: User) {
    setEditingId(user.id)
    setEditFormData(user)
  }

  function handleSave() {
    if (editFormData) {
      onUpdateUser(editFormData)
      setEditingId(null)
      setEditFormData(null)
    }
  }

  return (
    <div className="user-list">
      <ul>
        {users.map((user) => (
          <li className="user-item" key={user.id}>
            {user.id === editingId ? (
              <>
                <input
                  className="edit-input"
                  type="text"
                  placeholder={`Введіть ім'я:`}
                  value={editFormData?.firstName}
                  onChange={(e) => setEditFormData((prev) => ({ ...prev!, firstName: e.target.value }))}
                />

                <input
                  className="edit-input"
                  type="text"
                  placeholder="Введіть прізвище:"
                  value={editFormData?.lastName}
                  onChange={(e) => setEditFormData((prev) => ({ ...prev!, lastName: e.target.value }))}
                />

                <input
                  className="edit-input"
                  type="email"
                  placeholder="Введіть email:"
                  value={editFormData?.email}
                  onChange={(e) => setEditFormData((prev) => ({ ...prev!, email: e.target.value }))}
                />

                <input
                  className="edit-input"
                  type="tel"
                  placeholder="Введіть номер телефона:"
                  value={editFormData?.phone}
                  onChange={(e) => setEditFormData((prev) => ({ ...prev!, phone: e.target.value }))}
                />

                <button onClick={() => handleSave()}>Зберегти</button>
              </>
            ) : (
              <>
                <span className="user-name">
                  {user.firstName} {user.lastName}
                </span>
                <span className="user-email">{user.email} </span>
                <span className="user-phone"> {user.phone} </span>
                <button className="delete-button" onClick={() => onDeleteUser(user.id)}>
                  Видалити
                </button>
                <button className="edit-button" onClick={() => startEditing(user)}>
                  Редагувати
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
