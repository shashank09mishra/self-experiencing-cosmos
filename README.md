# 🌌 The Self-Experiencing Cosmos

> *"Perhaps consciousness is what the cosmos is doing."*

A cinematic, fully immersive philosophical-scientific website presenting an original theory about consciousness, quantum entanglement, identity, and the universe experiencing itself through multiple perspectives.

---

## ✨ Features

- **Cinematic Loading Screen** — Sacred geometry animation with progress sequence
- **Interactive 3D Star Field** — Three.js powered space background reacting to mouse
- **Custom Cosmic Cursor** — Glowing cursor with trailing ring effect
- **Hero Section** — Massive animated title with floating particles
- **Full Theory Pages** — Schrödinger, Entanglement, Quarks, Euler's Identity
- **Consciousness Visualization** — Interactive neural-cosmic network canvas
- **Sacred Geometry Chamber** — Animated Sri Yantra, fractal trees, equations
- **Cosmic Timeline** — Void → Energy → Matter → Life → Consciousness → Unity
- **Cinematic Quotes** — Floating philosophical aphorisms
- **Final Cinematic Ending** — Universe singularity animation with closing statement
- **Navigation** — Smooth scroll, glassmorphism nav, music toggle
- **Fully Mobile Responsive**
- **SEO Optimized**

---

## 🗂 Folder Structure

```
the-self-experiencing-cosmos/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Loader.jsx              # Cinematic loading screen
│   │   ├── CosmicCursor.jsx        # Custom glow cursor
│   │   ├── SpaceBackground.jsx     # Three.js 3D star field
│   │   ├── Navigation.jsx          # Fixed glassmorphism nav
│   │   ├── HeroSection.jsx         # Hero with particles
│   │   ├── TheorySection.jsx       # Main theory introduction
│   │   ├── QuantumSection.jsx      # 4 quantum principle sections
│   │   ├── ConsciousnessSection.jsx# Interactive neural canvas
│   │   ├── SacredGeometrySection.jsx# Sri Yantra, fractals, equations
│   │   ├── TimelineSection.jsx     # Cosmic evolution timeline
│   │   ├── QuotesSection.jsx       # Cinematic quotes
│   │   ├── FinalSection.jsx        # Cinematic ending
│   │   └── CosmicSeparator.jsx     # Section separators
│   ├── App.jsx                     # Root component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles + Tailwind
├── index.html                      # HTML with SEO meta tags
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── .gitignore
```

---

## 🚀 Run Locally (Step by Step — Spoon Fed!)

### Step 1 — Install Node.js (if you haven't)

Download from: https://nodejs.org  
Choose the **LTS version** (recommended).  
After install, verify: open Terminal and type:
```bash
node --version    # should show v18+ or v20+
npm --version     # should show 9+
```

### Step 2 — Extract the ZIP

Unzip the downloaded file. You'll get a folder called `cosmos` (or similar).

### Step 3 — Open Terminal in the project folder

**Mac/Linux:**
```bash
cd path/to/cosmos
```
Example:
```bash
cd ~/Downloads/cosmos
```

**Windows:** Right-click the `cosmos` folder → "Open in Terminal"  
Or open Command Prompt and type:
```cmd
cd C:\Users\YourName\Downloads\cosmos
```

### Step 4 — Install dependencies

```bash
npm install
```
This downloads all libraries (~300MB, takes 1–2 minutes).

### Step 5 — Start the dev server

```bash
npm run dev
```

You'll see something like:
```
  VITE v5.x.x  ready in 300ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/
```

Open **http://localhost:5173** in your browser. 🎉

---

## 📦 Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized files. Test the build:
```bash
npm run preview
```

---

## 🐙 Push to GitHub (Step by Step)

### Step 1 — Create a GitHub account
Go to https://github.com and sign up (free).

### Step 2 — Create a new repository
1. Click the **+** icon (top right) → **New repository**
2. Name it: `self-experiencing-cosmos` (or any name you like)
3. Keep it **Public**
4. **Do NOT** check "Add a README" (we already have one)
5. Click **Create repository**

### Step 3 — Initialize Git and push

In your project terminal:

```bash
# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "🌌 Initial launch: The Self-Experiencing Cosmos"

# Set main branch
git branch -M main

# Connect to your GitHub repo (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push!
git push -u origin main
```

Example:
```bash
git remote add origin https://github.com/johndoe/self-experiencing-cosmos.git
```

Your code is now live on GitHub! ✅

---

## ⚡ Deploy to Vercel (Get a Live Link!)

### Option A — Deploy via Vercel Dashboard (Easiest)

1. Go to https://vercel.com and sign up with your **GitHub account**
2. Click **"Add New Project"**
3. Select your **GitHub repository** (`self-experiencing-cosmos`)
4. Vercel auto-detects Vite settings — just click **"Deploy"**
5. Wait ~60 seconds...
6. 🎉 **Your site is live!** You'll get a link like:  
   `https://self-experiencing-cosmos.vercel.app`

### Option B — Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login (opens browser)
vercel login

# Deploy from project folder
vercel

# Follow the prompts:
# ? Set up and deploy "cosmos"? → Y
# ? Which scope? → your account
# ? Link to existing project? → N
# ? Project name? → self-experiencing-cosmos
# ? In which directory is your code located? → ./
# ✅ Done! Link appears.

# Deploy to production
vercel --prod
```

---

## 🌐 Add Custom Domain (Optional)

1. In Vercel dashboard → your project → **Settings → Domains**
2. Add your domain (e.g., `selfexperiencingcosmos.com`)
3. Update your domain's DNS to point to Vercel
4. Vercel handles SSL automatically (HTTPS)

---

## 🛠 Customization Tips

### Change Colors
Edit `src/index.css` — look for CSS variables at the top:
```css
--neon-cyan: #00f5ff;
--quantum-violet: #7c3aed;
--divine-gold: #ffd700;
```

### Add Real Ambient Music
1. Add an `.mp3` file to `/public/` folder (e.g., `cosmic-ambient.mp3`)
2. In `App.jsx`, add:
```jsx
const audioRef = useRef(new Audio('/cosmic-ambient.mp3'))
audioRef.current.loop = true

const handleMusicToggle = () => {
  if (musicOn) {
    audioRef.current.pause()
  } else {
    audioRef.current.play()
  }
  setMusicOn(m => !m)
}
```

### Edit Theory Content
All text is in the component files. Main theory text is in:
- `src/components/TheorySection.jsx` — theory cards
- `src/components/QuantumSection.jsx` — quantum sections
- `src/components/QuotesSection.jsx` — quotes

### Add Your Name/Credit
Edit `src/components/FinalSection.jsx` — find the footer paragraph near the bottom.

---

## 📱 Mobile

Fully responsive. Tested on:
- iPhone SE / 12 / 14 Pro
- Android (Chrome)
- iPad
- Desktop (all modern browsers)

---

## 🧰 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18.2 | UI framework |
| Vite | 5.x | Build tool |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11.x | Animations |
| Three.js | 0.160 | 3D star field |
| @react-three/fiber | 8.x | React + Three.js |
| @react-three/drei | 9.x | Three.js helpers |

---

## 🔧 Troubleshooting

**"npm install" fails?**  
→ Make sure Node.js is version 18+. Run `node --version` to check.

**Black screen after loading?**  
→ Your browser may not support WebGL. Try Chrome or Firefox.

**"git push" asks for password?**  
→ Use a Personal Access Token instead of your GitHub password.  
→ Generate one at: GitHub → Settings → Developer settings → Personal access tokens

**Vercel build fails?**  
→ Check that your `package.json` exists and has the `"build"` script.  
→ In Vercel dashboard, set Framework to **Vite** manually if needed.

---

## 📄 License

MIT License — free to use, modify, and deploy for personal or portfolio use.

---

*Built with cosmic intention. The universe is aware of itself through you.*  
**∞ — Tat Tvam Asi**
