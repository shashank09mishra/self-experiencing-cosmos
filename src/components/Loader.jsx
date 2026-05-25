import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SacredGeometry = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" className="absolute">
    {/* Outer circle */}
    <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(0,245,255,0.2)" strokeWidth="0.5" />
    {/* Middle circle */}
    <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(124,58,237,0.3)" strokeWidth="0.5" />
    {/* Inner circle */}
    <circle cx="100" cy="100" r="30" fill="none" stroke="rgba(0,245,255,0.4)" strokeWidth="0.5" />
    {/* Triangle 1 */}
    <polygon points="100,10 182,145 18,145" fill="none" stroke="rgba(0,245,255,0.25)" strokeWidth="0.5" />
    {/* Triangle 2 (inverted) */}
    <polygon points="100,190 18,55 182,55" fill="none" stroke="rgba(124,58,237,0.25)" strokeWidth="0.5" />
    {/* Star of David lines */}
    <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(0,245,255,0.1)" strokeWidth="0.3" />
    <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(0,245,255,0.1)" strokeWidth="0.3" />
    <line x1="29" y1="29" x2="171" y2="171" stroke="rgba(124,58,237,0.1)" strokeWidth="0.3" />
    <line x1="171" y1="29" x2="29" y2="171" stroke="rgba(124,58,237,0.1)" strokeWidth="0.3" />
    {/* Center dot */}
    <circle cx="100" cy="100" r="3" fill="#00f5ff" />
  </svg>
)

const messages = [
  "Initializing Cosmic Consciousness...",
  "Entangling Quantum Particles...",
  "Expanding the Universe...",
  "Awakening the Observer...",
]

export default function Loader({ onComplete }) {
  const [msgIndex, setMsgIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setMsgIndex(i => (i + 1) % messages.length)
    }, 700)

    const progressInterval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(progressInterval)
          setTimeout(onComplete, 400)
          return 100
        }
        return p + 2
      })
    }, 55)

    return () => {
      clearInterval(msgInterval)
      clearInterval(progressInterval)
    }
  }, [onComplete])

  return (
    <motion.div
      className="loader-container flex-col gap-8"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {/* Rotating sacred geometry layers */}
      <div className="relative w-48 h-48 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <SacredGeometry />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg width="120" height="120" viewBox="0 0 120 120" className="absolute">
            <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(0,245,255,0.15)" strokeWidth="0.5" strokeDasharray="5 3" />
            <circle cx="60" cy="60" r="35" fill="none" stroke="rgba(124,58,237,0.2)" strokeWidth="0.5" strokeDasharray="3 5" />
          </svg>
        </motion.div>

        {/* Center pulse */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-4 h-4 rounded-full bg-cyan-400"
          style={{ boxShadow: '0 0 20px #00f5ff, 0 0 40px rgba(0,245,255,0.5)' }}
        />
      </div>

      {/* OM Symbol */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="text-4xl text-center"
        style={{ color: '#00f5ff', textShadow: '0 0 20px rgba(0,245,255,0.8)', fontFamily: 'serif' }}
      >
        ॐ
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <h1 className="font-cinzel text-lg tracking-[0.3em] text-cyan-400 mb-1">THE SELF-EXPERIENCING</h1>
        <h1 className="font-cinzel text-2xl tracking-[0.2em] text-white">COSMOS</h1>
      </motion.div>

      {/* Loading message */}
      <AnimatePresence mode="wait">
        <motion.p
          key={msgIndex}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3 }}
          className="text-xs tracking-widest text-cyan-400/60 font-mono uppercase"
        >
          {messages[msgIndex]}
        </motion.p>
      </AnimatePresence>

      {/* Progress bar */}
      <div className="w-48 h-px bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #7c3aed, #00f5ff)',
            boxShadow: '0 0 8px rgba(0,245,255,0.6)'
          }}
        />
      </div>
    </motion.div>
  )
}
