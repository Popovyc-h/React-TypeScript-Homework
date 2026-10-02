import { useState } from 'react'
import './DigitalClock.css'

function DigitalClock() {
  const [time, setTime] = useState(new Date())

  setInterval(() => {
    setTime(new Date())
  }, 1000)

  return (
    <article className="clock-card">
      <header className="clock-card__header">Поточний час</header>

      <div>
        <time className="clock-card__time">{time.toLocaleTimeString()}</time>
      </div>
    </article>
  )
}

export default DigitalClock
