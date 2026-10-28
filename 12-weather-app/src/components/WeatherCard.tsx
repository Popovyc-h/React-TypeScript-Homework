import { useAppSelector } from '@/redux/hooks'

function WeatherCard() {
  const { data, isLoading, error } = useAppSelector((state) => state.weather)
  const now = Date.now() / 1000
  const sunrise = data?.sys.sunrise
  const sunset = data?.sys.sunset
  const isDaytime = now >= sunrise!! && now < sunset!!

  return (
    <div>
      {isLoading && <p>Завантаження погоди...</p>}

      {error && <p style={{ color: 'red' }}>Помилка: {error}</p>}

      {data && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h2>
            {data.name} - {data.sys.country}
          </h2>
          <p>Температура: {data.main.temp} °C</p>
          <p>Вологість: {data.main.humidity}%</p>
          <p>Стан: {data.weather[0].description}</p>

          <p>Схід сонця: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p>Захід сонця: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>

          {isDaytime ? <span>☀️ День (Сонце зійшло)</span> : <span>🌙 Ніч (Сонце зайшло)</span>}

          <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather icon" />
        </div>
      )}
    </div>
  )
}

export default WeatherCard
