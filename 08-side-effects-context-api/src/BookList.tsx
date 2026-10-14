import { useLibrary, type Book } from './context/LibraryContext'
import { useState } from 'react'

function BookList() {
  const { books, deleteBook, toggleBookStatus, updateBook } = useLibrary()
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState<Book | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  function handleStartEdit(book: Book) {
    setEditingId(book.id)
    setEditForm({ ...book })
  }

  function handleEditChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!editForm) return
    setEditForm({ ...editForm, [e.target.name]: e.target.value })
  }

  function handleSaveEdit(book: Book) {
    if (!editForm) return

    const newBook: Book = {
      id: book.id,
      title: editForm?.title,
      author: editForm?.author,
      genre: editForm.genre,
      year: editForm.year,
      pages: editForm.pages,
      isAvailable: editForm.isAvailable,
    }

    updateBook(book.id, newBook)

    setEditingId(null)
    setEditForm(null)
  }

  const availableBooks = books.filter(
    (book) =>
      (book.title.includes(searchTerm) && book.isAvailable) ||
      (book.author.includes(searchTerm) && book.isAvailable) ||
      (book.genre.includes(searchTerm) && book.isAvailable) ||
      (String(book.pages).includes(searchTerm) && book.isAvailable),
  )

  const borrowedBooks = books.filter((book) => !book.isAvailable)

  return (
    <div>
      <h2>Каталог доступних книг</h2>

      <input type="text" placeholder="Пошук..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

      {books.length === 0 ? (
        <p>Бібліотека порожня</p>
      ) : (
        <ul>
          {availableBooks.map((book) => {
            const isCurrentEditing = editingId === book.id

            return (
              <li key={book.id}>
                {isCurrentEditing ? (
                  <div>
                    <label>
                      Назва:
                      <input name="title" type="text" onChange={handleEditChange} value={editForm?.title} />
                    </label>

                    <label>
                      Автор:
                      <input name="author" type="text" onChange={handleEditChange} value={editForm?.author} />
                    </label>

                    <label>
                      Жанр:
                      <input name="genre" type="text" onChange={handleEditChange} value={editForm?.genre} />
                    </label>

                    <label>
                      Рік:
                      <input name="year" type="number" onChange={handleEditChange} value={editForm?.year} />
                    </label>

                    <label>
                      Сторінки:
                      <input name="pages" type="number" onChange={handleEditChange} value={editForm?.pages} />
                    </label>

                    <label>
                      <input
                        name="isAvailable"
                        type="checkbox"
                        onChange={(e) => {
                          if (!editForm) return
                          setEditForm({ ...editForm, isAvailable: e.target.checked })
                        }}
                        checked={Boolean(editForm?.isAvailable)}
                      />
                      Доступна
                    </label>

                    <p>Режим редагування для: {book.title}</p>

                    <button onClick={() => setEditingId(null)}>Скасувати</button>
                    <button onClick={() => handleSaveEdit(book)}>Зберегти</button>
                  </div>
                ) : (
                  <div>
                    <div>
                      <h3>{book.title}</h3>
                      <p>Автор: {book.author}</p>
                      <p>Жанр: {book.genre}</p>
                      <p>Рік: {book.year}</p>
                      <p>Кількість сторінок: {book.pages}</p>
                      <p>Статус: {book.isAvailable ? 'В наявності' : 'Видана'}</p>
                    </div>
                    <div>
                      <button onClick={() => handleStartEdit(book)}>Редагувати</button>
                      <button onClick={() => deleteBook(book.id)}>Видалити</button>
                      <button onClick={() => toggleBookStatus(book.id)}>Змінити статус</button>
                    </div>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      )}
      <section>
        <h2>Видані книги ({borrowedBooks.length})</h2>

        {borrowedBooks.length === 0 ? (
          <p>Немає виданих книг</p>
        ) : (
          <ul>
            {borrowedBooks.map((book) => (
              <li key={book.id}>
                <div>
                  <h3>{book.title}</h3>
                  <p>Автор: {book.author}</p>
                  <button onClick={() => toggleBookStatus(book.id)}>Повернути</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

export default BookList
