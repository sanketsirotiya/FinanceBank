import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { LucideAngularModule, LayoutDashboard, BarChart2, Wallet, Users, Settings, Shield, HelpCircle, Moon, ChevronDown, Search, TrendingUp, TrendingDown, ArrowDownLeft, ArrowUpRight, ArrowRight, CreditCard } from 'lucide-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(LucideAngularModule.pick({
      LayoutDashboard, BarChart2, Wallet, Users, Settings,
      Shield, HelpCircle, Moon, ChevronDown, Search,
      TrendingUp, TrendingDown, ArrowDownLeft, ArrowUpRight, ArrowRight, CreditCard
    }))
  ]
};
