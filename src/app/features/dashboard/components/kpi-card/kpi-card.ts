import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { KpiCardData } from '../../../../core/models/kpi.model';

@Component({
  selector: 'app-kpi-card',
  imports: [CurrencyPipe, LucideAngularModule],
  templateUrl: './kpi-card.html',
  styleUrl: './kpi-card.css',
})
export class KpiCard {
  @Input() data!: KpiCardData;
}
