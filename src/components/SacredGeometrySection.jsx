import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function SriYantra() {
  const triangles = []
  const centerX = 200, centerY = 200, size = 140

  // Upward triangles
  for (let i = 0; i < 4; i++) {
    const s = size - i * 22
    triangles.push({
      points: `${centerX},${centerY - s} ${centerX - s * 0.866},${centerY + s * 0.5} ${centerX + s * 0.866},${centerY + s * 0.5}`,
      stroke: 'rgba(0,245,255,0.35)',
      delay: i * 0.2,
    })
  }
  // Downward triangles
  for (let i = 0; i < 5; i++) {
    const s = (size + 10) - i * 20
    triangles.push({
      points: `${centerX},${centerY + s} ${centerX - s * 0.866},${centerY - s * 0.5} ${centerX + s * 0.866},${centerY - s * 0.5}`,
      stroke: 'rgba(124,58,237,0.35)',
      delay: i * 0.15 + 0.8,
    })
  }

  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-sm mx-auto">
      {/* Outer circles */}
      {[185, 165, 145].map((r, i) => (
        <motion.circle
          key={i}
          cx={centerX} cy={centerY} r={r}
          fill="none"
          stroke={i === 0 ? 'rgba(0,245,255,0.15)' : i === 1 ? 'rgba(124,58,237,0.15)' : 'rgba(255,215,0,0.1)'}
          strokeWidth="0.8"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: i * 0.2 }}
        />
      ))}

      {/* Lotus petals (simplified) */}
      {[...Array(16)].map((_, i) => {
        const angle = (i / 16) * Math.PI * 2
        const x1 = centerX + Math.cos(angle) * 115
        const y1 = centerY + Math.sin(angle) * 115
        const x2 = centerX + Math.cos(angle + Math.PI / 16) * 135
        const y2 = centerY + Math.sin(angle + Math.PI / 16) * 135
        return (
          <motion.path
            key={i}
            d={`M ${centerX + Math.cos(angle) * 100} ${centerY + Math.sin(angle) * 100} Q ${x2} ${y2} ${centerX + Math.cos(angle + Math.PI / 8) * 100} ${centerY + Math.sin(angle + Math.PI / 8) * 100}`}
            fill="none"
            stroke={i % 2 === 0 ? 'rgba(0,245,255,0.2)' : 'rgba(124,58,237,0.2)'}
            strokeWidth="0.7"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          />
        )
      })}

      {/* Triangles */}
      {triangles.map((t, i) => (
        <motion.polygon
          key={i}
          points={t.points}
          fill="none"
          stroke={t.stroke}
          strokeWidth="0.8"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: t.delay }}
          style={{ transformOrigin: `${centerX}px ${centerY}px` }}
        />
      ))}

      {/* Center bindu */}
      <motion.circle cx={centerX} cy={centerY} r="4" fill="#ffd700"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 2 }}
        style={{ filter: 'drop-shadow(0 0 8px #ffd700)' }}
      />

      {/* Rotating outer decoration */}
      <motion.g animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: `${centerX}px ${centerY}px` }}>
        {[...Array(12)].map((_, i) => {
          const a = (i / 12) * Math.PI * 2
          return (
            <circle key={i}
              cx={centerX + Math.cos(a) * 175}
              cy={centerY + Math.sin(a) * 175}
              r="2"
              fill="rgba(0,245,255,0.4)"
            />
          )
        })}
      </motion.g>
    </svg>
  )
}

function FractalPattern() {
  // Simple recursive-looking SVG fractal
  const branches = []
  const addBranch = (x1, y1, len, angle, depth) => {
    if (depth === 0 || len < 3) return
    const x2 = x1 + Math.cos(angle) * len
    const y2 = y1 - Math.sin(angle) * len
    branches.push({ x1, y1, x2, y2, depth })
    addBranch(x2, y2, len * 0.67, angle + 0.5, depth - 1)
    addBranch(x2, y2, len * 0.67, angle - 0.5, depth - 1)
  }
  addBranch(200, 380, 80, Math.PI / 2, 7)

  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-xs mx-auto">
      {branches.map((b, i) => (
        <motion.line
          key={i}
          x1={b.x1} y1={b.y1} x2={b.x2} y2={b.y2}
          stroke={b.depth > 4 ? 'rgba(0,245,255,0.4)' : b.depth > 2 ? 'rgba(124,58,237,0.3)' : 'rgba(255,215,0,0.2)'}
          strokeWidth={b.depth * 0.4}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.008 }}
        />
      ))}
    </svg>
  )
}

export default function SacredGeometrySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="geometry" className="relative py-32 px-6">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 80%, rgba(255,215,0,0.03) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-xs text-yellow-400/50 tracking-[0.4em] uppercase mb-4"
          >
            ✦ Sacred Mathematics ✦
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-heading text-4xl md:text-5xl text-white mb-4"
          >
            Sacred Geometry Chamber
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="font-raleway text-white/50 max-w-2xl mx-auto"
          >
            Mathematics is the language the universe speaks. These patterns appear from the microscopic to the cosmic — in snowflakes, galaxies, shells, and DNA.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Sri Yantra */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass-card p-8"
            style={{ borderColor: 'rgba(255,215,0,0.15)' }}
          >
            <p className="font-cinzel text-xs text-yellow-400/60 tracking-widest uppercase mb-4 text-center">Sri Yantra — The Cosmic Blueprint</p>
            <SriYantra />
            <p className="font-raleway text-xs text-white/40 text-center mt-4 leading-relaxed">
              The Sri Yantra encodes the mathematics of creation — 9 interlocking triangles generating 43 smaller triangles, representing the union of masculine and feminine cosmic energy.
            </p>
          </motion.div>

          {/* Fractal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="glass-card p-8"
            style={{ borderColor: 'rgba(0,245,255,0.15)' }}
          >
            <p className="font-cinzel text-xs text-cyan-400/60 tracking-widest uppercase mb-4 text-center">Fractal Tree — Infinite Self-Similarity</p>
            <FractalPattern />
            <p className="font-raleway text-xs text-white/40 text-center mt-4 leading-relaxed">
              Fractals reveal that the universe is self-similar at all scales. The branching of a tree mirrors the branching of rivers, neurons, lightning, and cosmic filaments.
            </p>
          </motion.div>
        </div>

        {/* Mathematical equations display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { eq: 'ψ(x,t) = Ae^(i(kx−ωt))', label: 'Wave Function', desc: 'Describes the quantum state of a particle as a propagating wave through spacetime.' },
            { eq: 'E = mc²', label: "Mass-Energy Equivalence", desc: 'Matter and energy are interchangeable — the universe is fundamentally one substance.' },
            { eq: 'S = k_B ln Ω', label: 'Boltzmann Entropy', desc: 'Information, disorder, and consciousness may be fundamentally linked through entropy.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="equation-display text-center glass-card-hover"
            >
              <p className="font-mono text-xl text-cyan-400 mb-2">{item.eq}</p>
              <p className="font-cinzel text-xs text-purple-400 tracking-wider mb-3">{item.label}</p>
              <p className="font-raleway text-xs text-white/40 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
