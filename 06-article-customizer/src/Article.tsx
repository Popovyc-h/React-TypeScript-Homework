export type ArticleData = {
  title: string
  author: string
  text: string
  publicationDate: string
}

export type ArticleStyle = {
  fontFamily?: string
  fontSize?: number
  color?: string
}

export type ArticleBackgrounds = {
  titleBackground?: string
  authorBackground?: string
  textBackground?: string
  dateBackground?: string
}

export type ArticleLayout = {
  imagePosition?: 'left' | 'right'
  titlePosition?: 'left' | 'right' | 'center'
}

type ArticleProps = {
  article: ArticleData
  style?: ArticleStyle
  background?: ArticleBackgrounds
  layout?: ArticleLayout
  imageSrc?: string
}

function Article({ article, style, background, layout, imageSrc }: ArticleProps) {
  const { title, author, text, publicationDate } = article

  return (
    <article style={style}>
      <header>
        <h1 style={{ backgroundColor: background?.titleBackground, textAlign: layout?.titlePosition }}>{title}</h1>

        <p style={{ backgroundColor: background?.authorBackground }}>By {author}</p>
      </header>

      <div
        style={{
          display: 'flex',
          flexDirection: layout?.imagePosition === 'right' ? 'row-reverse' : 'row',
          gap: '16px',
          alignItems: 'flex-start',
        }}
      >
        {imageSrc && <img src={imageSrc} alt={title} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />}

        <div>
          <p style={{ backgroundColor: background?.textBackground }}>{text}</p>
          <time style={{ backgroundColor: background?.dateBackground }} dateTime={publicationDate}>
            {publicationDate}
          </time>
        </div>
      </div>
    </article>
  )
}

export default Article
