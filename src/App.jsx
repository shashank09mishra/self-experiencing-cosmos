import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Loader from './components/Loader'
import CosmicCursor from './components/CosmicCursor'
import SpaceBackground from './components/SpaceBackground'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import TheorySection from './components/TheorySection'
import QuantumSection from './components/QuantumSection'
import ConsciousnessSection from './components/ConsciousnessSection'
import SacredGeometrySection from './components/SacredGeometrySection'
import TimelineSection from './components/TimelineSection'
import QuotesSection from './components/QuotesSection'
import FinalSection from './components/FinalSection'
import CosmicSeparator from './components/CosmicSeparator'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [musicOn, setMusicOn] = useState(false)

  const handleLoadComplete = useCallback(() => {
    setLoading(false)
  }, [])

  const handleMusicToggle = useCallback(() => {
    setMusicOn(m => !m)
    // Music toggle is visual only (no audio file required)
    // To add real music: create an <audio> ref and call .play()/.pause()
  }, [])

  return (
    <>
      <CosmicCursor />

      <AnimatePresence>
        {loading && (
          <Loader key="loader" onComplete={handleLoadComplete} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative min-h-screen"
        >
          {/* 3D Space Background (fixed, behind everything) */}
          <SpaceBackground />

          {/* Navigation */}
          <Navigation musicOn={musicOn} onMusicToggle={handleMusicToggle} />

          {/* Main content */}
          <main className="relative z-10">
            <HeroSection />
            <CosmicSeparator />
            <TheorySection />
            <CosmicSeparator variant="dots" />
            <QuantumSection />
            <CosmicSeparator />
            <ConsciousnessSection />
            <CosmicSeparator variant="dots" />
            <SacredGeometrySection />
            <CosmicSeparator />
            <TimelineSection />
            <CosmicSeparator variant="dots" />
            <QuotesSection />
            <CosmicSeparator />
            <FinalSection />
          </main>
        </motion.div>
      )}
    </>
  )
}
