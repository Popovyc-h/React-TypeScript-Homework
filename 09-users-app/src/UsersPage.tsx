import { useEffect, useReducer, useState } from 'react'
import UserForm from './UserForm'
import { useTheme } from './context/ThemeContext'
import './style.css'

export interface User {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  email: string
  role: string
}

interface State {
  users: User[]
}

type Action =
  | { type: 'SET_USERS'; payload: User[] }
  | { type: 'ADD_USER'; payload: User }
  | { type: 'DELETE_USER'; payload: number }

const initialState: State = {
  users: [],
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload }
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.payload] }
    case 'DELETE_USER':
      return { ...state, users: state.users.filter((user) => user.id !== action.payload) }
    default:
      return state
  }
}

function UserPage() {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [state, dispatch] = useReducer(reducer, initialState)
  const { theme, toggleTheme } = useTheme()
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  useEffect(() => {
    async function fetchUser() {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch('https://dummyjson.com/users?limit=3')

        if (!response.ok) throw new Error('Помилка завантаження')

        const data = await response.json()
        dispatch({ type: 'SET_USERS', payload: data.users })
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Невідома помилка')
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [])

  useEffect(() => {
    let timerId = setTimeout(() => {
      setDebouncedQuery(query)
    }, 500)

    return () => clearTimeout(timerId)
  }, [query])

  const filteredUsers = state.users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(debouncedQuery) || user.lastName.toLowerCase().includes(debouncedQuery),
  )

  return (
    <div className={theme === 'light' ? 'light' : 'dark'}>
      <button onClick={toggleTheme}>Тема: {theme}</button>
      <h1>Додати нового користувача</h1>
      <UserForm
        onAddUser={(formData) => {
          const newUser: User = {
            id: state.users.length > 0 ? state.users[state.users.length - 1].id + 1 : 1,
            firstName: formData.firstName,
            lastName: formData.lastName,
            maidenName: formData.maidenName,
            age: +formData.age,
            email: formData.email,
            role: formData.role,
          }

          dispatch({ type: 'ADD_USER', payload: newUser })
        }}
      />
      <div>
        <h2>Пошук</h2>
        <input type="text" placeholder="Пошук..." value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <div>
              <h2>
                {user.firstName} {user.lastName} (ID {user.id})
              </h2>
              <h2>{user.maidenName}</h2>
              <p>{user.age}</p>
              <p>{user.email}</p>
              <p>{user.role}</p>
              <button onClick={() => dispatch({ type: 'DELETE_USER', payload: user.id })}>Видалити</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserPage
