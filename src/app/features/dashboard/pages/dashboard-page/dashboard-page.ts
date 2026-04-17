import { Component, OnInit } from '@angular/core';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { Header } from '../../../../shared/components/header/header';
import { KpiCard } from '../../components/kpi-card/kpi-card';
import { AnalyticsChart } from '../../components/analytics-chart/analytics-chart';
import { MyCard } from '../../components/my-card/my-card';
import { TransactionList } from '../../components/transaction-list/transaction-list';
import { ActivityChart } from '../../components/activity-chart/activity-chart';
import { DashboardService } from '../../../../core/services/dashboard';
import { KpiCardData } from '../../../../core/models/kpi.model';

@Component({
  selector: 'app-dashboard-page',
  imports: [Sidebar, Header, KpiCard, AnalyticsChart, MyCard, TransactionList, ActivityChart],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage implements OnInit {
  kpiCards: KpiCardData[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.kpiCards = this.dashboardService.getKpiCards();
  }
}
