import TodoList from './Todo'
import { type Todo } from './Todo'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [text, setText] = useState('')

  function addTodo() {
    if (!text.trim()) return

    const newTodo: Todo = {
      id: Date.now(),
      text,
      isDone: false,
    }

    setTodos((prev) => [...prev, newTodo])
    setText('')
  }

  function deleteTodo(id: number) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  function toggleTodo(id: number) {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone }
        }
        return todo
      }),
    )
  }

  function updateTodo(id: number, newText: string) {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText }
        }
        return todo
      }),
    )
  }

  return (
    <div>
      <h1>Todo App</h1>

      <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Введіть задачу..." />
        <button onClick={addTodo}>Додати</button>
      </div>

      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} onUpdate={updateTodo} />
    </div>
  )
}

export default App
