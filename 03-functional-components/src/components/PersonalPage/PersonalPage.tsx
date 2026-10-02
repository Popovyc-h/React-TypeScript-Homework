import './PersonalPage.css'

export type UserProfile = {
  fullName: string
  photoUrl: string
  city: string
  phone: string
  email: string
  skills: string[]
  experience: string
}

type PersonProp = {
  profile: UserProfile
}

function PersonalPage({ profile }: PersonProp) {
  const { fullName, photoUrl, city, phone, email, skills, experience } = profile

  return (
    <main className="profile-card">
      <header className="profile-header">
        <figure>
          <img src={photoUrl} alt={`Фотографія ${fullName}`} />
        </figure>

        <div>
          <h1>{fullName}</h1>
          <p className="profile-city">📍 {city}</p>
        </div>
      </header>

      <section className="profile-contacts">
        <ul>
          <li>Телефон: {phone}</li>
          <li>Email: {email}</li>
        </ul>
      </section>

      <section className="profile-skills">
        <h2>Навички</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="profile-experience">
        <h2>Досвід роботи</h2>
        <p>{experience}</p>
      </section>
    </main>
  )
}

export default PersonalPage
