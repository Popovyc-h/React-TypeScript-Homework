import Article, { type ArticleData, type ArticleStyle, type ArticleBackgrounds, type ArticleLayout } from './Article'

function App() {
  const article: ArticleData = {
    title: 'Сучасні тенденції у веб-розробці',
    author: 'Олександр Шевченко',
    text: 'Веб-розробка розвивається неймовірно стрімко. Фреймворки на кшталт React та Angular стали стандартом для створення інтерактивних інтерфейсів. Головний фокус тепер спрямований на продуктивність, зручність користувача (UX) та адаптивність дизайну під будь-які екрани.',
    publicationDate: '11.10.2026',
  }

  const style: ArticleStyle = {
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    fontSize: 18,
    color: '#2c3e50',
  }

  const backgrounds: ArticleBackgrounds = {
    titleBackground: '#e8f4fd',
    authorBackground: '#f1f2f6',
    textBackground: '#fdfbf7',
    dateBackground: '#f1f2f6',
  }

  const layout: ArticleLayout = {
    titlePosition: 'center',
    imagePosition: 'left',
  }

  return (
    <div
      style={{
        maxWidth: '700px',
        margin: '40px auto',
        padding: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        borderRadius: '8px',
      }}
    >
      <Article
        article={article}
        style={style}
        background={backgrounds}
        layout={layout}
        imageSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
      />
    </div>
  )
}

export default App
