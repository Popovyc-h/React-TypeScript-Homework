import { createContext, useContext, useState, type ReactNode } from 'react'

export interface Book {
  id: number
  title: string
  author: string
  genre: string
  year: number
  pages: number
  isAvailable: boolean
}

interface LibraryContextType {
  books: Book[]
  addBook: (newBook: Book) => void
  deleteBook: (id: number) => void
  updateBook: (id: number, updateBook: Book) => void
  toggleBookStatus: (id: number) => void
}

const LibraryContext = createContext<LibraryContextType | undefined>(undefined)

function LibraryProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<Book[]>([])

  const addBook = (newBook: Book) => {
    setBooks((prev) => [...prev, newBook])
  }

  const deleteBook = (id: number) => {
    setBooks((prev) => prev.filter((book) => book.id !== id))
  }

  const updateBook = (id: number, updateBook: Book) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id
          ? {
              ...book,
              title: updateBook.title,
              author: updateBook.author,
              genre: updateBook.genre,
              year: updateBook.year,
              pages: updateBook.pages,
              isAvailable: updateBook.isAvailable,
            }
          : book,
      ),
    )
  }

  const toggleBookStatus = (id: number) => {
    setBooks((prev) => prev.map((book) => (book.id === id ? { ...book, isAvailable: !book.isAvailable } : book)))
  }

  return (
    <LibraryContext.Provider value={{ books, addBook, deleteBook, updateBook, toggleBookStatus }}>
      {children}
    </LibraryContext.Provider>
  )
}

export function useLibrary() {
  const context = useContext(LibraryContext)

  if (!context) throw new Error('useLibrary має використовуватись в LibraryProvider')

  return context
}

export default LibraryProvider
