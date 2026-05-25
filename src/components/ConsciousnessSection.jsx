import { useRef, useEffect, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'

function ConsciousnessCanvas() {
  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }
    canvas.addEventListener('mousemove', onMouseMove)

    // Create nodes
    const nodeCount = 40
    const nodes = []
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: 2 + Math.random() * 3,
        phase: Math.random() * Math.PI * 2,
        isMajor: Math.random() < 0.2,
      })
    }

    let t = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.005

      // Update positions
      nodes.forEach(n => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1

        // Mouse attraction (subtle)
        const dx = mouseRef.current.x - n.x
        const dy = mouseRef.current.y - n.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          n.x += dx * 0.002
          n.y += dy * 0.002
        }
      })

      // Draw connections
      nodes.forEach((a, i) => {
        nodes.slice(i + 1).forEach(b => {
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 130) {
            const alpha = (1 - d / 130) * 0.35
            const pulse = 0.5 + 0.5 * Math.sin(t * 2 + a.phase)
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            // Alternate cyan and purple connections
            const useC = (i % 2 === 0)
            ctx.strokeStyle = useC
              ? `rgba(0, 245, 255, ${alpha * pulse})`
              : `rgba(124, 58, 237, ${alpha * pulse})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        })
      })

      // Draw nodes
      nodes.forEach((n, i) => {
        const pulse = 0.7 + 0.3 * Math.sin(t * 3 + n.phase)
        const r = n.r * pulse

        // Glow
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 4)
        if (n.isMajor) {
          grd.addColorStop(0, 'rgba(255,215,0,0.5)')
          grd.addColorStop(1, 'rgba(255,215,0,0)')
        } else if (i % 3 === 0) {
          grd.addColorStop(0, 'rgba(0,245,255,0.4)')
          grd.addColorStop(1, 'rgba(0,245,255,0)')
        } else {
          grd.addColorStop(0, 'rgba(124,58,237,0.4)')
          grd.addColorStop(1, 'rgba(124,58,237,0)')
        }
        ctx.beginPath()
        ctx.arc(n.x, n.y, r * 4, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
        ctx.fillStyle = n.isMajor ? '#ffd700' : (i % 3 === 0 ? '#00f5ff' : '#7c3aed')
        ctx.fill()
      })

      // Mouse ripple
      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      if (mx > 0 && my > 0) {
        const rippleR = 40 + 20 * Math.sin(t * 5)
        ctx.beginPath()
        ctx.arc(mx, my, rippleR, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(0,245,255,0.08)'
        ctx.lineWidth = 1
        ctx.stroke()
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full rounded-xl cursor-crosshair"
      style={{ background: 'transparent' }}
    />
  )
}

export default function ConsciousnessSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="consciousness" className="relative py-32 px-6">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(124,58,237,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-xs text-purple-400/50 tracking-[0.4em] uppercase mb-4"
          >
            ✦ Interactive Visualization ✦
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-heading text-4xl md:text-5xl text-white mb-4"
          >
            The Neural Cosmos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="font-raleway text-white/50 max-w-2xl mx-auto"
          >
            Move your cursor through the network. Watch consciousness nodes connect, pulse, and illuminate — just as thoughts emerge from synapses, and galaxies from void.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="lg:col-span-2 glass-card overflow-hidden"
            style={{ height: '500px', borderColor: 'rgba(124,58,237,0.2)' }}
          >
            <ConsciousnessCanvas />
          </motion.div>

          {/* Side info */}
          <div className="flex flex-col gap-6">
            {[
              {
                icon: '◈',
                color: '#00f5ff',
                title: 'Consciousness Nodes',
                body: 'Each node represents a point of awareness — a perspective through which the universe experiences itself. Major nodes (gold) represent peak states of self-awareness.',
              },
              {
                icon: '∿',
                color: '#7c3aed',
                title: 'Quantum Connections',
                body: 'The lines between nodes mirror quantum entanglement — invisible threads of correlation that persist across all distances, forming the web of interconnected reality.',
              },
              {
                icon: '✦',
                color: '#ffd700',
                title: 'Universal Self-Observation',
                body: 'The entire network is the universe observing itself. Your interaction — your cursor moving through it — is consciousness influencing the cosmic field.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.15 }}
                className="glass-card p-5 glass-card-hover"
                style={{ borderColor: `${item.color}20` }}
              >
                <span className="text-2xl block mb-2" style={{ color: item.color }}>{item.icon}</span>
                <h4 className="font-cinzel text-sm mb-2 text-white">{item.title}</h4>
                <p className="font-raleway text-xs text-white/50 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote below */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="font-cinzel text-xl md:text-2xl text-white/80 italic leading-relaxed mb-4">
            "Consciousness may be the universe dreaming through billions of minds."
          </p>
          <div className="w-16 h-px mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </motion.blockquote>
      </div>
    </section>
  )
}
