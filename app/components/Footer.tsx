'use client'

import { useState, useEffect } from 'react'

export default function Footer() {
  const [lastUpdated, setLastUpdated] = useState('--')

  useEffect(() => {
    const updateTime = () => {
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
    }
    updateTime()
  }, [])

  return (
    <footer id="footer">
      <p id="lastUpdated">Last updated: {lastUpdated}</p>
    </footer>
  )
}
