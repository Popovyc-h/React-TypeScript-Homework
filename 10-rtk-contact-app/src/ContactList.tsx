import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { fetchContacts, deleteContact, toggleFavorite, setFilter } from '@/app/features/Contact/contactSlice'

function ContactList() {
  const dispatch = useAppDispatch()
  const { items, isLoading, error } = useAppSelector((state) => state.contacts)
  const filter = useAppSelector((state) => state.contacts.filter)
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  useEffect(() => {
    let timerId = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 500)

    return () => clearTimeout(timerId)
  }, [searchQuery])

  const filteredItems = items
    .filter((contact) => {
      if (filter === 'favorites') {
        return contact.isFavorite
      }
      return true
    })
    .filter((contact) => {
      return contact.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    })

  const allContactCount = items.length
  const favoriteCount = items.filter((item) => item.isFavorite).length

  if (isLoading) return <h2>Завантаження контактів...</h2>
  if (error) return <h2>Помилка: {error}</h2>

  return (
    <div>
      <h1>Менеджер контактів (Redux Test)</h1>

      <button onClick={() => dispatch(setFilter('all'))}>Усі</button>
      <button onClick={() => dispatch(setFilter('favorites'))}>Тільки улюблені</button>

      {items.length === 0 ? (
        <p>Список контактів порожній</p>
      ) : (
        <div>
          <h3>Пошук:</h3>
          <input type="text" onChange={(e) => setSearchQuery(e.target.value)} />

          <ul>
            {filteredItems.map((contact) => (
              <li key={contact.id}>
                <div>
                  <strong>{contact.name}</strong> ({contact.phone}) — {contact.email}
                  <span>{contact.isFavorite ? '⭐' : '☆'}</span>
                </div>

                <div>
                  <button onClick={() => dispatch(toggleFavorite(contact.id))}>
                    {contact.isFavorite ? 'Зняти улюблене' : 'У улюблені'}
                  </button>

                  <button onClick={() => dispatch(deleteContact(contact.id))}>Видалити</button>
                </div>
              </li>
            ))}
          </ul>
          <hr />
          <h3>Статистика</h3>
          <p>Загальна кількість контактів: {allContactCount}</p>
          <p>Кількість улюблених контактів: {favoriteCount}</p>
        </div>
      )}
    </div>
  )
}

export default ContactList
