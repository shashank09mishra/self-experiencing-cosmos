import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const quotes = [
  {
    text: "We are not separate observers of the universe. We are the universe observing itself.",
    attribution: "The Self-Experiencing Cosmos",
    color: 'cyan',
  },
  {
    text: "Consciousness may be the universe dreaming through billions of minds simultaneously.",
    attribution: "On Quantum Consciousness",
    color: 'purple',
  },
  {
    text: "The boundary between self and cosmos is not a wall — it is a wave function, collapsing into perspective.",
    attribution: "On Identity & Entanglement",
    color: 'gold',
  },
  {
    text: "When you gaze into the stars, the cosmos gazes back through eyes it gave to itself.",
    attribution: "On Observation",
    color: 'cyan',
  },
  {
    text: "What we call distance is only the illusion that what is connected can be separated.",
    attribution: "On Quantum Entanglement",
    color: 'purple',
  },
]

function QuoteCard({ quote, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const colorMap = {
    cyan: { text: '#00f5ff', border: 'rgba(0,245,255,0.15)', bg: 'rgba(0,245,255,0.02)' },
    purple: { text: '#a855f7', border: 'rgba(168,85,247,0.15)', bg: 'rgba(168,85,247,0.02)' },
    gold: { text: '#ffd700', border: 'rgba(255,215,0,0.15)', bg: 'rgba(255,215,0,0.02)' },
  }
  const c = colorMap[quote.color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1, delay: (index % 2) * 0.2 }}
      className="glass-card glass-card-hover p-8 md:p-10 relative overflow-hidden"
      style={{ borderColor: c.border, background: c.bg }}
    >
      {/* Large decorative quote mark */}
      <div
        className="absolute -top-4 -left-2 font-cinzel text-[8rem] leading-none select-none pointer-events-none"
        style={{ color: c.text, opacity: 0.06 }}
      >
        "
      </div>

      {/* Accent line */}
      <div className="w-8 h-0.5 mb-6" style={{ background: c.text, boxShadow: `0 0 8px ${c.text}` }} />

      <blockquote className="font-cinzel text-lg md:text-xl text-white/85 leading-relaxed mb-6 italic relative z-10">
        "{quote.text}"
      </blockquote>

      <cite className="font-mono text-xs tracking-widest not-italic" style={{ color: c.text, opacity: 0.7 }}>
        — {quote.attribution}
      </cite>
    </motion.div>
  )
}

export default function QuotesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-32 px-6">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0,245,255,0.02) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-xs text-cyan-400/50 tracking-[0.4em] uppercase mb-4"
          >
            ✦ Reflections ✦
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-heading text-4xl md:text-5xl text-white"
          >
            Cosmic Aphorisms
          </motion.h2>
        </div>

        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {quotes.map((quote, i) => (
            <div key={i} className="break-inside-avoid">
              <QuoteCard quote={quote} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
