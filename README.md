# Finance Bank Dashboard

A modern, dark-themed banking dashboard built with Angular 21 and ApexCharts.

**Live Demo:** https://finance-bankings.netlify.app

---

## Screenshots

![Dashboard Preview](https://finance-bankings.netlify.app/assets/preview.png)

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Angular | 21 | Framework (standalone components) |
| TypeScript | 5.x | Type-safe development |
| Tailwind CSS | 3.x | Utility-first styling |
| ApexCharts / ng-apexcharts | 5.x / 2.x | Interactive charts |
| Lucide Angular | 1.x | Icon library |
| Zone.js | latest | Angular change detection |

---

## Features

- KPI cards — Total Income & Outcome with trend badges
- Analytics bar chart — Monthly income vs outcome (ApexCharts)
- Credit card widget — Glassmorphism design with card number masking
- Transaction list — Searchable table with status badges
- Activity chart — Radial gauge showing spending breakdown
- Sidebar navigation — Active states, dark mode toggle, user profile
- Deployed on Netlify with SPA redirect support

---

## Run Locally

```bash
git clone https://github.com/sanketsirotiya/FinanceBank.git
cd FinanceBank
npm install
ng serve
```

Open http://localhost:4200

---

## Build & Deploy

```bash
ng build --configuration production
# Output: dist/FinanceBank/browser
```

Netlify auto-deploys on push to `main` via `netlify.toml`.

---

## Design Credit

UI design by **[Ali Riaz](https://www.figma.com/community)** — original Figma file:
[Dashboard Finance Bank Fintech (Community)](https://www.figma.com/design/Jv6P6rz42lFPaDXuwHvh65/Dashboard-Finance-Bank-Fintech--Community-)

This is a portfolio implementation of that community design. All visual credit goes to the original designer.

---

## Project Structure

```
src/app/
├── core/
│   ├── models/          # TypeScript interfaces (KPI, Card, Transaction…)
│   └── services/        # DashboardService (mock data)
├── shared/
│   └── components/      # Sidebar, Header
└── features/
    └── dashboard/
        ├── components/  # KpiCard, AnalyticsChart, MyCard, TransactionList, ActivityChart
        └── pages/       # DashboardPage (main layout)
```
