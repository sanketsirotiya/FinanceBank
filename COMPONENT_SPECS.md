# Component Specifications - Finance Bank Dashboard

This document provides pixel-perfect implementation details for each component.

---

## 🎨 GLOBAL STYLES

### Import Required Fonts
```html
<!-- index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Global CSS Variables
```css
/* styles.css */
:root {
  /* Colors */
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
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
}

body {
  font-family: 'Inter', system-ui, sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  margin: 0;
  padding: 0;
}
```

---

## 1. SIDEBAR COMPONENT

### Visual Specifications
- **Width:** 280px (desktop), 80px (collapsed), 0px (mobile hidden)
- **Background:** `#22273B`
- **Padding:** 24px
- **Height:** 100vh
- **Position:** Fixed left

### Logo Section
```html
<div class="logo">
  <img src="uifry-logo.svg" alt="Uifry" />
  <span>uifry</span>
</div>
```
- **Logo size:** 40px × 40px
- **Font size:** 20px
- **Font weight:** 700
- **Color:** `#FFFFFF`
- **Gap:** 12px

### Navigation Menu Items
```typescript
menuItems = [
  { label: 'Dashboard', icon: 'layout-dashboard', route: '/dashboard', active: true },
  { label: 'Analytics', icon: 'bar-chart-2', route: '/analytics', active: false },
  { label: 'My Wallet', icon: 'wallet', route: '/wallet', active: false },
  { label: 'Accounts', icon: 'users', route: '/accounts', active: false },
  { label: 'Settings', icon: 'settings', route: '/settings', active: false },
];
```

**Active State:**
```css
.menu-item.active {
  background: linear-gradient(90deg, #6C5DD3 0%, #5B4CCC 100%);
  border-radius: 12px;
  padding: 14px 16px;
  color: #FFFFFF;
}
```

**Inactive State:**
```css
.menu-item {
  padding: 14px 16px;
  color: #8E92BC;
  border-radius: 12px;
  transition: all 0.2s;
}

.menu-item:hover {
  background: rgba(108, 93, 211, 0.1);
  color: #FFFFFF;
}
```

### Bottom Section
```html
<div class="sidebar-bottom">
  <div class="security-item">
    <lucide-icon name="shield"></lucide-icon>
    <span>Security</span>
  </div>
  
  <div class="help-item">
    <lucide-icon name="help-circle"></lucide-icon>
    <span>Help Centre</span>
  </div>
  
  <div class="dark-mode-toggle">
    <lucide-icon name="moon"></lucide-icon>
    <span>Dark Mode</span>
    <toggle-switch [(ngModel)]="isDarkMode"></toggle-switch>
  </div>
  
  <div class="user-profile">
    <img [src]="userAvatar" alt="User" class="avatar" />
    <div class="user-info">
      <div class="user-name">{{ userName }}</div>
      <div class="user-role">{{ userRole }}</div>
    </div>
    <lucide-icon name="chevron-down"></lucide-icon>
  </div>
</div>
```

**User Profile Styling:**
```css
.user-profile {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  margin-top: 24px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.user-name {
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;
}

.user-role {
  font-size: 12px;
  color: #8E92BC;
}
```

---

## 2. HEADER COMPONENT

### Layout
- **Height:** 80px
- **Background:** `#1A1D2E`
- **Padding:** 0 32px
- **Border-bottom:** 1px solid rgba(255, 255, 255, 0.05)

### Welcome Message
```html
<div class="welcome-section">
  <h1 class="welcome-title">Welcome Back, {{ userName }} 👋</h1>
  <p class="welcome-subtitle">Here's what's happening with your store today.</p>
</div>
```

**Styling:**
```css
.welcome-title {
  font-size: 28px;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.2;
}

.welcome-subtitle {
  font-size: 14px;
  color: #8E92BC;
  margin: 4px 0 0 0;
}
```

### Search Bar
```html
<div class="search-container">
  <lucide-icon name="search" class="search-icon"></lucide-icon>
  <input 
    type="text" 
    placeholder="Search for anything..." 
    class="search-input"
    [(ngModel)]="searchQuery"
  />
</div>
```

**Styling:**
```css
.search-container {
  position: relative;
  width: 320px;
}

.search-input {
  width: 100%;
  padding: 12px 16px 12px 44px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #FFFFFF;
  font-size: 14px;
}

.search-input::placeholder {
  color: #5A607F;
}

.search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #8E92BC;
  width: 18px;
  height: 18px;
}
```

---

## 3. KPI CARD COMPONENT

### Card Dimensions
- **Width:** Flexible (grid responsive)
- **Height:** 120px
- **Padding:** 20px
- **Border-radius:** 16px
- **Background:** `#22273B`
- **Box-shadow:** `0 2px 8px rgba(0, 0, 0, 0.15)`

### Component Structure
```html
<div class="kpi-card" [ngClass]="cardType">
  <div class="kpi-header">
    <div class="icon-container" [style.background]="iconBackground">
      <lucide-icon [name]="icon" class="kpi-icon"></lucide-icon>
    </div>
    <div class="trend-badge" [ngClass]="{'positive': isPositive, 'negative': !isPositive}">
      <lucide-icon [name]="isPositive ? 'trending-up' : 'trending-down'" size="14"></lucide-icon>
      <span>{{ percentageChange }}%</span>
    </div>
  </div>
  
  <div class="kpi-content">
    <div class="kpi-label">{{ label }}</div>
    <div class="kpi-value">{{ value | currency }}</div>
  </div>
</div>
```

### Styling
```css
.kpi-card {
  background: #22273B;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.kpi-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon-container {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.kpi-icon {
  width: 24px;
  height: 24px;
  color: #FFFFFF;
}

.trend-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
}

.trend-badge.positive {
  background: rgba(0, 217, 165, 0.1);
  color: #00D9A5;
}

.trend-badge.negative {
  background: rgba(255, 107, 107, 0.1);
  color: #FF6B6B;
}

.kpi-label {
  font-size: 14px;
  color: #8E92BC;
  font-weight: 500;
}

.kpi-value {
  font-size: 32px;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1;
}
```

### Example Data
```typescript
@Input() kpiData = {
  label: 'Total Income',
  value: 632000,
  percentageChange: 1.29,
  isPositive: true,
  icon: 'arrow-down-left',
  iconBackground: 'rgba(78, 205, 196, 0.15)'
};
```

---

## 4. ANALYTICS CHART COMPONENT

### Container Dimensions
- **Width:** 100% (2 columns in grid)
- **Height:** 400px
- **Padding:** 24px
- **Border-radius:** 16px
- **Background:** `#22273B`

### Header Section
```html
<div class="chart-header">
  <div>
    <h3 class="chart-title">Analytics</h3>
    <div class="chart-legend">
      <div class="legend-item">
        <span class="legend-dot income"></span>
        <span>Income</span>
      </div>
      <div class="legend-item">
        <span class="legend-dot outcome"></span>
        <span>Outcome</span>
      </div>
    </div>
  </div>
  
  <select class="year-select" [(ngModel)]="selectedYear">
    <option value="2020">2020</option>
    <option value="2021">2021</option>
  </select>
</div>
```

### ApexCharts Configuration
```typescript
chartOptions: ApexOptions = {
  chart: {
    type: 'area',
    height: 320,
    background: 'transparent',
    toolbar: { show: false },
    fontFamily: 'Inter, sans-serif',
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 90, 100]
    },
  },
  colors: ['#6C5DD3', '#4ECDC4'],
  series: [
    {
      name: 'Income',
      data: [40000, 50000, 45000, 60000, 55000, 70000, 65000, 75000]
    },
    {
      name: 'Outcome',
      data: [35000, 48000, 42000, 55000, 50000, 65000, 60000, 70000]
    }
  ],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    labels: {
      style: {
        colors: '#8E92BC',
        fontSize: '12px',
      },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    labels: {
      style: {
        colors: '#8E92BC',
        fontSize: '12px',
      },
      formatter: (value) => `$${value / 1000}K`,
    },
  },
  grid: {
    borderColor: 'rgba(255, 255, 255, 0.05)',
    strokeDashArray: 4,
    xaxis: { lines: { show: false } },
  },
  tooltip: {
    theme: 'dark',
    style: {
      fontSize: '12px',
      fontFamily: 'Inter, sans-serif',
    },
    y: {
      formatter: (value) => `$${value.toLocaleString()}`,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
};
```

---

## 5. MY CARD COMPONENT

### Card Dimensions
- **Width:** 100%
- **Height:** 200px
- **Border-radius:** 24px
- **Background:** Linear gradient
- **Padding:** 24px

### Component Structure
```html
<div class="card-widget">
  <div class="card-header">
    <h3>My Card</h3>
  </div>
  
  <div class="credit-card">
    <div class="card-top">
      <div class="card-balance">
        <div class="balance-label">Card Balance</div>
        <div class="balance-amount">{{ cardBalance | currency }}</div>
      </div>
      <img src="mastercard-logo.svg" alt="Mastercard" class="card-logo" />
    </div>
    
    <div class="card-bottom">
      <div class="card-number">{{ maskedCardNumber }}</div>
      <div class="card-expiry">{{ expiryDate }}</div>
    </div>
  </div>
  
  <div class="card-actions">
    <button class="btn-primary">Manage Cards</button>
    <button class="btn-secondary">Transfer</button>
  </div>
</div>
```

### Styling
```css
.credit-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 24px;
  padding: 24px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 8px 32px rgba(108, 93, 211, 0.3);
  position: relative;
  overflow: hidden;
}

/* Glassmorphism effect */
.credit-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  pointer-events: none;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.balance-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 4px;
}

.balance-amount {
  font-size: 28px;
  font-weight: 700;
  color: #FFFFFF;
}

.card-logo {
  width: 48px;
  height: 32px;
}

.card-number {
  font-size: 18px;
  letter-spacing: 2px;
  color: #FFFFFF;
  font-family: 'Courier New', monospace;
}

.card-expiry {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 4px;
}

.card-actions {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}

.btn-primary {
  flex: 1;
  padding: 12px 24px;
  background: #6C5DD3;
  border: none;
  border-radius: 12px;
  color: #FFFFFF;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary:hover {
  background: #5B4CCC;
  transform: translateY(-2px);
}

.btn-secondary {
  flex: 1;
  padding: 12px 24px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: #FFFFFF;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.05);
}
```

### Card Number Masking Logic
```typescript
get maskedCardNumber(): string {
  const cardNumber = this.cardData.cardNumber;
  return `${cardNumber.slice(0, 4)} ${cardNumber.slice(4, 8)} ${cardNumber.slice(8, 12)} ${cardNumber.slice(12)}`;
}
```

---

## 6. TRANSACTION LIST COMPONENT

### Container Dimensions
- **Width:** 100%
- **Height:** 400px (with scroll)
- **Padding:** 24px
- **Border-radius:** 16px
- **Background:** `#22273B`

### Component Structure
```html
<div class="transaction-widget">
  <div class="transaction-header">
    <h3>Transaction</h3>
    <div class="transaction-filters">
      <div class="search-box">
        <lucide-icon name="search"></lucide-icon>
        <input placeholder="Search for anything..." [(ngModel)]="searchQuery" />
      </div>
      <select class="date-filter">
        <option>18 Mar - 20 May</option>
      </select>
    </div>
  </div>
  
  <div class="transaction-table">
    <div class="table-header">
      <div class="col-name">Name</div>
      <div class="col-date">Date</div>
      <div class="col-amount">Amount</div>
      <div class="col-status">Status</div>
    </div>
    
    <div class="table-body">
      <div class="transaction-row" *ngFor="let transaction of transactions">
        <div class="col-name">
          <img [src]="transaction.logo" alt="" class="company-logo" />
          <span>{{ transaction.name }}</span>
        </div>
        <div class="col-date">{{ transaction.date | date:'short' }}</div>
        <div class="col-amount">{{ transaction.amount | currency }}</div>
        <div class="col-status">
          <span class="status-badge" [ngClass]="transaction.status">
            {{ transaction.status }}
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Styling
```css
.transaction-table {
  margin-top: 20px;
}

.table-header {
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1fr;
  gap: 16px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  font-size: 12px;
  color: #8E92BC;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.table-body {
  max-height: 260px;
  overflow-y: auto;
}

.transaction-row {
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1fr;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  align-items: center;
  transition: background 0.2s;
}

.transaction-row:hover {
  background: rgba(255, 255, 255, 0.02);
}

.col-name {
  display: flex;
  align-items: center;
  gap: 12px;
}

.company-logo {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  padding: 4px;
}

.status-badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
}

.status-badge.completed {
  background: rgba(0, 217, 165, 0.1);
  color: #00D9A5;
}

.status-badge.pending {
  background: rgba(255, 184, 0, 0.1);
  color: #FFB800;
}

.status-badge.failed {
  background: rgba(255, 107, 107, 0.1);
  color: #FF6B6B;
}
```

---

## 7. ACTIVITY CHART COMPONENT

### Container Dimensions
- **Width:** 100%
- **Height:** 360px
- **Padding:** 24px
- **Border-radius:** 16px
- **Background:** `#22273B`

### ApexCharts Configuration
```typescript
activityChartOptions: ApexOptions = {
  chart: {
    type: 'donut',
    height: 240,
    background: 'transparent',
  },
  colors: ['#6C5DD3', '#4ECDC4'],
  series: [55, 20],
  labels: ['Daily payment', 'Hobby'],
  plotOptions: {
    pie: {
      donut: {
        size: '70%',
        labels: {
          show: true,
          name: { show: false },
          value: {
            show: true,
            fontSize: '32px',
            fontWeight: 700,
            color: '#FFFFFF',
            formatter: () => '75%',
          },
        },
      },
    },
  },
  dataLabels: { enabled: false },
  legend: {
    show: true,
    position: 'bottom',
    labels: { colors: '#8E92BC' },
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    markers: {
      width: 12,
      height: 12,
      radius: 4,
    },
  },
  stroke: {
    show: false,
  },
};
```

### Component Structure
```html
<div class="activity-widget">
  <div class="activity-header">
    <h3>Activity</h3>
    <select class="month-select">
      <option>Month</option>
    </select>
  </div>
  
  <div class="activity-chart">
    <apx-chart
      [series]="activityChartOptions.series"
      [chart]="activityChartOptions.chart"
      [colors]="activityChartOptions.colors"
      [labels]="activityChartOptions.labels"
      [plotOptions]="activityChartOptions.plotOptions"
      [legend]="activityChartOptions.legend"
    ></apx-chart>
  </div>
  
  <button class="view-all-btn">
    View all activity
    <lucide-icon name="arrow-right"></lucide-icon>
  </button>
</div>
```

---

## 📱 RESPONSIVE BREAKPOINTS

### Desktop (1440px+)
- 3-column grid for main content
- Sidebar: 280px
- All components full size

### Tablet (768px - 1439px)
- 2-column grid
- Sidebar: Collapsed to icons only (80px)
- Charts stack vertically

### Mobile (< 768px)
- 1-column grid
- Sidebar: Hidden with hamburger menu
- All components full width
- Header becomes sticky

### Grid Layout
```css
.dashboard-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 1439px) {
  .dashboard-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}
```

---

**This spec document covers all major components in pixel-perfect detail. Use this as your implementation reference! 🎯**
