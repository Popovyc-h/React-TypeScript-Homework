import ClubInformation from './ClubInformation.tsx'
import ClubAchievements from './ClubAchievements.tsx'
import ClubSquad from './ClubSquad.tsx'
import { useState } from 'react'
import { type Player } from './ClubSquad.tsx'
import './styles.css'

type Clubs = {
  id: number
  name: string
  city: string
  foundationDate: string
  logoUrl: string
  cups: string[]
  medals: string[]
  players: Player[]
}

function App() {
  const clubs: Clubs[] = [
    {
      id: 1,
      name: 'Барселона',
      city: 'Барселона',
      foundationDate: '29.11.1899',
      logoUrl: 'https://icon2.cleanpng.com/lnd/20241224/fy/4aaaed54bf3d7a0b628ed9b58d67b1.webp',
      cups: [
        'Кубок Іспанії (Копа дель Рей): 31 кубок',
        'Суперкубок Іспанії: 14 кубків',
        'Ліга чемпіонів УЄФА: 5 кубків',
        'Суперкубок УЄФА: 5 кубків',
        'Кубок володарів кубків УЄФА: 4 кубки',
      ],
      medals: [
        'Золоті медалі чемпіонату Іспанії (Ла Ліга): 29 титулів чемпіона',
        'Золоті медалі чемпіонату Каталонії: 23 титули',
        'Кубок Каталонії / Суперкубок Каталонії: 10 золотих медалей',
      ],
      players: [
        { id: 1, name: 'Хоан Гарсія', position: 'Воротар', number: 1 },
        { id: 2, name: 'Войцех Щенсний', position: 'Воротар', number: 13 },
        { id: 3, name: 'Домінік Лівакович', position: 'Воротар', number: 25 },
        { id: 4, name: 'Жуан Канселу', position: 'Захисник', number: 2 },
        { id: 5, name: 'Алехандро Бальде', position: 'Захисник', number: 3 },
        { id: 6, name: 'Пау Кубарсі', position: 'Захисник', number: 5 },
        { id: 7, name: 'Браян Фаріньяс', position: 'Півзахисник', number: 4 },
        { id: 8, name: 'Гаві', position: 'Півзахисник', number: 6 },
        { id: 9, name: 'Фермін Лопес', position: 'Півзахисник', number: 7 },
        { id: 10, name: 'Габріел Жезус', position: 'Нападник', number: 9 },
        { id: 11, name: 'Ламін Ямаль', position: 'Нападник', number: 10 },
        { id: 12, name: 'Рафінья', position: 'Нападник', number: 11 },
      ],
    },
    {
      id: 2,
      name: 'Реал Мадрид',
      city: 'Мадрид',
      foundationDate: '06.03.1902',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
      cups: [
        'Ліга чемпіонів УЄФА: 15 кубків',
        'Кубок Іспанії (Копа дель Рей): 20 кубків',
        'Суперкубок Іспанії: 13 кубків',
        'Суперкубок УЄФА: 6 кубків',
      ],
      medals: ['Золоті медалі чемпіонату Іспанії (Ла Ліга): 36 титулів', 'Клубний чемпіонат світу: 5 золотих медалей'],
      players: [
        { id: 101, name: 'Тібо Куртуа', position: 'Воротар', number: 1 },
        { id: 102, name: 'Дані Карвахаль', position: 'Захисник', number: 2 },
        { id: 103, name: 'Антоніо Рюдігер', position: 'Захисник', number: 22 },
        { id: 104, name: 'Джуд Беллінгем', position: 'Півзахисник', number: 5 },
        { id: 105, name: 'Федеріко Вальверде', position: 'Півзахисник', number: 8 },
        { id: 106, name: 'Вінісіус Жуніор', position: 'Нападник', number: 7 },
        { id: 107, name: 'Кіліан Мбаппе', position: 'Нападник', number: 9 },
      ],
    },
    {
      id: 3,
      name: 'Баварія',
      city: 'Мюнхен',
      foundationDate: '27.02.1900',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg',
      cups: [
        'Ліга чемпіонів УЄФА: 6 кубків',
        'Кубок Німеччини (DFB-Pokal): 20 кубків',
        'Суперкубок Німеччини: 10 кубків',
      ],
      medals: ['Золоті медалі Бундесліги: 33 титули', 'Клубний чемпіонат світу: 2 золоті медалі'],
      players: [
        { id: 201, name: 'Мануель Ноєр', position: 'Воротар', number: 1 },
        { id: 202, name: 'Альфонсо Девіс', position: 'Захисник', number: 19 },
        { id: 203, name: 'Дайо Упамекано', position: 'Захисник', number: 2 },
        { id: 204, name: 'Йозуа Кімміх', position: 'Півзахисник', number: 6 },
        { id: 205, name: 'Джамал Мусіала', position: 'Півзахисник', number: 42 },
        { id: 206, name: 'Гаррі Кейн', position: 'Нападник', number: 9 },
        { id: 207, name: 'Лерой Сане', position: 'Нападник', number: 10 },
      ],
    },
  ]

  const themes = ['style-red', 'style-blue', 'style-green']

  const randomTheme = themes[Math.floor(Math.random() * themes.length)]

  const [state, setState] = useState(0)
  let currentState = clubs[state]

  return (
    <div className={randomTheme}>
      <button
        onClick={() => {
          if (state >= clubs.length - 1) {
            setState(0)
          } else {
            setState(state + 1)
          }
        }}
      >
        Наступний клуб
      </button>
      <ClubInformation
        name={currentState.name}
        city={currentState.city}
        foundationDate={currentState.foundationDate}
        logoUrl={currentState.logoUrl}
      />

      <ClubAchievements listOfCups={currentState.cups} medalTable={currentState.medals} />

      <ClubSquad players={currentState.players} />
    </div>
  )
}

export default App
