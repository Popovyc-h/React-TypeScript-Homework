import UserPage from './UsersPage'
import ThemeProvider from './context/ThemeContext'

function App() {
  return (
    <>
      <ThemeProvider>
        <UserPage />
      </ThemeProvider>
    </>
  )
}

export default App
