# Neo Unlimited — Consultancy Website

Neo Unlimited is a premium consultancy agency website built to reflect a high-end, intentional approach to digital strategy, design, and development.

This project focuses on **clarity, restraint, and execution quality** — avoiding generic agency patterns in favor of strong composition, typography, and scalable frontend architecture.

---

## Overview

Neo Unlimited is designed as a **portfolio-level, client-facing consultancy site**, emphasizing:

- Strategic positioning over visual noise
- Clean, centered layout systems
- Strong typographic hierarchy
- Minimal, deliberate UI
- Scalable and maintainable frontend structure

This is not a template-driven build. Every component and layout decision is made with intention.

---

## Tech Stack

- **React (Vite)**
- **React Router**
- **CSS Modules**
- **Vanilla CSS (Design Tokens via CSS Variables)**

No UI frameworks. No Tailwind. No component libraries.

---

## Architecture

The project is structured to prioritize **clarity, modularity, and long-term scalability**.

```

src/
app/            → App shell & routing
components/     → Reusable layout + UI primitives
pages/          → Page-level composition
styles/         → Global styles + tokens
assets/         → Static assets (if needed)
lib/            → Utilities
data/           → Static content

```

### Design System Approach

Instead of relying on heavy UI abstractions, the system is built from **small, composable primitives**:

- `Container` → width + alignment control
- `Section` → vertical rhythm + structure
- `Stack` → consistent vertical spacing
- `Cluster` → inline grouping
- `Button`, `Divider`, `Eyebrow` → minimal UI layer

This keeps the UI flexible while maintaining consistency.

---

## Layout System

A centered container system is used throughout the site:

- `narrow` → readable text blocks
- `default` → standard content width
- `wide` → hero and high-impact sections

This ensures:
- consistent alignment
- strong visual rhythm
- controlled reading experience

---

## Design Principles

This project is guided by a few core principles:

### 1. Restraint over excess
No unnecessary UI elements, cards, or decorative clutter.

### 2. Composition first
Hierarchy is created through spacing, layout, and typography — not visual noise.

### 3. Intentional sections
Every section exists for a reason. Nothing is included “because other sites have it.”

### 4. Typography carries the experience
Type scale, spacing, and rhythm drive the visual quality of the site.

### 5. Avoid template patterns
No generic agency layouts, overused grids, or SaaS-style UI components.

---

## Features (Current)

- Structured layout system
- Reusable component architecture
- Responsive container scaling
- Global design token system
- Clean routing setup
- Header and footer foundation

---

## In Progress

- Homepage composition and art direction
- Service presentation structure
- Case study / work system
- Refined interaction and motion design
- Brand refinement and visual polish

---

## Assets

- Logo: SVG (vector-based for clarity and scalability)
- Favicon: SVG + PNG fallback

Assets are stored in:
```

public/images/
public/

````

---

## Getting Started

```bash
npm install
npm run dev
````

Build:

```bash
npm run build
```

---

## Philosophy

Neo Unlimited is built with the belief that:

> High-end digital work is not defined by how much is added, but by how much is intentionally controlled.

This project aims to demonstrate a balance between **design discipline and technical execution**.

---

## Author

**Jeremy Jefferson**
Frontend Developer · UI/UX Designer · Brand Systems

---

## Notes

This project is actively evolving and will continue to be refined as new sections, interactions, and case studies are developed.

```

---
