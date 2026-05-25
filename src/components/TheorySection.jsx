import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function TheoryCard({ title, body, icon, delay = 0, color = 'cyan' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const borderColor = color === 'cyan' ? 'rgba(0,245,255,0.2)' : 'rgba(124,58,237,0.2)'
  const glowColor = color === 'cyan' ? 'rgba(0,245,255,0.05)' : 'rgba(124,58,237,0.05)'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="glass-card glass-card-hover p-8"
      style={{ borderColor, background: glowColor }}
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-cinzel text-lg mb-4" style={{
        color: color === 'cyan' ? '#00f5ff' : '#a855f7'
      }}>
        {title}
      </h3>
      <p className="font-raleway text-white/60 leading-relaxed text-sm">
        {body}
      </p>
    </motion.div>
  )
}

const theoryCards = [
  {
    icon: '〰️',
    title: 'Schrödinger\'s Wave Evolution',
    color: 'cyan',
    body: "Reality is not fixed but fluid. Schrödinger's wave function reveals a universe that evolves through probabilities, shaped fundamentally by the act of observation. Until observed, existence hovers in superposition — a shimmering field of potentiality, neither here nor there, yet everywhere at once.",
  },
  {
    icon: '∞',
    title: 'Quantum Entanglement',
    color: 'purple',
    body: "Particles become entangled across vast cosmic distances, each instantaneously aware of the other's state regardless of the space between them. This phenomenon transcends classical space and time, suggesting that connection itself is a fundamental property of the universe, not merely an emergent one.",
  },
  {
    icon: '⚛',
    title: 'Quarks & Shared Matter',
    color: 'cyan',
    body: "From the core of a human cell to the heart of a distant star, all matter shares the same fundamental building blocks: quarks. This shared origin speaks to a unity beneath the dazzling diversity of forms — we are literally made of the same substance as the cosmos we observe.",
  },
  {
    icon: 'ψ',
    title: "Euler's Oscillation",
    color: 'purple',
    body: "Euler's identity captures an oscillatory truth about existence: systems breathe, pulsate, cycle, and transform. This rhythmic quality mirrors the universe's continuous process of becoming — the heartbeat of reality expressed in pure mathematical elegance.",
  },
  {
    icon: '◉',
    title: 'Human Identity & Interconnection',
    color: 'cyan',
    body: "Just as quantum states exist between possibilities until observed, human identity itself is shaped through interaction, experience, and relationship. We are not isolated points of consciousness but dynamic intersections of the universe's ongoing conversation with itself.",
  },
  {
    icon: '✦',
    title: 'Connection Beyond Space & Time',
    color: 'purple',
    body: "What we perceive as connection may be the universe preserving correlations beyond the constraints of distance and time. We are not independent beings — we are interconnected fragments participating in a vast cosmic process of self-observation, understanding, and evolution.",
  },
]

export default function TheorySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="theory" className="relative py-32 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(124,58,237,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={ref} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="font-mono text-xs text-cyan-400/50 tracking-[0.4em] uppercase mb-4"
          >
            ✦ The Foundation ✦
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="section-heading text-4xl md:text-6xl text-white mb-6"
          >
            The Universe & Consciousness
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-cinzel text-xl text-cyan-400 italic mb-6"
          >
            A Dance of Perspectives
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-32 h-px mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, #00f5ff, transparent)' }}
          />
        </div>

        {/* Opening statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <p className="font-raleway text-lg md:text-xl text-white/70 leading-relaxed">
            The nature of consciousness and its connection to the universe has intrigued thinkers for centuries.
            This theory suggests that perhaps{' '}
            <span className="text-cyan-400">consciousness is the universe's way of experiencing itself</span>{' '}
            through multiple, interconnected perspectives — examining quantum mechanics, particle physics,
            and mathematical principles to reveal how everything might be more intertwined than it seems.
          </p>
        </motion.div>

        {/* Theory cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {theoryCards.map((card, i) => (
            <TheoryCard key={card.title} {...card} delay={i * 0.1} />
          ))}
        </div>

        {/* Conclusion block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto glass-card p-10 text-center"
          style={{ borderColor: 'rgba(0,245,255,0.15)', background: 'rgba(0,245,255,0.02)' }}
        >
          <div className="text-2xl mb-6 opacity-40">∞</div>
          <p className="font-raleway text-white/70 text-lg leading-relaxed mb-6">
            The interplay of consciousness, quantum phenomena, and fundamental particles invites us to
            reconsider our place in the cosmos. We may indeed be part of a grand, interwoven dance of
            existence, where every individual perspective contributes to the universe's ongoing journey of
            self-discovery and transformation.
          </p>
          <p className="font-cinzel text-cyan-400 text-sm tracking-wider italic">
            "We are not separate observers of the universe. We are the universe observing itself."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
