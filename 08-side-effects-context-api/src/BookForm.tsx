import { useLibrary, type Book } from './context/LibraryContext'
import { useState } from 'react'

function BookForm() {
  const { addBook } = useLibrary()

  const [form, setForm] = useState({
    title: '',
    author: '',
    genre: '',
    year: '',
    pages: '',
    isAvailable: false,
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const newBook: Book = {
      id: Date.now(),
      title: form.title,
      author: form.author,
      genre: form.genre,
      year: +form.year,
      pages: +form.pages,
      isAvailable: !!form.isAvailable,
    }

    addBook(newBook)

    setForm({
      title: '',
      author: '',
      genre: '',
      year: '',
      pages: '',
      isAvailable: false,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Назва:
        <input name="title" type="text" onChange={handleChange} value={form.title} />
      </label>

      <label>
        Автор:
        <input name="author" type="text" onChange={handleChange} value={form.author} />
      </label>

      <label>
        Жанр:
        <input name="genre" type="text" onChange={handleChange} value={form.genre} />
      </label>

      <label>
        Рік:
        <input name="year" type="number" onChange={handleChange} value={form.year} />
      </label>

      <label>
        Сторінки:
        <input name="pages" type="number" onChange={handleChange} value={form.pages} />
      </label>

      <label>
        <input
          name="isAvailable"
          type="checkbox"
          onChange={(e) => setForm({ ...form, isAvailable: e.target.checked })}
          checked={Boolean(form.isAvailable)}
        />
        Доступна
      </label>

      <button type="submit">Додати книгу</button>
    </form>
  )
}

export default BookForm
