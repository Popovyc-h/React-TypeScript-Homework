import { useSelector, useDispatch } from 'react-redux'
import { type RootState } from '@/store/store'
import { deleteBook } from '@/store/actions/bookActions'
import BookFilter from '@/BookFilter'
import { setSort } from '@/store/actions/bookActions'

function BookList() {
  const books = useSelector((state: RootState) => state.books)
  const filter = useSelector((state: RootState) => state.filter)
  const sortOrder = useSelector((state: RootState) => state.sortOrder)
  const dispatch = useDispatch()

  const filteredBooks = books.filter((book) => {
    if (filter === 'all') return true
    return book.genre === filter
  })

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price
    } else {
      return b.price - a.price
    }
  })

  const toggleSort = () => {
    const nextOrder = sortOrder === 'asc' ? 'desc' : 'asc'
    dispatch(setSort(nextOrder))
  }

  const totalCount = books.length
  const totalPrice = books.reduce((acc, book) => acc + book.price, 0)
  const averagePrice = totalCount > 0 ? (totalPrice / totalCount).toFixed(2) : 0

  const mostExpensiveBook = books.reduce((prev, current) => {
    return current.price > (prev?.price || 0) ? current : prev
  }, books[0])

  if (books.length === 0) {
    return <p>Список книг порожній.</p>
  }

  return (
    <>
      <div>
        <BookFilter />
        <hr />
        <button onClick={toggleSort}>Сортування за ціною: {sortOrder === 'asc' ? 'Зростання' : 'Спадання'}</button>
        <h3>Список книг</h3>
        <ul>
          {sortedBooks.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> — {book.author}
              <p>
                <strong>Рік:</strong> {book.year}
              </p>
              <p>
                <strong>Жанр:</strong> {book.genre}
              </p>
              <p>
                <strong>Ціна:</strong> {book.price}
              </p>
              <button onClick={() => dispatch(deleteBook(book.id))}>Видалити</button>
            </li>
          ))}
        </ul>
      </div>

      <hr />

      <div>
        <h4>Статистика бібліотеки:</h4>
        <p>
          Загальна кількість книг: <strong>{totalCount}</strong>
        </p>
        <p>
          Середня ціна: <strong>${averagePrice}</strong>
        </p>
        <p>
          Найдорожча книга:
          <strong>{mostExpensiveBook ? `${mostExpensiveBook.title} ($${mostExpensiveBook.price})` : 'Немає'}</strong>
        </p>
      </div>
    </>
  )
}

export default BookList
