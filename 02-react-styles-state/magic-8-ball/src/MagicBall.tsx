import { useState } from 'react'
import './MagicBall.css'
const answers: string[] = [
  'Безсумнівно',
  'Мені здається — так',
  'Поки не ясно, спробуй знову',
  'Навіть не думай',
  'Знаки кажуть — так',
  'Однозначно так',
  'Безперечно',
  'Можеш на це розраховувати',
  'Схоже на те',
  'Ймовірно',
  'Не можу зараз сказати',
  'Запитай мене пізніше',
  'Краще не сподівайся',
  'Мої джерела кажуть — ні',
  'Скоріше за все — ні',
  'Відповідь не дуже обнадійлива',
  'Шанси невеликі',
  'Навіть не розраховуй',
  'Ні',
  'Абсолютно ні',
]

function MagicBall() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('8')

  function handleGetAnswer() {
    if (question.trim() === '') {
      setAnswer('Задай питання!')
      return
    }

    let randomIndex = Math.floor(Math.random() * answers.length)
    setAnswer(answers[randomIndex])
  }

  return (
    <div className="container">
      <div className="ball" onClick={handleGetAnswer}>
        <div className="window">
          <span className="answer-text">{answer}</span>
        </div>
      </div>

      <div className="controls">
        <input value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Введи запитання..." />
        <button onClick={handleGetAnswer}>Дізнатися долю</button>
      </div>
    </div>
  )
}

export default MagicBall
