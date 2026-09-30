export type Player = {
  id: number
  name: string
  position: 'Воротар' | 'Захисник' | 'Півзахисник' | 'Нападник'
  number: number
}

type SquadProps = {
  players: Player[]
}

function ClubSquad({ players }: SquadProps) {
  return (
    <div>
      <h2>Склад команди</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            #{player.number} {player.name} — {player.position}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClubSquad
