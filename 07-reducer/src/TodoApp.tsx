import { useReducer } from 'react'

interface Todo {
  id: number
  text: string
  completed: boolean
}

type State = {
  todos: Todo[]
  inputValue: string
}

type Action =
  | { type: 'ADD_TODO' }
  | { type: 'DELETE_TODO'; payload: number }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'SET_INPUT'; payload: string }
  | { type: 'CLEAR_COMPLETED' }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: state.inputValue, completed: false }],
        inputValue: '',
      }
    case 'DELETE_TODO':
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) }
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)),
      }
    case 'SET_INPUT':
      return { ...state, inputValue: action.payload }
    case 'CLEAR_COMPLETED':
      return { ...state, todos: state.todos.filter((todo) => todo.completed === false) }
    default:
      return state
  }
}

function TodoApp() {
  const initialState: State = {
    todos: [],
    inputValue: '',
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>Список завдань</h1>

      <input
        type="text"
        value={state.inputValue}
        onChange={(e) => dispatch({ type: 'SET_INPUT', payload: e.target.value })}
      />

      <button onClick={() => dispatch({ type: 'ADD_TODO' })}>Додати завдання</button>

      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>

            <button onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
              {todo.completed ? 'Скасувати' : 'Виконати'}
            </button>

            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>Видалити</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>Видалити всі виконані завдання</button>
    </div>
  )
}

export default TodoApp
