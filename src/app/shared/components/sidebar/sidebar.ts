import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  isDarkMode = true;

  menuItems = [
    { label: 'Dashboard', icon: 'layout-dashboard', route: '/dashboard' },
    { label: 'Analytics', icon: 'bar-chart-2', route: '/analytics' },
    { label: 'My Wallet', icon: 'wallet', route: '/wallet' },
    { label: 'Accounts', icon: 'users', route: '/accounts' },
    { label: 'Settings', icon: 'settings', route: '/settings' },
  ];
}
