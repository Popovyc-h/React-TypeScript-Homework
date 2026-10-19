import { createContext, useContext, useState, type ReactNode } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme має використовуватись всередині ThemeProvider')
  }

  return context
}

export default ThemeProvider
