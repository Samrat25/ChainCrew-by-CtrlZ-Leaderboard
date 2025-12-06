'use client'

interface Winner {
  rank: number
  name: string
  points: number
}

// 🏆 SEASON 1 WINNERS - Top 3
const SEASON_1_WINNERS: Winner[] = [
  { rank: 1, name: 'Sucheta', points: 52 },
  { rank: 2, name: 'Sayan Thakur', points: 35 },
  { rank: 3, name: 'Debanjan & Kingshuk', points: 34 },
]

export default function SeasonWinners() {
  const getRankEmoji = (rank: number): string => {
    if (rank === 1) return '🥇'
    if (rank === 2) return '🥈'
    if (rank === 3) return '🥉'
    return ''
  }

  const getRankClass = (rank: number): string => {
    if (rank === 1) return 'winner-gold'
    if (rank === 2) return 'winner-silver'
    if (rank === 3) return 'winner-bronze'
    return ''
  }

  return (
    <div className="season-winners">
      <div className="season-header">
        <h2 className="season-title">🏆 Season 1 Champions</h2>
        <p className="season-subtitle">Hall of Fame</p>
      </div>
      
      <div className="winners-grid">
        {SEASON_1_WINNERS.map((winner) => (
          <div key={winner.rank} className={`winner-card ${getRankClass(winner.rank)}`}>
            <div className="winner-rank-badge">
              <span className="winner-emoji">{getRankEmoji(winner.rank)}</span>
              <span className="winner-rank-text">
                {winner.rank === 1 ? '1st' : winner.rank === 2 ? '2nd' : '3rd'} Place
              </span>
            </div>
            <div className="winner-name">{winner.name}</div>
            <div className="winner-points">
              <span className="points-number">{winner.points}</span>
              <span className="points-label">Points</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
