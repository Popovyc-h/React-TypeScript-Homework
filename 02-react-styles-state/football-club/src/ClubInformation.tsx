type ClubProps = {
  name: string
  city: string
  foundationDate: string
  logoUrl: string
}

function ClubInformation({ name, city, foundationDate, logoUrl }: ClubProps) {
  return (
    <div>
      <h1>Назва клубу: {name}</h1>
      <h2>Місто: {city}</h2>
      <p>Дата заснування клубу: {foundationDate}</p>
      <div>
        <p>Герб:</p>
        <img src={logoUrl} alt={`Логотип ${name}`} style={{ width: '100px' }} />
      </div>
    </div>
  )
}

export default ClubInformation
