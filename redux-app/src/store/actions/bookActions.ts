import { type Book, type BookstoreState } from '@/types'

export const BOOK_ADD = 'books/add'
export const BOOK_DELETE = 'books/delete'
export const BOOK_SET_FILTER = 'books/setFilter'
export const BOOK_SET_SORT = 'books/setSort'

export const addBook = (newBook: Book) => {
  return { type: BOOK_ADD, payload: newBook }
}

export const deleteBook = (id: number) => {
  return { type: BOOK_DELETE, payload: id }
}

export const setFilter = (filter: BookstoreState['filter']) => {
  return { type: BOOK_SET_FILTER, payload: filter }
}

export const setSort = (order: BookstoreState['sortOrder']) => {
  return { type: BOOK_SET_SORT, payload: order }
}

export type BookAction =
  | { type: typeof BOOK_ADD; payload: Book }
  | { type: typeof BOOK_DELETE; payload: number }
  | { type: typeof BOOK_SET_FILTER; payload: BookstoreState['filter'] }
  | { type: typeof BOOK_SET_SORT; payload: BookstoreState['sortOrder'] }
