/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-black': '#030308',
        'deep-blue': '#050a1a',
        'nebula-purple': '#1a0533',
        'neon-cyan': '#00f5ff',
        'electric-indigo': '#6610f2',
        'divine-gold': '#ffd700',
        'shiva-grey': '#8899aa',
        'quantum-violet': '#7c3aed',
        'stellar-white': '#e8f4f8',
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px #00f5ff, 0 0 20px #00f5ff' },
          '100%': { textShadow: '0 0 20px #00f5ff, 0 0 40px #00f5ff, 0 0 80px #00f5ff' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
