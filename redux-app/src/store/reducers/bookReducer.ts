import { type BookstoreState } from '@/types'
import { type BookAction } from '@/store/actions/bookActions'

const initialState: BookstoreState = {
  books: [],
  filter: 'all',
  sortOrder: 'asc',
}

function BookReducer(state = initialState, action: BookAction) {
  switch (action.type) {
    case 'books/add':
      return {
        ...state,
        books: [...state.books, action.payload],
      }

    case 'books/delete':
      return { ...state, books: state.books.filter((book) => book.id !== action.payload) }

    case 'books/setFilter':
      return {
        ...state,
        filter: action.payload,
      }

    case 'books/setSort':
      return { ...state, sortOrder: action.payload }

    default:
      return state
  }
}

export default BookReducer
