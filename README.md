# ADHD Budget App 🧠💸

A budgeting tool inspired by Simple Bank — thoughtfully redesigned for neurodivergent users, especially those with ADHD. Built using **Astro + Vue + Pinia**, this app focuses on simplicity, clarity, and supportive automation.

---

## 🎯 Vision

This app helps users:

- Clearly see what they can safely spend (`Safe-to-Spend`)
- Automatically split income into bills, goals, and vaults
- Reduce decision fatigue and budgeting burnout
- Get gentle visual feedback and positive reinforcement

---

## 🚧 Roadmap

### ✅ Phase 1: Core Budgeting System

- [x] Manual Transaction Entry
- [x] Safe-to-Spend Calculation
- [x] Budget Categories & Savings Goals
- [x] Rolling Budgets (carry over unused money)

### ✅ Phase 2: Light Automation & Smarter UX

- [x] Quick Add Buttons for Transactions
- [x] Recurring Bills & Expenses
- [x] Auto-Categorization of Transactions
- [x] Lazy Mode (Estimated Spending)

### ✅ Phase 3: Gamification & Persona-Style Visual Novel UI

- [x] Character Portraits that react to spending
- [x] GSAP + PixiJS animations (Budget Buddy)
- [x] Budget Streak System & Milestone Rewards
- [x] Smart Alerts: "Overspending on Fast Food?"
- [x] Forecasting: Future Safe-to-Spend trends

### ✅ Phase 4: Advanced Automation & AI

- [x] CSV Import for Bank Transactions
- [x] OCR for Receipt Scanning
- [x] Rule-Based Auto-Savings (e.g., "Save $5 when I eat out")

---

## 🛠️ Tech Stack

- [Astro](https://astro.build) (Static-first UI framework)
- [Vue 3](https://vuejs.org) (UI reactivity and interactivity)
- [Pinia](https://pinia.vuejs.org) (Vue state management)
- [TypeScript](https://www.typescriptlang.org)
- [SCSS](https://sass-lang.com) (7-1 architecture)
- [GSAP](https://greensock.com/gsap/) + [PixiJS](https://pixijs.com) (Animations for gamification)

---

## ⚙️ Getting Started

### Install dependencies:

```bash
npm install
```

### Run the development server:

```
npm run dev
```

Open your browser to http://localhost:4321.

## 📁 Project Structure
```
src/
├── components/
│ ├── vue/ # Vue interactive components
│ ├── astro/ # Static Astro layout parts
├── pages/ # Astro routes (Dashboard, Goals, etc.)
├── stores/ # Pinia state management
├── styles/ # SCSS styles (7-1 pattern)
├── hydrate/ # Manual Vue + Pinia mount scripts
├── utils/ # Helper functions (budget, currency, etc.)
├── data/ # Static/mock data
├── composables/ # Reusable logic (Vue Composition API)
├── types/ # TypeScript interfaces
```

## 🧠 Why This Exists

Most budgeting apps are cluttered, stressful, or too rigid. This one is:

- Visual and encouraging 🖼️

- Built around executive function challenges 🧩

- Focused on progress, not punishment 🧘‍♂️

Built with 💙 for neurodivergent creators.
