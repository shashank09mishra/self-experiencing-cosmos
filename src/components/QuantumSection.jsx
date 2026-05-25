import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function WaveFunction() {
  const points = []
  for (let i = 0; i <= 100; i++) {
    const x = (i / 100) * 300
    const y = 50 + Math.sin((i / 100) * Math.PI * 4) * 30 * Math.exp(-((i - 50) ** 2) / 800)
    points.push(`${x},${y}`)
  }
  return (
    <svg viewBox="0 0 300 100" className="w-full h-24">
      <defs>
        <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(0,245,255,0)" />
          <stop offset="50%" stopColor="rgba(0,245,255,0.8)" />
          <stop offset="100%" stopColor="rgba(0,245,255,0)" />
        </linearGradient>
      </defs>
      <motion.polyline
        points={points.join(' ')}
        fill="none"
        stroke="url(#waveGrad)"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
      <line x1="150" y1="0" x2="150" y2="100" stroke="rgba(124,58,237,0.3)" strokeWidth="1" strokeDasharray="3 2" />
      <text x="155" y="15" fill="rgba(124,58,237,0.7)" fontSize="8" fontFamily="monospace">observation</text>
    </svg>
  )
}

function EntanglementDiagram() {
  return (
    <svg viewBox="0 0 300 100" className="w-full h-24">
      <defs>
        <radialGradient id="p1" cx="30%" cy="50%">
          <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00f5ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="p2" cx="70%" cy="50%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
      </defs>
      <motion.circle cx="75" cy="50" r="20" fill="url(#p1)"
        animate={{ r: [18, 22, 18] }} transition={{ duration: 2, repeat: Infinity }} />
      <circle cx="75" cy="50" r="8" fill="#00f5ff" opacity="0.9" />
      <motion.circle cx="225" cy="50" r="20" fill="url(#p2)"
        animate={{ r: [22, 18, 22] }} transition={{ duration: 2, repeat: Infinity }} />
      <circle cx="225" cy="50" r="8" fill="#7c3aed" opacity="0.9" />
      <motion.path d="M 95 50 Q 150 20 205 50" fill="none" stroke="rgba(0,245,255,0.4)" strokeWidth="1" strokeDasharray="4 3"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }} />
      <motion.path d="M 95 50 Q 150 80 205 50" fill="none" stroke="rgba(124,58,237,0.4)" strokeWidth="1" strokeDasharray="4 3"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.8 }} />
      <text x="140" y="48" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="monospace" textAnchor="middle">entangled</text>
    </svg>
  )
}

function QuarkDiagram() {
  const quarks = [
    { x: 150, y: 30, color: '#00f5ff', label: 'up' },
    { x: 100, y: 75, color: '#7c3aed', label: 'down' },
    { x: 200, y: 75, color: '#ffd700', label: 'strange' },
  ]
  return (
    <svg viewBox="0 0 300 100" className="w-full h-24">
      {quarks.map((q, i) => (
        <g key={i}>
          <motion.line x1={quarks[0].x} y1={quarks[0].y} x2={quarks[1].x} y2={quarks[1].y}
            stroke="rgba(255,255,255,0.1)" strokeWidth="1"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }} />
          <motion.circle cx={q.x} cy={q.y} r="10" fill={q.color} opacity="0.8"
            animate={{ r: [9, 11, 9] }} transition={{ duration: 1.5 + i * 0.3, repeat: Infinity }} />
          <text x={q.x} y={q.y + 25} fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace" textAnchor="middle">{q.label}</text>
        </g>
      ))}
      <line x1={quarks[0].x} y1={quarks[0].y} x2={quarks[1].x} y2={quarks[1].y} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <line x1={quarks[0].x} y1={quarks[0].y} x2={quarks[2].x} y2={quarks[2].y} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <line x1={quarks[1].x} y1={quarks[1].y} x2={quarks[2].x} y2={quarks[2].y} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="150" y="95" fill="rgba(255,255,255,0.25)" fontSize="7" fontFamily="monospace" textAnchor="middle">proton / neutron</text>
    </svg>
  )
}

function EulerDiagram() {
  return (
    <svg viewBox="0 0 300 100" className="w-full h-24">
      <defs>
        <linearGradient id="eulerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00f5ff" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      {/* Unit circle */}
      <circle cx="60" cy="50" r="35" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <motion.circle cx="95" cy="50" r="4" fill="#00f5ff"
        animate={{
          cx: [95, 60, 25, 60, 95],
          cy: [50, 15, 50, 85, 50],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} />
      {/* Formula */}
      <text x="140" y="40" fill="rgba(0,245,255,0.8)" fontSize="11" fontFamily="monospace">e^(iπ) + 1 = 0</text>
      <text x="140" y="60" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="monospace">Euler's Identity</text>
      <text x="140" y="75" fill="rgba(124,58,237,0.6)" fontSize="7" fontFamily="monospace">oscillation · rotation · unity</text>
    </svg>
  )
}

const quantumSections = [
  {
    id: 'schrodinger',
    title: "Schrödinger's Wave Evolution",
    subtitle: 'Reality in Flux',
    icon: '〰',
    color: 'cyan',
    diagram: <WaveFunction />,
    equation: 'iℏ ∂ψ/∂t = Ĥψ',
    equationLabel: 'Time-dependent Schrödinger equation',
    body: "Schrödinger's wave function presents a reality that is not fixed, but profoundly fluid. Reality evolves through probabilities and is fundamentally influenced by observation. Until something is observed, it exists in a state of potentiality — Schrödinger's famous cat exists in superposition, both alive and dead, until the moment of observation collapses the wave function into a single definite state. This challenges everything we think we know about the nature of reality.",
  },
  {
    id: 'entanglement',
    title: 'Quantum Entanglement',
    subtitle: 'Connection Across the Cosmos',
    icon: '∞',
    color: 'purple',
    diagram: <EntanglementDiagram />,
    equation: '|ψ⟩ = (|↑↓⟩ − |↓↑⟩) / √2',
    equationLabel: 'Bell state — maximally entangled pair',
    body: "Quantum entanglement reveals that particles can remain profoundly connected even across vast cosmic distances. When two particles become entangled, the state of one instantly influences the state of the other, regardless of the distance separating them. Einstein called it 'spooky action at a distance' — but it is real, measurable, and reproducible. This phenomenon challenges our entire understanding of space and time, suggesting that connection itself transcends physical boundaries.",
  },
  {
    id: 'quarks',
    title: 'Quarks & Shared Matter',
    subtitle: 'The Building Blocks of the Universe',
    icon: '⚛',
    color: 'cyan',
    diagram: <QuarkDiagram />,
    equation: 'p = uud   n = udd',
    equationLabel: 'Quark composition of proton and neutron',
    body: "Quarks are the fundamental particles that compose protons and neutrons — the very core of all matter. From human cells to distant stars to entire galaxies, all is constructed from these same basic particles. This shared origin is not merely poetic: it is a physical fact that highlights the profound interconnectedness of all matter in the universe, suggesting a unity beneath the endless diversity of forms we perceive.",
  },
  {
    id: 'euler',
    title: "Euler's Oscillation",
    subtitle: 'The Rhythm of Existence',
    icon: 'ψ',
    color: 'purple',
    diagram: <EulerDiagram />,
    equation: 'e^(iπ) + 1 = 0',
    equationLabel: "Euler's Identity — the most beautiful equation",
    body: "Euler's identity is called the most beautiful equation in mathematics — linking five fundamental constants in a single, elegant expression. The oscillatory patterns embedded in this equation reflect the rhythmic, dynamic nature of existence itself. Systems breathe, pulse, cycle, and transform. This rhythmic quality mirrors the universe's continuous process of becoming and transformation — the mathematical heartbeat of reality.",
  },
]

function QuantumCard({ section, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col lg:flex-row gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
    >
      {/* Content */}
      <div className="flex-1">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-3xl">{section.icon}</span>
          <div>
            <p className="font-mono text-xs tracking-widest uppercase"
              style={{ color: section.color === 'cyan' ? 'rgba(0,245,255,0.5)' : 'rgba(124,58,237,0.5)' }}>
              Quantum Principle
            </p>
            <h3 className="font-cinzel text-2xl text-white">{section.title}</h3>
          </div>
        </div>
        <p className="font-cinzel text-sm italic mb-6"
          style={{ color: section.color === 'cyan' ? '#00f5ff' : '#a855f7' }}>
          {section.subtitle}
        </p>
        <p className="font-raleway text-white/60 leading-relaxed mb-6">
          {section.body}
        </p>
        {/* Equation */}
        <div className="equation-display">
          <p className="font-mono text-xl mb-2"
            style={{ color: section.color === 'cyan' ? '#00f5ff' : '#a855f7' }}>
            {section.equation}
          </p>
          <p className="font-mono text-xs text-white/30 tracking-wider">{section.equationLabel}</p>
        </div>
      </div>

      {/* Diagram card */}
      <div className="flex-1 max-w-sm w-full">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-card p-6 h-full"
          style={{ borderColor: section.color === 'cyan' ? 'rgba(0,245,255,0.15)' : 'rgba(124,58,237,0.15)' }}
        >
          <p className="font-mono text-xs tracking-widest uppercase text-white/30 mb-4">
            ◈ Visualization
          </p>
          {section.diagram}
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: section.color === 'cyan' ? '#00f5ff' : '#7c3aed' }} />
            <span className="font-mono text-xs text-white/30 tracking-wider">Live simulation</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function QuantumSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="quantum" className="relative py-32 px-6">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 30% at 50% 50%, rgba(0,245,255,0.03) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-xs text-cyan-400/50 tracking-[0.4em] uppercase mb-4"
          >
            ✦ Quantum Foundations ✦
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-heading text-4xl md:text-5xl text-white mb-4"
          >
            The Quantum Architecture
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="font-raleway text-white/50 max-w-2xl mx-auto"
          >
            Four pillars of quantum physics that reveal the interconnected nature of all existence
          </motion.p>
        </div>

        <div className="flex flex-col gap-24">
          {quantumSections.map((section, i) => (
            <QuantumCard key={section.id} section={section} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
