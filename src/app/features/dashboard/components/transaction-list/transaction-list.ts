import { Component, OnInit } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { DashboardService } from '../../../../core/services/dashboard';
import { Transaction } from '../../../../core/models/transaction.model';

@Component({
  selector: 'app-transaction-list',
  imports: [DatePipe, TitleCasePipe, FormsModule, LucideAngularModule],
  templateUrl: './transaction-list.html',
  styleUrl: './transaction-list.css',
})
export class TransactionList implements OnInit {
  transactions: Transaction[] = [];
  searchQuery = '';

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.transactions = this.dashboardService.getTransactions();
  }

  get filteredTransactions(): Transaction[] {
    if (!this.searchQuery) return this.transactions;
    return this.transactions.filter(t =>
      t.companyName.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  getInitials(name: string): string {
    return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  }
}
