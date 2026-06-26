# spandavidya-ai-ayurvedic-pulse-diagnostics — AI-powered Ayurvedic pulse diagnostics platform

> spandaVidya - AI-powered Ayurvedic pulse diagnostics platform combining traditional Naadi Pariksha with modern signal intelligence and machine learning for clinical-grade health assessments

![License](https://img.shields.io/badge/License-UNLICENSED-blue)
![Framework](https://img.shields.io/badge/Framework-React-blue)
![Runtime](https://img.shields.io/badge/Runtime-Node.js-green)

---

## Project Overview

spandaVidya is a web platform designed to represent an AI-powered Ayurvedic pulse diagnostics initiative. It focuses on bridging traditional Naadi Pariksha with modern signal intelligence, leveraging machine learning for clinical-grade health assessments.

---

## SpandaVidya AI

### Flagship Product: AI Cataract Detection & Analysis
Our flagship AI application allows users to capture and upload ocular images to obtain instantaneous, secure, and clinical-grade cataract assessment.

#### Workflow Pipeline
1. **Capture Eye Image**: Mobile-guided viewfinder interface aligns camera optics.
2. **Secure Upload**: End-to-end encrypted transfer via NestJS API.
3. **AI Analysis**: EfficientNet-B3 neural networks process anterior segment structures.
4. **Prediction**: Classification of cataract density stages with statistical certainty scoring.
5. **Clinical Report**: Immediate generation of structured PDF assessment documents.

#### Architecture & Tech Stack
- **Mobile Client**: React Native cross-platform application.
- **Backend API**: NestJS scalable node framework.
- **Machine Learning**: EfficientNet-B3 model classification hosted on HuggingFace.
- **Cloud Storage**: Highly secure, HIPAA-compliant AWS S3 storage buckets.
- **Computer Vision**: Ocular targeting, region-of-interest segmentation, and optical preprocessing.

---

## Future AI Products
- **Ayurvedic AI Consultation**: Conversational wellness consultation and Dosha guidance powered by Google Gemini.
- **AI Pulse Diagnostics**: Digital arterial wave Naadi diagnostics combining high-fidelity PPG signal analysis with classical Ayurvedic science.
- **Future AI Diagnostics**: Scalable API layer supporting external clinical models and integrations.

---

## Features

- **Interactive Landing Page**: A single-page layout featuring various sections such as Hero, Challenge, Approach, Progress, and Philosophy.
- **Scroll Animations**: Utilizes custom hooks (`useScrollReveal`, `useCountUp`) and GSAP for engaging scroll-based visibility and number counter animations.
- **Responsive Components**: Includes reusable UI components like Buttons, Cards, Navbar, and Footer.

---

## Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React** (v19) | Core UI library for building component-based interfaces |
| **TypeScript** | Static typing for improved code quality and developer experience |
| **GSAP** | Advanced animations and timeline control |

### Backend
| Technology | Purpose |
|------------|---------|
| [Not found in codebase] | |

### Database & Storage
| Technology | Purpose |
|------------|---------|
| [Not found in codebase] | |

### Dev Tools & Deployment
| Tool | Purpose |
|------|---------|
| **Vite** | Fast frontend build tool and development server |
| **ESLint** | Code linting and formatting rules |

---

## Project Structure

```
project-root/
├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Footer.tsx
│   ├── GlobalBackground.tsx
│   ├── Navbar.tsx
│   ├── CataractAppPreview.tsx
│   ├── CataractWorkflow.tsx
│   └── TechStackItem.tsx
├── data/
│   ├── config/
│   │   ├── branding.ts
│   │   ├── company.ts
│   │   └── ...
│   ├── content/
│   │   ├── team.ts
│   │   ├── cataract-detection.ts
│   │   └── ...
│   └── index.ts
├── sections/
│   ├── Approach.tsx
│   ├── Challenge.tsx
│   ├── Contact.tsx
│   ├── Differentiation.tsx
│   ├── Hero.tsx
│   ├── Mission.tsx
│   ├── PhilosophySection.tsx
│   ├── Progress.tsx
│   ├── Teams.tsx
│   ├── TechSection.tsx
│   └── CataractDetection.tsx
├── App.tsx
├── index.html
├── index.tsx
├── hooks.ts
├── theme.ts
├── types.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
└── metadata.json
```

---

## Database Models
[Not found in codebase]

---

## API Reference
[Not found in codebase]

---

## Pages & Routes

| Page | Route | Description |
|------|-------|-------------|
| Main Landing | `/` | Single-page layout containing all content sections (Hero, Mission, Tech, etc.) |

---

## Authentication & Authorization
[Not found in codebase]

---

## Third-Party Integrations

| Service | Purpose | Library |
|---------|---------|---------|
| GSAP | Complex UI animations | `gsap` |

---

## Installation & Setup

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### 1. Clone
```bash
git clone https://github.com/spandavidya/platform
cd [project folder]
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Set up the necessary environment variables (see below).

### 4. Start Development Server
```bash
npm run dev
```
*(Server will start on `0.0.0.0:3000`)*

---

## Environment Variables

```env
# ── Server ──────────────────────
PORT=3000

# ── API ─────────────────────────
GEMINI_API_KEY=[Your Gemini API Key]
```

---

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `vite` | Starts the Vite development server |
| `build` | `vite build` | Builds the app for production |
| `preview` | `vite preview` | Locally previews the production build |
| `lint` | `eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0` | Runs ESLint to check for code issues |

---

## Deployment
[Not found in codebase]

---

## Architecture Overview

- **Overall pattern**: Component-based single-page application (SPA). The main view is assembled in `App.tsx` by importing modular sections and components.
- **Styling**: Global CSS injected via `theme.ts` alongside utility classes (likely Tailwind, inferred from `className` usage in files like `App.tsx`).
- **Logic**: Custom React hooks (`hooks.ts`) are used for scroll visibility tracking and animated counters.
- **Config**: Vite is configured to map `GEMINI_API_KEY` to `process.env.API_KEY` for client-side usage if needed.

---

## Author

**spandaVidya Research Initiative <contact@spandavidya.ai>**

[![GitHub](https://img.shields.io/badge/GitHub-black?logo=github)](https://github.com/spandavidya)
[![Homepage](https://img.shields.io/badge/Website-blue?logo=vercel)](https://spandavidya.ai)

---

<p align="center">Built with ❤️ by <strong>SAM</strong></p>
