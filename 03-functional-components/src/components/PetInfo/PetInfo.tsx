import './PetInfo.css'

export type Cat = {
  name: string
  breed: string
  age: number
  color: string
  photoUrl: string
  favoriteFood: string
  characterTraits: string[]
  isVaccinated: boolean
  favoriteSpot: string
  description: string
}

type PetProps = {
  cat: Cat
}

function PetInfo({ cat }: PetProps) {
  const { name, breed, age, color, photoUrl, favoriteFood, characterTraits, isVaccinated, favoriteSpot, description } =
    cat
  return (
    <section>
      <header>
        <h2>{name}</h2>
      </header>

      <figure>
        <img src={photoUrl} alt={`Кішка ${name}`} />
      </figure>

      <div>
        <dl>
          <dt>Порода:</dt>
          <dd>{breed}</dd>
          <dt>Вік:</dt>
          <dd>{age}</dd>

          <dt>Колір:</dt>
          <dd>{color}</dd>

          <dt>Улюблена їжа:</dt>
          <dd>{favoriteFood}</dd>

          <dt>Улюблене місце:</dt>
          <dd>{favoriteSpot}</dd>

          <dt>Щеплений:</dt>
          <dd>{isVaccinated ? 'Так' : 'Ні'}</dd>
        </dl>

        <h3>Риси характеру:</h3>
        <ul>
          {characterTraits.map((trai) => (
            <li key={trai}>{trai}</li>
          ))}
        </ul>
      </div>

      <p>{description}</p>
    </section>
  )
}

export default PetInfo
