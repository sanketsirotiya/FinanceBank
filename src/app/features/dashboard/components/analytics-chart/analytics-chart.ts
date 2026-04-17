import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexChart, ApexAxisChartSeries, ApexXAxis, ApexYAxis,
  ApexFill, ApexStroke, ApexGrid, ApexTooltip, ApexDataLabels, ApexLegend, ApexPlotOptions
} from 'ng-apexcharts';

@Component({
  selector: 'app-analytics-chart',
  imports: [NgApexchartsModule, FormsModule],
  templateUrl: './analytics-chart.html',
  styleUrl: './analytics-chart.css',
})
export class AnalyticsChart {
  selectedYear = '2020';

  series: ApexAxisChartSeries = [
    { name: 'Income', data: [40000, 50000, 45000, 60000, 55000, 70000, 65000, 75000] },
    { name: 'Outcome', data: [35000, 48000, 42000, 55000, 50000, 65000, 60000, 70000] }
  ];

  chart: ApexChart = {
    type: 'bar',
    height: 280,
    background: 'transparent',
    toolbar: { show: false },
    fontFamily: 'Inter, sans-serif',
  };

  plotOptions: ApexPlotOptions = {
    bar: { columnWidth: '55%', borderRadius: 4 }
  };

  colors = ['#6C5DD3', '#4ECDC4'];

  fill: ApexFill = { type: 'solid' };

  stroke: ApexStroke = { show: false };

  xaxis: ApexXAxis = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    labels: { style: { colors: '#8E92BC', fontSize: '12px' } },
    axisBorder: { show: false },
    axisTicks: { show: false },
  };

  yaxis: ApexYAxis = {
    labels: {
      style: { colors: '#8E92BC', fontSize: '12px' },
      formatter: (v: number) => `${v / 1000}K`
    }
  };

  grid: ApexGrid = {
    borderColor: 'rgba(255,255,255,0.05)',
    strokeDashArray: 4,
    xaxis: { lines: { show: false } }
  };

  tooltip: ApexTooltip = {
    theme: 'dark',
    y: { formatter: (v: number) => `$${v.toLocaleString()}` }
  };

  dataLabels: ApexDataLabels = { enabled: false };

  legend: ApexLegend = { show: false };
}
