import { useState } from 'react'
import { fetchWeather } from '@/redux/weather/weatherSlice'
import { useAppDispatch } from '@/redux/hooks'

function WeatherForm() {
  const [cityName, setCityName] = useState('')
  const [country, setCountry] = useState('')

  const dispatch = useAppDispatch()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!cityName.trim()) return

    const query = country.trim() ? `${cityName.toLowerCase()},${country.toUpperCase()}` : cityName.toLowerCase()

    dispatch(fetchWeather(query))

    setCountry('')
    setCityName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="cityName"
        placeholder="Введіть місто..."
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />

      <input
        type="text"
        name="Country"
        value={country}
        placeholder="Країна (напр. UA)"
        onChange={(e) => setCountry(e.target.value)}
      />

      <button>Пошук</button>
    </form>
  )
}

export default WeatherForm
