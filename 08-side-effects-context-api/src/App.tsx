import LibraryProvider from './context/LibraryContext'
import BookList from './BookList'
import BookForm from './BookForm'

function App() {
  return (
    <LibraryProvider>
      <div>
        <h1>Бібліотека</h1>
        <BookForm />
        <BookList />
      </div>
    </LibraryProvider>
  )
}

export default App
