# Neo Unlimited — Consultancy Website

Neo Unlimited is a premium consultancy website built to reflect a **high-end, strategy-first approach** to digital design and development.

The project emphasizes **clarity, restraint, and execution quality**, avoiding generic agency patterns in favor of strong composition, typography, and scalable frontend architecture.

---

## Overview

Neo Unlimited is designed as a **client-facing consultancy platform and portfolio-level build**, focused on:

- Strategic positioning over visual noise
- Clean, centered layout systems
- Strong typographic hierarchy
- Minimal, intentional UI
- Scalable and maintainable frontend architecture

This is not a template-driven project.  
Every component, layout decision, and interaction is implemented with intent.

---

## Tech Stack

- **React (Vite)**
- **React Router**
- **CSS Modules**
- **Vanilla CSS (Design Tokens via CSS Variables)**

No UI frameworks. No Tailwind. No component libraries.

The goal is full control over layout, performance, and design fidelity.

---

## Architecture

The project is structured to prioritize **clarity, modularity, and long-term scalability**.

```

src/
├── app/ → App shell & routing
├── components/ → Reusable UI + layout primitives
├── pages/ → Page-level composition
├── styles/ → Global styles + design tokens
├── assets/ → Static assets
├── lib/ → Utilities
├── data/ → Structured content

```

---

## Design System

Instead of relying on heavy abstractions, the system is built from **small, composable primitives**:

- `Container` → layout width + alignment
- `Section` → vertical rhythm + structure
- `Stack` → consistent vertical spacing
- `Cluster` → inline grouping and distribution
- `Button`, `Divider`, `Eyebrow` → minimal UI layer

This approach ensures:

- consistency without rigidity
- flexibility across layouts
- long-term maintainability

---

## Layout System

A centered container system is used throughout the site:

- `narrow` → optimized for readable text blocks
- `default` → standard content width
- `wide` → hero and high-impact sections

This creates:

- consistent alignment
- predictable rhythm
- controlled reading flow

---

## Design Principles

### 1. Restraint over excess

No unnecessary UI, decorative elements, or component bloat.

### 2. Composition first

Hierarchy is driven by spacing, layout, and typography—not visual noise.

### 3. Intentional structure

Every section serves a purpose. Nothing exists by default.

### 4. Typography as the foundation

Type scale, spacing, and rhythm carry the experience.

### 5. System over styling

The focus is on building scalable systems, not one-off visuals.

---

## Features

- Component-driven architecture
- Custom layout system (no frameworks)
- Design tokens via CSS variables
- Responsive container scaling
- Clean routing and page structure
- SVG-based brand assets for scalability

---

## Performance & Engineering Notes

- Built with **Vite** for fast development and optimized builds
- Minimal dependencies to reduce bundle size
- SVG assets used for crisp rendering across resolutions
- Layout primitives designed for reuse and consistency
- Structure supports easy expansion into CMS or API-driven content

---

## Assets

- Logo: SVG (vector-based for scalability and clarity)
- Favicon: SVG with PNG fallbacks

```

public/images/
public/

```

---

## Getting Started

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

---

## Philosophy

Neo Unlimited is built on a simple principle:

> High-end digital work is defined by control, not excess.

This project demonstrates the balance between:

- **design discipline**
- **frontend engineering precision**

---

## Author

**Jeremy Jefferson**
Frontend Developer · UI/UX Designer · Brand Systems

---

## Status

Actively refined and expanded with ongoing improvements to:

- interaction design
- case study structure
- content systems
- performance optimization

---

## Live Site

https://neo-unlimited.vercel.app/

```

```
