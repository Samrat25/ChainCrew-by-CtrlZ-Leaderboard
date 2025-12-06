'use client'

import Header from './components/Header'
import Leaderboard from './components/Leaderboard'
import Footer from './components/Footer'
import ThreeBackground from './components/ThreeBackground'
import SeasonWinners from './components/SeasonWinners'
import ComingSoon from './components/ComingSoon'

export default function Home() {
  return (
    <>
      <ThreeBackground />
      <Header />
      <main id="main">
        <h1>🏆ChainCrew POTD Leaderboard</h1>
        <Leaderboard />
        <SeasonWinners />
        <ComingSoon />
      </main>
      <Footer />
    </>
  )
}
