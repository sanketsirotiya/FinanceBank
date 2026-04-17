import { Component, Input } from '@angular/core';
import { NgClass, CurrencyPipe } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { KpiCardData } from '../../../../core/models/kpi.model';

@Component({
  selector: 'app-kpi-card',
  imports: [NgClass, CurrencyPipe, LucideAngularModule],
  templateUrl: './kpi-card.html',
  styleUrl: './kpi-card.css',
})
export class KpiCard {
  @Input() data!: KpiCardData;
}
