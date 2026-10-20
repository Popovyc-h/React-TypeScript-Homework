export interface Book {
  id: number
  title: string
  author: string
  year: number
  genre: 'fiction' | 'science' | 'history' | 'biography'
  price: number
}

export interface BookstoreState {
  books: Book[]
  filter: 'all' | 'fiction' | 'science' | 'history' | 'biography'
  sortOrder: 'asc' | 'desc'
}
