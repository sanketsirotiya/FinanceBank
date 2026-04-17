# Finance Bank Dashboard - Quick Start Guide

## 🚀 SETUP INSTRUCTIONS

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- VS Code (recommended)

---

## STEP 1: Create Angular Project

```bash
# Navigate to project directory
cd C:\Users\DELL\source

# Create new Angular project
ng new finance-bank-dashboard --routing --style=css

# Answer prompts:
# Would you like to add Angular routing? Yes
# Which stylesheet format would you like to use? CSS

# Navigate into project
cd finance-bank-dashboard
```

---

## STEP 2: Install Dependencies

```bash
# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# Install ApexCharts
npm install apexcharts ng-apexcharts

# Install Lucide Icons
npm install lucide-angular
```

---

## STEP 3: Configure Tailwind CSS

**File: `tailwind.config.js`**
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#6C5DD3',
          blue: '#4ECDC4',
        },
        bg: {
          primary: '#1A1D2E',
          secondary: '#22273B',
          tertiary: '#2A2F45',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#8E92BC',
          muted: '#5A607F',
        },
        status: {
          success: '#00D9A5',
          error: '#FF6B6B',
          warning: '#FFB800',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(108, 93, 211, 0.3)',
      },
    },
  },
  plugins: [],
}
```

**File: `src/styles.css`**
```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

:root {
  --primary-purple: #6C5DD3;
  --primary-blue: #4ECDC4;
  --bg-primary: #1A1D2E;
  --bg-secondary: #22273B;
  --bg-tertiary: #2A2F45;
  --text-primary: #FFFFFF;
  --text-secondary: #8E92BC;
  --text-muted: #5A607F;
  --success: #00D9A5;
  --error: #FF6B6B;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
```

**File: `src/index.html` - Add fonts**
```html
<head>
  <!-- Existing meta tags -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
```

---

## STEP 4: Generate Project Structure

```bash
# Create core directories
ng generate module core
ng generate module shared

# Create dashboard feature module
ng generate module features/dashboard --routing

# Generate components
ng generate component features/dashboard/pages/dashboard-page
ng generate component shared/components/sidebar
ng generate component shared/components/header
ng generate component features/dashboard/components/kpi-card
ng generate component features/dashboard/components/analytics-chart
ng generate component features/dashboard/components/my-card
ng generate component features/dashboard/components/transaction-list
ng generate component features/dashboard/components/activity-chart

# Generate services
ng generate service core/services/dashboard
ng generate service core/services/transaction
ng generate service core/services/analytics

# Generate models
mkdir src/app/core/models
```

---

## STEP 5: Create Model Files

**Create these files in `src/app/core/models/`:**

**user.model.ts**
```typescript
export interface UserProfile {
  id: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
}
```

**kpi.model.ts**
```typescript
export interface KpiData {
  totalIncome: number;
  totalOutcome: number;
  incomeChange: number;
  outcomeChange: number;
}

export interface KpiCardData {
  label: string;
  value: number;
  percentageChange: number;
  isPositive: boolean;
  icon: string;
  iconBackground: string;
}
```

**chart.model.ts**
```typescript
export interface ChartDataSeries {
  name: string;
  data: number[];
}

export interface ChartConfig {
  series: ChartDataSeries[];
  categories: string[];
  colors: string[];
}
```

**card.model.ts**
```typescript
export interface CreditCard {
  id: string;
  cardNumber: string;
  balance: number;
  cardType: 'mastercard' | 'visa';
  expiryDate: string;
  holderName: string;
}
```

**transaction.model.ts**
```typescript
export interface Transaction {
  id: string;
  companyName: string;
  companyLogo: string;
  date: Date;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
}
```

**activity.model.ts**
```typescript
export interface ActivityData {
  dailyPayment: number;
  hobby: number;
}
```

---

## STEP 6: Create Mock Data

**Create `src/assets/mock-data/` folder and add these JSON files:**

**kpi-data.json**
```json
{
  "totalIncome": 632000,
  "totalOutcome": 632000,
  "incomeChange": 1.29,
  "outcomeChange": -0.68
}
```

**chart-data.json**
```json
{
  "income": [40000, 50000, 45000, 60000, 55000, 70000, 65000, 75000],
  "outcome": [35000, 48000, 42000, 55000, 50000, 65000, 60000, 70000],
  "categories": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]
}
```

**transactions.json**
```json
[
  {
    "id": "1",
    "companyName": "Adobe After Effect",
    "companyLogo": "assets/logos/adobe.png",
    "date": "2020-04-20T12:00:00Z",
    "amount": 80.09,
    "status": "completed"
  },
  {
    "id": "2",
    "companyName": "Mcdonald's",
    "companyLogo": "assets/logos/mcdonalds.png",
    "date": "2020-04-09T18:30:00Z",
    "amount": 7.03,
    "status": "completed"
  },
  {
    "id": "3",
    "companyName": "Levi's",
    "companyLogo": "assets/logos/levis.png",
    "date": "2020-04-09T14:15:00Z",
    "amount": 30.09,
    "status": "completed"
  }
]
```

**activity-data.json**
```json
{
  "dailyPayment": 55,
  "hobby": 20
}
```

**card-data.json**
```json
{
  "id": "1",
  "cardNumber": "9282345678901289",
  "balance": 5750.20,
  "cardType": "mastercard",
  "expiryDate": "09/25",
  "holderName": "Ali Riaz"
}
```

---

## STEP 7: Configure App Module

**File: `src/app/app.config.ts`**
```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient()
  ]
};
```

**File: `src/app/app.routes.ts`**
```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];
```

---

## STEP 8: Run Development Server

```bash
# Start the Angular dev server
ng serve

# Open browser to:
# http://localhost:4200
```

---

## 📋 DEVELOPMENT CHECKLIST

### Week 1 - Core Components
- [ ] Day 1: Project setup, Tailwind config, folder structure
- [ ] Day 2: Sidebar component + navigation
- [ ] Day 3: Header component + search
- [ ] Day 4: KPI cards component
- [ ] Day 5: Main layout + grid system

### Week 2 - Charts & Advanced Components
- [ ] Day 6-7: Analytics line chart (ApexCharts)
- [ ] Day 8: Activity donut chart
- [ ] Day 9: Credit card widget
- [ ] Day 10: Transaction list table
- [ ] Day 11-12: Responsive design + polish
- [ ] Day 13: Testing + deployment

---

## 🎨 FIGMA DESIGN REFERENCE

**Link:** https://www.figma.com/design/Jv6P6rz42lFPaDXuwHvh65/Dashboard-Finance-Bank-Fintech--Community-

**Instructions:**
1. Open Figma link
2. Click on "Dashboard" page in left sidebar
3. Use Dev Mode to extract exact colors, spacing, fonts
4. Take screenshots for component reference

---

## 🚢 DEPLOYMENT OPTIONS

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Build production
ng build --configuration production

# Deploy
vercel --prod
```

### Option 2: Netlify
```bash
# Build
ng build --configuration production

# Drag and drop dist/finance-bank-dashboard/browser folder to Netlify
```

### Option 3: GitHub Pages
```bash
# Install angular-cli-ghpages
npm install -g angular-cli-ghpages

# Build and deploy
ng build --configuration production --base-href /finance-bank-dashboard/
npx angular-cli-ghpages --dir=dist/finance-bank-dashboard/browser
```

---

## 📊 PERFORMANCE TARGETS

- **Lighthouse Score:** 90+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Bundle Size:** < 500KB (gzipped)

---

## 🔗 USEFUL COMMANDS

```bash
# Generate component
ng g c features/dashboard/components/component-name

# Generate service
ng g s core/services/service-name

# Run tests
ng test

# Build for production
ng build --configuration production

# Analyze bundle size
npm install -g webpack-bundle-analyzer
ng build --stats-json
webpack-bundle-analyzer dist/finance-bank-dashboard/browser/stats.json
```

---

## 🎯 PORTFOLIO CHECKLIST

Before marking as complete:
- [ ] All components match Figma design
- [ ] Fully responsive (mobile, tablet, desktop)
- [ ] Charts are interactive
- [ ] No console errors
- [ ] Lighthouse score 90+
- [ ] Deployed to live URL
- [ ] GitHub repo with clean README
- [ ] Screenshots for portfolio
- [ ] Demo video (optional)

---

**Happy Coding! Build something amazing! 🚀**
