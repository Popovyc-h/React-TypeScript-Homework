import FavoriteMovie from './components/FavoriteMovie/FavoriteMovie.tsx'
import { type Movie } from './components/FavoriteMovie/FavoriteMovie.tsx'

import PersonalPage from './components/PersonalPage/PersonalPage.tsx'
import { type UserProfile } from './components/PersonalPage/PersonalPage.tsx'
import profilePhoto from './components/PersonalPage/image.png'

import Clock from './components/DigitalClock/DigitalClock.tsx'

import PetInfo from './components/PetInfo/PetInfo.tsx'
import { type Cat } from './components/PetInfo/PetInfo.tsx'
import catPhoto from './components/PetInfo/photo.jpg'

function App() {
  const movie: Movie = {
    filmTitle: 'Сіністер',
    directorName: 'Скотт Дерріксон',
    releaseYear: 2012,
    studioName: 'Blumhouse Productions, Automatik Entertainment, Alliance Films',
    posterUrl: 'https://image.tmdb.org/t/p/original/nzx10sca3arCeYBAomHan4Q6wa1.jpg',
    genre: 'Жахи',
    duration: 110,
    budget: 3000000,
    country: 'США, Велика Британія, Канада',
    rating: 6.8,
    description:
      'Автор детективних романів Еллісон Освальт разом із родиною переїжджає до будинку, де рік тому розгорнулася страшна трагедія — було вбито всіх попередніх мешканців. На горищі він випадково знаходить коробку зі старими плівками формату Super 8, де зафіксовані моторошні та витончені вбивства різних сімей. Намагаючись розплутати цю таємницю задля нової книги, письменник не помічає, як занурює власну родину у смертельну пастку стародавнього демонічного єства.',
  }

  const cat: Cat = {
    name: 'Мікі',
    breed: 'Британець',
    age: 3,
    color: 'Сірий',
    photoUrl: catPhoto,
    favoriteFood: 'Сухий корм',
    characterTraits: ['Спокійний', 'Незалежний'],
    isVaccinated: true,
    favoriteSpot: 'На стільці під столом',
    description: 'Лінивий, тільки їсть і спить',
  }

  const profile: UserProfile = {
    fullName: 'Попович Іван',
    photoUrl: profilePhoto,
    city: 'Сільце',
    phone: '0688073359',
    email: 'popovichtanja86@gmail.com',
    skills: [''],
    experience: 'Я ЩЕ ВЧУСЬ НЕ ПРАЦЮЮ',
  }

  return (
    <div>
      <Clock />
      <FavoriteMovie movie={movie} />
      <PetInfo cat={cat} />
      <PersonalPage profile={profile} />
    </div>
  )
}

export default App
