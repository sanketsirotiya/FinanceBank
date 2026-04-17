import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { DashboardService } from '../../../../core/services/dashboard';
import { CreditCard } from '../../../../core/models/card.model';

@Component({
  selector: 'app-my-card',
  imports: [CurrencyPipe],
  templateUrl: './my-card.html',
  styleUrl: './my-card.css',
})
export class MyCard implements OnInit {
  card!: CreditCard;
  totalBalance = 0;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.card = this.dashboardService.getCard();
    this.totalBalance = this.dashboardService.getTotalBalance();
  }

  get maskedCardNumber(): string {
    const n = this.card.cardNumber;
    return `${n.slice(0, 4)} ${n.slice(4, 8)} ${n.slice(8, 12)} ${n.slice(12)}`;
  }
}
