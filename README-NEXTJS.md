# 🏆 ChainCrew POTD Leaderboard - Next.js

A stunning, animated leaderboard built with Next.js, React, and TypeScript featuring beautiful bubble animations and gradient effects.

## ✨ Features

- 🎨 **Stunning Visual Design** - Cyan & pink gradient theme with glass-morphism effects
- 🫧 **Animated Bubble Background** - Canvas-based floating bubble animation
- 🏅 **Top 3 Highlights** - Gold, silver, bronze with metallic shine effects
- 📊 **Real-time Data** - Fetches from Google Sheets with auto-refresh every 30 seconds
- 📱 **Fully Responsive** - Works perfectly on mobile and desktop
- ⚡ **Smooth Animations** - Staggered entry animations, hover effects, and transitions
- 🎯 **TypeScript** - Full type safety
- 🚀 **Next.js 14** - Latest features and optimizations

## 🚀 Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Header with logo and social links
│   │   ├── Footer.tsx          # Footer with last updated time
│   │   ├── Leaderboard.tsx     # Main leaderboard with data fetching
│   │   └── ThreeBackground.tsx # Animated bubble background
│   ├── globals.css             # Global styles with animations
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── public/
│   └── logo.png                # CtrlZ logo
├── package.json
├── tsconfig.json
└── next.config.js
```

## 🎨 Color Scheme

- **Primary**: Cyan (#00ffff) & Hot Pink (#ff69b4)
- **Background**: Dark navy gradient (#0a0e27 → #1a1a2e → #16213e)
- **Accents**: Purple (#667eea), Pink (#f093fb)
- **Top 3**: Gold (#ffd700), Silver (#c0c0c0), Bronze (#cd7f32)

## 🎭 Animations

- Floating bubbles with pulse effects
- Staggered entry slide-in animations
- Rainbow gradient text shifts
- Glow and shimmer effects
- Smooth hover transitions
- Border glow animations

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🚢 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## 🛠️ Technologies

- Next.js 14
- React 18
- TypeScript
- Canvas API (for bubble animations)
- CSS3 Animations
- Google Sheets API

## 📝 License

MIT
