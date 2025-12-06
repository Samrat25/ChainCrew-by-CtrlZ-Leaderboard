'use client'

import { useState, useEffect } from 'react'

interface LeaderboardEntry {
  name: string
  points: number
}

// 🔥 MANUAL LEADERBOARD DATA - UPDATE THIS ARRAY TO CHANGE THE LEADERBOARD
const LEADERBOARD_DATA: LeaderboardEntry[] = [
  { name: 'Sucheta', points: 52 },
  { name: 'Sayan Thakur', points: 35 },
  { name: 'Debanjan & Kingshuk', points: 34 },
  { name: 'Dot User ', points: 26 },
  { name: 'Nightshade', points: 24 },
  { name: 'Ankit Kumar', points: 21 },
  { name: 'Sougato', points: 19 },
  { name: 'Sg & Rupang Ghosh', points: 13 },
  { name: 'samik', points: 12 },
  { name: 'Divyam Jha', points: 9 },


]

export default function Leaderboard() {
  const [monthDisplay, setMonthDisplay] = useState('')
  const [lastUpdated, setLastUpdated] = useState('')

  useEffect(() => {
    const now = new Date()
    setMonthDisplay(
      now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    )
    setLastUpdated(
      now.toLocaleString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        day: '2-digit',
        month: 'short',
      })
    )
  }, [])

  // Function to get rank emoji
  const getRankEmoji = (index: number): string => {
    if (index === 0) return '🥇'
    if (index === 1) return '🥈'
    if (index === 2) return '🥉'
    if (index === 3) return '4️⃣'
    if (index === 4) return '5️⃣'
    if (index === 5) return '6️⃣'
    if (index === 6) return '7️⃣'
    if (index === 7) return '8️⃣'
    if (index === 8) return '9️⃣'
    if (index === 9) return '🔟'
    return `${index + 1}️⃣`
  }

  // Sort by points (highest first), then by name alphabetically
  const sortedData = [...LEADERBOARD_DATA].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points
    return a.name.localeCompare(b.name)
  })

  // Limit to top 10
  const top10Entries = sortedData.slice(0, 10)

  return (
    <>
      <div id="monthDisplay">{monthDisplay}</div>
      <div id="leaderboard">
        <div className="leaderboard-header">
          <span className="header-rank">Rank</span>
          <span className="header-name">Name</span>
          <span className="header-score">Points</span>
          <span className="header-time">Last Updated</span>
        </div>
        {top10Entries.map((entry, index) => {
          const topClass =
            index === 0 ? 'top1' : index === 1 ? 'top2' : index === 2 ? 'top3' : ''

          return (
            <div key={entry.name} className={`entry ${topClass}`}>
              <span className="rank">{getRankEmoji(index)}</span>
              <span className="name">{entry.name}</span>
              <span className="score">{entry.points}</span>
              <span className="time">{lastUpdated}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}
