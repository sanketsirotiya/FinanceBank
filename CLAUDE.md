# Finance Bank Dashboard — Claude Context

## Project
Angular 21 banking dashboard portfolio project. Live at https://finance-bankings.netlify.app.
GitHub: https://github.com/sanketsirotiya/FinanceBank

## Tech Stack
- **Angular 21** — standalone components (no NgModule declarations for components)
- **Tailwind CSS 3** — v3 NOT v4 (v4 was downgraded due to Angular esbuild incompatibility)
- **ng-apexcharts 2.x / apexcharts 5.x** — charts
- **lucide-angular 1.x** — icons via `LucideAngularModule.pick({...})` in `app.config.ts`
- **zone.js** — must be in `angular.json` polyfills array (not installed by default in Angular 21)

## Key Architecture Decisions
- All components are **standalone** — import dependencies directly in the `imports` array
- Lucide icons registered globally in `app.config.ts` via `importProvidersFrom(LucideAngularModule.pick({...}))`
- Templates use Angular 17+ **control flow** (`@for`, `@if`) not structural directives (`*ngFor`, `*ngIf`)
- `NgFor`, `NgIf`, `NgClass` are NOT needed in imports when using `@for`/`@if`/`[class.*]`
- Tailwind uses `@tailwind base/components/utilities` directives (not `@import`)
- `postcss.config.js` exists but is only needed if PostCSS is explicitly invoked

## Known Gotchas
- `zone.js` must be added to `angular.json` polyfills — Angular 21 does not include it by default
- Tailwind v4 breaks with Angular's esbuild auto-detection — stay on v3
- Dates: use `new Date(year, month, day)` (local) not `new Date('YYYY-MM-DD')` (UTC) to avoid timezone offset

## Mock Data
All data is hardcoded in `src/app/core/services/dashboard.ts` — no HTTP calls.
Assets (logos) live in `src/assets/logos/`.

## Owner
Sanket Sirotiya
