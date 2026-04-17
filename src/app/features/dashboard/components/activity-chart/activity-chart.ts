import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LucideAngularModule } from 'lucide-angular';
import {
  ApexChart, ApexNonAxisChartSeries, ApexPlotOptions,
  ApexFill, ApexStroke, ApexLegend, ApexDataLabels
} from 'ng-apexcharts';

@Component({
  selector: 'app-activity-chart',
  imports: [NgApexchartsModule, LucideAngularModule],
  templateUrl: './activity-chart.html',
  styleUrl: './activity-chart.css',
})
export class ActivityChart {
  series: ApexNonAxisChartSeries = [75];

  chart: ApexChart = {
    type: 'radialBar',
    height: 220,
    background: 'transparent',
    toolbar: { show: false },
    fontFamily: 'Inter, sans-serif',
  };

  plotOptions: ApexPlotOptions = {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      hollow: { size: '60%' },
      track: { background: '#2A2F45', strokeWidth: '100%' },
      dataLabels: {
        name: { show: false },
        value: {
          fontSize: '28px',
          fontWeight: '700',
          color: '#FFFFFF',
          offsetY: 8,
          formatter: () => '75%'
        }
      }
    }
  };

  fill: ApexFill = {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      gradientToColors: ['#4ECDC4'],
      stops: [0, 100]
    }
  };

  stroke: ApexStroke = { lineCap: 'round' };
  colors = ['#6C5DD3'];
  dataLabels: ApexDataLabels = { enabled: false };
  legend: ApexLegend = { show: false };
}
