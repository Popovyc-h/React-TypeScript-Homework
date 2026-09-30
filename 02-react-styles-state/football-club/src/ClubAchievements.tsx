type AchievementsProps = {
  listOfCups: string[]
  medalTable: string[]
}

function ShowAchievements({ listOfCups, medalTable }: AchievementsProps) {
  return (
    <div>
      <h2>Кубки клубу</h2>
      <ul>
        {listOfCups.map((cup) => (
          <li key={cup}>{cup}</li>
        ))}
      </ul>

      <h2>Медалі клубу</h2>
      <ul>
        {medalTable.map((medal) => (
          <li key={medal}>{medal}</li>
        ))}
      </ul>
    </div>
  )
}

export default ShowAchievements
