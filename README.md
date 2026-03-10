# KaroPitch — Landing Page

> **A KaroStartup Initiative** | Connecting Bharat's early-stage founders with India's top investors.

---

## 📋 Assignment: Definition of Done — Checklist

| Requirement | Status | Notes |
|---|---|---|
| **Hero Section** — "Pitch Your Startup to India's Top Investors." | ✅ | Exact headline from brief |
| **Hero** — Apply to Pitch button | ✅ | Primary CTA, above the fold |
| **Hero** — Explore Startups button | ✅ | Secondary CTA with play icon |
| **About Karo Pitch** — Mission & why it was created | ✅ | Full narrative section |
| **About Karo Pitch** — Bharat / Tier-2 / Tier-3 focus | ✅ | Highlighted in text + feature cards |
| **How It Works** — 4-step process with icons | ✅ | Apply → Shortlist → Pitch → Raise & Scale |
| **Step 1** — Apply with your pitch deck | ✅ | |
| **Step 2** — Get shortlisted by KaroStartup | ✅ | |
| **Step 3** — Pitch live to investors | ✅ | |
| **Step 4** — Raise funding and scale | ✅ | |
| **Who Can Apply** — D2C Brands | ✅ | |
| **Who Can Apply** — Consumer Startups | ✅ | |
| **Who Can Apply** — MSMEs | ✅ | |
| **Who Can Apply** — SaaS Startups | ✅ | |
| **Who Can Apply** — Manufacturing | ✅ | |
| **Who Can Apply** — Bharat-focused Startups | ✅ | |
| **Investors Section** — "Meet Investors Looking for the Next Big Startup." | ✅ | Exact headline from brief |
| **Featured Startups** — Dummy cards with name, category, description | ✅ | 6 cards in Bento grid |
| **About KaroStartup** — From karostartup.com | ✅ | Real stats: 500K+ readers, 2000+ stories |
| **Final CTA** — "Ready to Pitch Your Startup?" | ✅ | Exact copy from brief |
| **Final CTA** — Apply Now button | ✅ | |
| **Final CTA** — Partner With Us button | ✅ | |
| **Design** — Clean, modern UI | ✅ | Dark glassmorphism premium aesthetic |
| **Design** — Startup ecosystem vibe | ✅ | Emerald + Indigo palette, bold typography |
| **Design** — Easy navigation | ✅ | Fixed navbar with anchor links |
| **Design** — Mobile-friendly / responsive | ✅ | Breakpoints at 1024px, 768px, 480px |

**Score: 26/26 requirements met ✅**

---

## 🚀 Deliverables

| File | Description |
|---|---|
| `KaroPitch.jsx` | Complete landing page — single React file, ready to render |
| `README.md` | This file — DoD checklist, setup guide, design rationale |
| `SUBMISSION_NOTE.md` | Assignment submission note (tool used + design rationale) |
| `DESIGN_DECISIONS.md` | Deep-dive justification of every design choice |

---

## ⚙️ Setup & Deployment

### Option 1 — Instant Preview (Recommended for submission)
1. Go to [codesandbox.io](https://codesandbox.io/s/react)
2. Create a new React sandbox
3. Replace `App.js` contents with `KaroPitch.jsx`
4. Copy the shareable URL → submit as your website link

### Option 2 — Local Development
```bash
# 1. Create a new React app
npx create-react-app karopitch
cd karopitch

# 2. Install dependencies
npm install lucide-react

# 3. Replace src/App.js with KaroPitch.jsx contents
# 4. Run
npm start
```

### Option 3 — Deploy to Vercel (Live URL in 2 minutes)
```bash
npx create-react-app karopitch && cd karopitch
npm install lucide-react
# Replace App.js with KaroPitch.jsx contents
npx vercel --prod
```

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 18+ | UI framework |
| Lucide React | 0.383.0 | Icon library |
| Syne (Google Fonts) | — | Display typography |
| CSS-in-JS (inline styles) | — | Component styling |
| CSS Media Queries | — | Responsive breakpoints |

**Zero external CSS frameworks** — no Tailwind, no Bootstrap. Pure React + CSS for full portability.

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| > 1024px | Full desktop — 4-column grids, 2-column layouts |
| 768px – 1024px | Tablet — 2-column grids, stacked nav |
| < 768px | Mobile — 2-column grids collapse, hamburger menu, stacked sections |
| < 480px | Small mobile — compact spacing, readable typography |

---

## 🏗 File Structure (Modular Version)

```
src/
├── App.jsx                    ← Main entry + layout
├── constants/
│   └── content.js             ← Single source of truth for all text/data
└── components/
    ├── Navbar.jsx              ← Fixed navigation + mobile hamburger
    ├── Hero.jsx                ← Hero + countdown + email capture
    ├── LogoMarquee.jsx         ← Scrolling investor logo strip
    ├── About.jsx               ← Mission + Bharat focus
    ├── Process.jsx             ← 4-step how it works
    ├── StartupCard.jsx         ← Reusable startup card component
    ├── Startups.jsx            ← Bento grid startup showcase
    ├── Investors.jsx           ← Investor network section
    ├── WhoCanApply.jsx         ← Eligibility category grid
    ├── Testimonials.jsx        ← Founder stories + social proof
    ├── KaroStartupSection.jsx  ← About the parent platform
    ├── CTASection.jsx          ← Final call to action
    └── Footer.jsx              ← Site footer + links
```

---

## 📸 Screenshots

Open `KaroPitch.jsx` in Claude.ai to see the live interactive preview with all animations and hover effects.

---

## 👥 Credits

- **Built with:** Claude (claude.ai) by Anthropic
- **Platform:** KaroStartup — [karostartup.com](https://karostartup.com)
- **Assignment:** KaroPitch Website Development — Internship Submission
