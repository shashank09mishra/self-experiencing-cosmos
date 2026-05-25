import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { href: '#hero', label: 'Origin' },
  { href: '#theory', label: 'Theory' },
  { href: '#quantum', label: 'Quantum' },
  { href: '#consciousness', label: 'Consciousness' },
  { href: '#geometry', label: 'Geometry' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#cosmos', label: 'Cosmos' },
]

export default function Navigation({ musicOn, onMusicToggle }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-black/40 border-b border-cyan-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 relative">
            <div className="absolute inset-0 rounded-full border border-cyan-400/40 group-hover:border-cyan-400 transition-colors" />
            <div className="absolute inset-2 rounded-full bg-cyan-400/20 group-hover:bg-cyan-400/40 transition-colors" />
            <div className="absolute inset-3 rounded-full bg-cyan-400" />
          </div>
          <span className="font-cinzel text-xs tracking-[0.3em] text-white/70 group-hover:text-cyan-400 transition-colors uppercase hidden sm:block">
            Self-Experiencing Cosmos
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-raleway text-xs tracking-widest text-white/50 hover:text-cyan-400 transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Music Toggle + Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMusicToggle}
            className="flex items-center gap-2 px-3 py-1.5 rounded border border-white/10 hover:border-cyan-400/40 transition-all text-xs text-white/50 hover:text-cyan-400"
          >
            <span>{musicOn ? '⏸' : '▶'}</span>
            <span className="hidden sm:block font-mono tracking-widest">
              {musicOn ? 'MUTE' : 'SOUND'}
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
          >
            <span className={`block w-5 h-px bg-cyan-400 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px bg-cyan-400 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-cyan-400 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden border-t border-cyan-400/10 backdrop-blur-xl bg-black/60"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-cinzel text-sm tracking-widest text-white/60 hover:text-cyan-400 transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
