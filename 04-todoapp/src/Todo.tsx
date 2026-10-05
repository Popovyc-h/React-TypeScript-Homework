import { useState } from 'react'

export type Todo = {
  id: number
  text: string
  isDone: boolean
}

type TodoProps = {
  todos: Todo[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
  onUpdate: (id: number, newText: string) => void
}

function TodoList({ todos, onDelete, onToggle, onUpdate }: TodoProps) {
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editText, setEditText] = useState('')

  function startEdit(todo: Todo) {
    setEditingId(todo.id)
    setEditText(todo.text)
  }

  return (
    <div>
      <h2>Todos:</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.isDone} onChange={() => onToggle(todo.id)} />
            {todo.id === editingId ? (
              <div>
                <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                <button
                  onClick={() => {
                    ;(onUpdate(editingId, editText), setEditingId(null))
                  }}
                >
                  Зберегти
                </button>
              </div>
            ) : (
              todo.text
            )}
            <button onClick={() => onDelete(todo.id)}>Видалити</button>
            <button
              onClick={() => {
                startEdit(todo)
              }}
            >
              Редагувати
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
