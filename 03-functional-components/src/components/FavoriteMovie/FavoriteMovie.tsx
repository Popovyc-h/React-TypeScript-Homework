import './FavoriteMovie.css'

export type Movie = {
  filmTitle: string
  directorName: string
  releaseYear: number
  studioName: string
  posterUrl: string
  genre: 'Жахи' | 'Комедія' | 'Бойовик' | 'Драма'
  duration: number
  budget: number
  country: string
  rating: number
  description: string
}

type FavoriteMovieProps = {
  movie: Movie
}

function FavoriteMovie({ movie }: FavoriteMovieProps) {
  const {
    filmTitle,
    directorName,
    releaseYear,
    studioName,
    posterUrl,
    genre,
    duration,
    budget,
    country,
    rating,
    description,
  } = movie

  return (
    <article className="movie-card">
      <header>
        <h1>{filmTitle}</h1>
      </header>

      <figure>
        <img src={posterUrl} alt={`Постер фільму ${filmTitle}`} />
      </figure>

      <div>
        <dl>
          <dt>Режисер:</dt>
          <dd>{directorName}</dd>

          <dt>Рік випуску:</dt>
          <dd>{releaseYear}</dd>

          <dt>Кіностудія:</dt>
          <dd>{studioName}</dd>

          <dt>Жанр:</dt>
          <dd>{genre}</dd>

          <dt>Тривалість:</dt>
          <dd>{duration} хв</dd>

          <dt>Бюджет:</dt>
          <dd>{budget.toLocaleString()}</dd>

          <dt>Країна:</dt>
          <dd>{country}</dd>

          <dt>Рейтинг:</dt>
          <dd>{rating}</dd>
        </dl>

        <p>{description}</p>
      </div>
    </article>
  )
}

export default FavoriteMovie
