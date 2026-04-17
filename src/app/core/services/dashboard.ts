import { Injectable } from '@angular/core';
import { KpiCardData } from '../models/kpi.model';
import { CreditCard } from '../models/card.model';
import { Transaction } from '../models/transaction.model';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  getKpiCards(): KpiCardData[] {
    return [
      {
        label: 'Total Income',
        value: 632000,
        percentageChange: 1.29,
        isPositive: true,
        icon: 'arrow-down-left',
        iconBackground: 'rgba(78, 205, 196, 0.2)'
      },
      {
        label: 'Total Outcome',
        value: 632000,
        percentageChange: 1.29,
        isPositive: false,
        icon: 'arrow-up-right',
        iconBackground: 'rgba(255, 107, 107, 0.2)'
      }
    ];
  }

  getCard(): CreditCard {
    return {
      id: '1',
      cardNumber: '5282345678901289',
      balance: 5750.20,
      cardType: 'mastercard',
      expiryDate: '09/25',
      holderName: 'Sanket Sirotiya'
    };
  }

  getTotalBalance(): number {
    return 15595.015;
  }

  getTransactions(): Transaction[] {
    return [
      {
        id: '1',
        companyName: 'Adobe After Effect',
        companyLogo: '',
        date: new Date('2020-04-20'),
        amount: 80.09,
        status: 'completed'
      },
      {
        id: '2',
        companyName: "Mcdonald's",
        companyLogo: '',
        date: new Date('2020-04-19'),
        amount: 7.03,
        status: 'completed'
      },
      {
        id: '3',
        companyName: "Levi's",
        companyLogo: '',
        date: new Date('2020-04-19'),
        amount: 30.09,
        status: 'completed'
      }
    ];
  }
}
