# KaroPitch

KaroPitch is a responsive React landing page for a startup-investor pitching platform focused on Bharat's early-stage founders. The experience is built as a single-page website with bold hero messaging, investor social proof, featured startups, founder testimonials, and multiple conversion-focused calls to action.

## Project Overview

- Built with `Create React App`
- Main UI lives in `src/App.js`
- Uses `lucide-react` for icons
- Styling is handled with inline styles plus a small global `<style>` block inside the app
- Designed as a polished, mobile-friendly marketing page

## Features

- Fixed navbar with desktop and mobile navigation
- Hero section with countdown timer and email capture UI
- Investor logo marquee
- Mission and Bharat-first positioning section
- Four-step startup application process
- Featured startups showcase
- Investor network section
- Eligibility grid for founders
- Founder testimonials and social proof
- KaroStartup partner section
- Final conversion CTA and footer

## Tech Stack

- `react` `19.2.0`
- `react-dom` `19.2.0`
- `react-scripts` `5.0.1`
- `lucide-react` `0.577.0`
- `@testing-library/*` for frontend testing

## Getting Started

### Prerequisites

- `Node.js` 18+ recommended
- `npm`

### Install

```bash
npm install
```

### Run locally

```bash
npm start
```

The app will start in development mode at `http://localhost:3000`.

### Production build

```bash
npm run build
```

This creates an optimized production bundle in the `build/` folder.

### Run tests

```bash
npm test
```

## Scripts

- `npm start` - starts the local development server
- `npm run build` - creates the production build
- `npm test` - launches the test runner
- `npm run eject` - ejects the CRA configuration

## Project Structure

```text
karo-pitch/
|-- public/
|   |-- favicon.ico
|   |-- index.html
|   |-- logo192.png
|   |-- logo512.png
|   |-- manifest.json
|   `-- robots.txt
|-- src/
|   |-- App.css
|   |-- App.js
|   |-- App.test.js
|   |-- index.css
|   |-- index.js
|   |-- logo.svg
|   |-- reportWebVitals.js
|   `-- setupTests.js
|-- DESIGN_DECISIONS.md
|-- SUBMISSION_NOTE.md
|-- package-lock.json
|-- package.json
`-- README.md
```

## Notes

- The page content is currently driven by constants declared at the top of `src/App.js`.
- The UI is intentionally implemented in a single file, which makes submission and review easy, but a future refactor could split sections into reusable components and move content into separate data files.
- The repository also includes `DESIGN_DECISIONS.md` and `SUBMISSION_NOTE.md` for extra project context.

## Known Follow-Up

- `src/App.test.js` is still the default Create React App test and does not match the current UI yet.

