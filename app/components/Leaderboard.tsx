'use client'

import { useState, useEffect } from 'react'

const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSgOKnEFYJnmnnLUzsL8Nr8rurFurztsNf9SEp6yfSy4M45xJeQ7fTav2LPY0FdjVPwhGPUkboYF8Pw/pub?output=csv'

interface LeaderboardEntry {
  name: string
  totalScore: number
  lastTime: Date
}

function parseCSV(text: string): string[][] {
  const rows: string[][] = []
  let currentRow: string[] = []
  let currentCell = ''
  let insideQuotes = false

  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    const nextChar = text[i + 1]

    if (char === '"' && insideQuotes && nextChar === '"') {
      currentCell += '"'
      i++
    } else if (char === '"') {
      insideQuotes = !insideQuotes
    } else if (char === ',' && !insideQuotes) {
      currentRow.push(currentCell)
      currentCell = ''
    } else if (char === '\n' && !insideQuotes) {
      currentRow.push(currentCell)
      rows.push(currentRow)
      currentRow = []
      currentCell = ''
    } else {
      currentCell += char
    }
  }
  if (currentCell || currentRow.length) currentRow.push(currentCell)
  if (currentRow.length) rows.push(currentRow)
  return rows
}

export default function Leaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [monthDisplay, setMonthDisplay] = useState('')
  const [lastUpdated, setLastUpdated] = useState('')

  useEffect(() => {
    const now = new Date()
    setMonthDisplay(
      now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    )
  }, [])

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch(SHEET_URL + '&t=' + Date.now())
        const text = await res.text()

        const rows = parseCSV(text)
        const headers = rows.shift()?.map((h) => h.trim()) || []

        const tsIndex = headers.findIndex((h) =>
          h.toLowerCase().includes('timestamp')
        )
        const nameIndex = headers.findIndex((h) =>
          h.toLowerCase().includes('name')
        )
        const scoreIndex = headers.findIndex((h) =>
          h.toLowerCase().includes('points')
        )

        if (tsIndex === -1 || nameIndex === -1 || scoreIndex === -1) {
          throw new Error('Missing required columns')
        }

        const rawData = rows
          .map((r) => ({
            name: r[nameIndex]?.trim(),
            score: parseFloat(r[scoreIndex]) || 0,
            timestamp: new Date(r[tsIndex]),
          }))
          .filter((e) => e.name && !isNaN(e.timestamp.getTime()))

        const playerMap = new Map<string, LeaderboardEntry>()
        for (let entry of rawData) {
          if (!playerMap.has(entry.name)) {
            playerMap.set(entry.name, {
              name: entry.name,
              totalScore: entry.score,
              lastTime: entry.timestamp,
            })
          } else {
            const existing = playerMap.get(entry.name)!
            existing.totalScore += entry.score
            if (entry.timestamp > existing.lastTime)
              existing.lastTime = entry.timestamp
          }
        }

        const data = Array.from(playerMap.values())
        data.sort((a, b) => {
          if (b.totalScore !== a.totalScore)
            return b.totalScore - a.totalScore
          return a.lastTime.getTime() - b.lastTime.getTime()
        })

        setEntries(data)
        setLoading(false)
        setError(null)

        // Update the last updated time
        const now = new Date()
        setLastUpdated(
          now.toLocaleString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            day: '2-digit',
            month: 'short',
          })
        )
      } catch (err) {
        console.error('Error:', err)
        setError('Failed to load leaderboard')
        setLoading(false)
      }
    }

    fetchLeaderboard()
    const interval = setInterval(fetchLeaderboard, 30000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <>
        <div id="monthDisplay">{monthDisplay}</div>
        <div id="leaderboard">
          <div>Loading Leaderboard....</div>
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <div id="monthDisplay">{monthDisplay}</div>
        <div id="leaderboard">
          <p style={{ color: 'red' }}>⚠️ {error}</p>
        </div>
      </>
    )
  }

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

  // Limit to top 10
  const top10Entries = entries.slice(0, 10)

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
              <span className="score">{entry.totalScore}</span>
              <span className="time">{lastUpdated}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}
