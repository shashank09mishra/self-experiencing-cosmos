import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#00f5ff' : i % 3 === 1 ? '#7c3aed' : '#ffffff',
            boxShadow: i % 3 === 0 ? '0 0 6px #00f5ff' : i % 3 === 1 ? '0 0 6px #7c3aed' : 'none',
          }}
          animate={{
            y: [0, -30 - Math.random() * 40, 0],
            x: [0, (Math.random() - 0.5) * 20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

function CosmicEye() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="relative w-[600px] h-[600px]"
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border"
            style={{
              borderColor: i % 2 === 0 ? 'rgba(0,245,255,0.2)' : 'rgba(124,58,237,0.2)',
              transform: `scale(${0.3 + i * 0.15}) rotate(${i * 30}deg)`,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingParticles />
      <CosmicEye />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="font-mono text-xs text-cyan-400/60 tracking-[0.4em] uppercase mb-6"
        >
          ✦ A Philosophical–Scientific Theory ✦
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-cinzel font-black leading-none mb-4"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}
        >
          <span className="block text-white">The Self-</span>
          <span className="block" style={{
            background: 'linear-gradient(135deg, #00f5ff 0%, #7c3aed 50%, #00f5ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 30px rgba(0,245,255,0.4))',
          }}>
            Experiencing
          </span>
          <span className="block text-white">Cosmos</span>
        </motion.h1>

        {/* Separator line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="w-48 h-px mx-auto mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, #00f5ff, #7c3aed, transparent)' }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-raleway text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          A Theory of Consciousness, Quantum Entanglement, and Universal Perspective
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="font-cinzel text-sm md:text-base text-cyan-400/80 italic mb-12 tracking-wide"
        >
          "Perhaps consciousness is the universe remembering itself."
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#theory" className="btn-primary">
            Enter the Consciousness
          </a>
          <a href="#quantum" className="btn-secondary">
            Explore the Theory
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs tracking-widest text-white/30 uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-cyan-400/40 to-transparent"
          />
        </motion.div>
      </div>

      {/* Side decorations */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3 items-center">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-cyan-400/30" />
        {['01', '02', '03', '04'].map((n, i) => (
          <motion.span
            key={n}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 + i * 0.2 }}
            className="font-mono text-xs text-white/20 tracking-widest"
          >
            {n}
          </motion.span>
        ))}
        <div className="w-px h-20 bg-gradient-to-t from-transparent to-cyan-400/30" />
      </div>
    </section>
  )
}
