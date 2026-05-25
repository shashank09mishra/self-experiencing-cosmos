import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const stages = [
  {
    id: 'void',
    label: 'Void',
    symbol: '○',
    color: '#ffffff',
    description: 'Before the beginning — pure potential, undifferentiated nothingness pregnant with all possibility. The quantum vacuum that is never truly empty.',
  },
  {
    id: 'energy',
    label: 'Energy',
    symbol: '⚡',
    color: '#ffd700',
    description: 'The first vibration. Energy erupts from the void in the primordial ignition — the Big Bang. Pure oscillating fields ripple through nascent spacetime.',
  },
  {
    id: 'matter',
    label: 'Matter',
    symbol: '⚛',
    color: '#00f5ff',
    description: 'Energy condenses. Quarks bind into protons and neutrons. Electrons join atoms. Stars ignite. Galaxies spiral into being. Matter becomes the universe\'s body.',
  },
  {
    id: 'life',
    label: 'Life',
    symbol: '◉',
    color: '#4ade80',
    description: 'Complex chemistry achieves the extraordinary: self-replication, metabolism, adaptation. Matter begins organizing itself into forms that persist and grow.',
  },
  {
    id: 'consciousness',
    label: 'Consciousness',
    symbol: '✦',
    color: '#7c3aed',
    description: 'The universe achieves sentience. Nervous systems generate awareness. For the first time, matter becomes aware of itself, generating an inner world alongside the outer.',
  },
  {
    id: 'self-awareness',
    label: 'Self Awareness',
    symbol: '◎',
    color: '#a855f7',
    description: 'Consciousness turns to examine itself. Philosophy, science, art, and introspection emerge. The universe asks: "What am I?" through the minds of its inhabitants.',
  },
  {
    id: 'unity',
    label: 'Cosmic Unity',
    symbol: '∞',
    color: '#00f5ff',
    description: 'The recognition that all separation is apparent. The universe experiencing itself simultaneously through billions of perspectives — unified in its multiplicity.',
  },
]

function TimelineStage({ stage, index, total }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="flex flex-col items-center relative"
    >
      {/* Connector line above (not for first) */}
      {index > 0 && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 - 0.05 }}
          className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 origin-top"
          style={{ background: `linear-gradient(to bottom, ${stages[index-1].color}40, ${stage.color}80)` }}
        />
      )}

      {/* Node */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="relative w-16 h-16 rounded-full flex items-center justify-center mb-4 cursor-default"
        style={{
          background: `radial-gradient(circle, ${stage.color}20, transparent)`,
          border: `1px solid ${stage.color}50`,
          boxShadow: `0 0 20px ${stage.color}20`,
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
          className="text-2xl"
          style={{ color: stage.color, textShadow: `0 0 10px ${stage.color}` }}
        >
          {stage.symbol}
        </motion.div>

        {/* Pulse ring */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
          className="absolute inset-0 rounded-full"
          style={{ border: `1px solid ${stage.color}40` }}
        />
      </motion.div>

      {/* Label */}
      <h3 className="font-cinzel text-sm font-bold mb-2 text-center" style={{ color: stage.color }}>
        {stage.label}
      </h3>

      {/* Description (hover/visible on mobile) */}
      <p className="font-raleway text-xs text-white/40 text-center leading-relaxed max-w-[120px] hidden md:block">
        {stage.description.slice(0, 60)}...
      </p>
    </motion.div>
  )
}

export default function TimelineSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="timeline" className="relative py-32 px-6">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(5,10,26,0.5), transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-xs text-cyan-400/50 tracking-[0.4em] uppercase mb-4"
          >
            ✦ The Cosmic Journey ✦
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-heading text-4xl md:text-5xl text-white mb-4"
          >
            The Great Timeline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="font-raleway text-white/50 max-w-2xl mx-auto"
          >
            From void to cosmic self-awareness — the universe's 13.8 billion year journey toward knowing itself.
          </motion.p>
        </div>

        {/* Horizontal timeline for large screens */}
        <div className="hidden lg:flex items-start justify-between gap-4 mb-16 relative">
          {/* Background line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute top-8 left-0 right-0 h-px origin-left"
            style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(0,245,255,0.2), rgba(124,58,237,0.2), rgba(0,245,255,0.2), rgba(255,255,255,0.05))' }}
          />
          {stages.map((stage, i) => (
            <TimelineStage key={stage.id} stage={stage} index={i} total={stages.length} />
          ))}
        </div>

        {/* Vertical timeline for mobile */}
        <div className="lg:hidden flex flex-col gap-8">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-6 items-start"
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                  style={{ border: `1px solid ${stage.color}50`, background: `${stage.color}10`, color: stage.color }}>
                  {stage.symbol}
                </div>
                {i < stages.length - 1 && (
                  <div className="w-px h-8 mt-2" style={{ background: `linear-gradient(to bottom, ${stage.color}40, ${stages[i+1].color}40)` }} />
                )}
              </div>
              <div className="pt-2">
                <h3 className="font-cinzel text-sm font-bold mb-1" style={{ color: stage.color }}>{stage.label}</h3>
                <p className="font-raleway text-xs text-white/50 leading-relaxed">{stage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded descriptions below */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {stages.slice(1).map((stage, i) => (
            <motion.div
              key={stage.id + '-card'}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6 glass-card-hover"
              style={{ borderColor: `${stage.color}20` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl" style={{ color: stage.color }}>{stage.symbol}</span>
                <h4 className="font-cinzel text-sm" style={{ color: stage.color }}>{stage.label}</h4>
              </div>
              <p className="font-raleway text-xs text-white/50 leading-relaxed">{stage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
