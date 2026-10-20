import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '@/store/actions/bookActions'
import { type Book } from '@/types'

function BookForm() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [year, setYear] = useState('')
  const [genre, setGenre] = useState<Book['genre']>('fiction')
  const [price, setPrice] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newBook: Book = {
      id: Date.now(),
      title,
      author,
      year: +year,
      genre,
      price: +price,
    }

    dispatch(addBook(newBook))

    setTitle('')
    setAuthor('')
    setYear('')
    setGenre('fiction')
    setPrice('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Додати нову книгу</h3>

      <input type="text" placeholder="Назва" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Автор" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <input type="number" placeholder="Рік видання" value={year} onChange={(e) => setYear(e.target.value)} />

      <select value={genre} onChange={(e) => setGenre(e.target.value as Book['genre'])}>
        <option value="fiction">Fiction</option>
        <option value="science">Science</option>
        <option value="history">History</option>
        <option value="biography">Biography</option>
      </select>

      <input type="number" placeholder="Ціна" value={price} onChange={(e) => setPrice(e.target.value)} />

      <button type="submit">Додати книгу</button>
    </form>
  )
}

export default BookForm
