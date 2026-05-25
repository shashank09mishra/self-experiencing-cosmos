import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

function ImplodingUniverse() {
  const canvasRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const cx = canvas.width / 2
    const cy = canvas.height / 2
    let t = 0
    const particles = Array.from({ length: 120 }, () => ({
      angle: Math.random() * Math.PI * 2,
      dist: 20 + Math.random() * 200,
      speed: 0.002 + Math.random() * 0.003,
      r: 1 + Math.random() * 2,
      color: Math.random() < 0.5 ? [0, 245, 255] : [124, 58, 237],
      phase: Math.random() * Math.PI * 2,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.008

      // Central glow
      const pulse = 0.5 + 0.5 * Math.sin(t * 1.5)
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 60 * pulse)
      grd.addColorStop(0, `rgba(0,245,255,${0.3 * pulse})`)
      grd.addColorStop(0.5, `rgba(124,58,237,${0.15 * pulse})`)
      grd.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.beginPath()
      ctx.arc(cx, cy, 60 * pulse, 0, Math.PI * 2)
      ctx.fillStyle = grd
      ctx.fill()

      particles.forEach(p => {
        p.angle += p.speed
        const breathe = 1 + 0.15 * Math.sin(t * 2 + p.phase)
        const x = cx + Math.cos(p.angle) * p.dist * breathe
        const y = cy + Math.sin(p.angle) * p.dist * breathe
        const alpha = 0.5 + 0.5 * Math.sin(t * 3 + p.phase)

        // Trail
        ctx.beginPath()
        ctx.moveTo(cx + Math.cos(p.angle - 0.1) * p.dist * breathe, cy + Math.sin(p.angle - 0.1) * p.dist * breathe)
        ctx.lineTo(x, y)
        ctx.strokeStyle = `rgba(${p.color.join(',')},${alpha * 0.3})`
        ctx.lineWidth = 0.5
        ctx.stroke()

        // Particle
        ctx.beginPath()
        ctx.arc(x, y, p.r * (0.8 + 0.2 * pulse), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color.join(',')},${alpha * 0.9})`
        ctx.fill()

        // Glow
        const pGrd = ctx.createRadialGradient(x, y, 0, x, y, p.r * 4)
        pGrd.addColorStop(0, `rgba(${p.color.join(',')},${alpha * 0.3})`)
        pGrd.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.beginPath()
        ctx.arc(x, y, p.r * 4, 0, Math.PI * 2)
        ctx.fillStyle = pGrd
        ctx.fill()
      })

      // Center singularity dot
      ctx.beginPath()
      ctx.arc(cx, cy, 3 + pulse * 3, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255,255,255,${0.8 * pulse})`
      ctx.fill()

      animRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  return <canvas ref={canvasRef} className="w-full h-64 md:h-80" />
}

export default function FinalSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="cosmos" className="relative min-h-screen flex flex-col items-center justify-center py-32 px-6 overflow-hidden">
      {/* Deep gradient background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(26,5,51,0.6) 0%, #030308 70%)' }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Universe animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="mb-12"
        >
          <ImplodingUniverse />
        </motion.div>

        {/* Final text */}
        <div ref={ref} className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="font-mono text-xs text-cyan-400/40 tracking-[0.4em] uppercase mb-8"
          >
            ✦ The Conclusion ✦
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="font-cinzel font-black text-3xl md:text-5xl lg:text-6xl leading-tight mb-8"
            style={{ textShadow: '0 0 60px rgba(124,58,237,0.3)' }}
          >
            <span className="text-white/80">The cosmos may not merely</span>{' '}
            <span style={{
              background: 'linear-gradient(135deg, #00f5ff, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>contain consciousness.</span>
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="font-cinzel font-black text-3xl md:text-5xl lg:text-6xl leading-tight mb-16"
          >
            <span className="text-white/60">Perhaps consciousness is</span>{' '}
            <motion.span
              animate={{ textShadow: ['0 0 20px rgba(0,245,255,0.5)', '0 0 40px rgba(0,245,255,0.8)', '0 0 20px rgba(0,245,255,0.5)'] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ color: '#00f5ff' }}
            >
              what the cosmos is doing.
            </motion.span>
          </motion.h2>

          {/* Separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="w-48 h-px mx-auto mb-12"
            style={{ background: 'linear-gradient(90deg, transparent, #00f5ff, #7c3aed, transparent)' }}
          />

          {/* Closing paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
            className="font-raleway text-lg text-white/50 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            The interplay of consciousness, quantum phenomena, and fundamental particles invites us to
            reconsider our place in the cosmos. We may indeed be part of a grand, interwoven dance of
            existence — where every individual perspective contributes to the universe's ongoing journey
            of self-discovery and transformation.
          </motion.p>

          {/* OM / Closing symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-5xl mb-6"
              style={{ color: '#00f5ff', textShadow: '0 0 30px rgba(0,245,255,0.6)', fontFamily: 'serif' }}
            >
              ॐ
            </motion.div>
            <p className="font-mono text-xs tracking-widest text-white/20 uppercase">
              Tat Tvam Asi — Thou Art That
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <p className="font-mono text-xs text-white/15 tracking-widest">
          THE SELF-EXPERIENCING COSMOS  ·  A THEORY OF CONSCIOUSNESS & QUANTUM REALITY
        </p>
      </motion.div>
    </section>
  )
}
