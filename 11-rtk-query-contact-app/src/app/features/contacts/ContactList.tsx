import {
  useGetContactsQuery,
  useDeleteContactMutation,
  useToggleFavoriteMutation,
} from '@/app/features/contacts/contactApi'
import { useState, useEffect } from 'react'

function ContactList() {
  const { data, error, isLoading } = useGetContactsQuery()
  const [deleteContact] = useDeleteContactMutation()
  const [toggleContact] = useToggleFavoriteMutation()
  const [filter, setFilter] = useState<'all' | 'favorites'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  useEffect(() => {
    let id = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 500)

    return () => clearTimeout(id)
  }, [searchQuery])

  if (isLoading) return <p>Завантаження</p>
  if (error) return <p>Помилка </p>

  const contactCount = data?.length
  const favoriteContactCount = data?.filter((contact) => contact.isFavorite === true).length

  const filtredItems = data
    ?.filter((contact) => {
      if (filter === 'favorites') {
        return contact.isFavorite === true
      }
      return true
    })
    .filter((contact) => contact.name.toLowerCase().includes(debouncedQuery.toLowerCase()))

  return (
    <div>
      <h3>Пошук</h3>
      <input type="text" onChange={(e) => setSearchQuery(e.target.value)} />
      <hr />

      <h3>Фільтрація</h3>
      <button onClick={() => setFilter('all')}>Усі</button>
      <button onClick={() => setFilter('favorites')}>Улюблені</button>
      <hr />

      {filtredItems?.map((contact) => (
        <li key={contact.id}>
          <div>
            <strong>{contact.name}</strong> ({contact.phone}) — {contact.email}
            <span>{contact.isFavorite ? '⭐' : '☆'}</span>
          </div>

          <div>
            <button onClick={() => toggleContact({ id: contact.id, isFavorite: !contact.isFavorite })}>
              {contact.isFavorite ? 'Зняти улюблене' : 'У улюблені'}
            </button>
          </div>

          <button onClick={() => deleteContact(contact.id)}>Видалити</button>
        </li>
      ))}

      <hr />
      <div>
        <h3>Статистика</h3>
        <p>Загальна кількість: {contactCount}</p>
        <p>Кількість улюблених: {favoriteContactCount}</p>
      </div>
    </div>
  )
}

export default ContactList
