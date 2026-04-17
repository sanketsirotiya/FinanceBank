export interface ChartDataSeries {
  name: string;
  data: number[];
}

export interface ChartConfig {
  series: ChartDataSeries[];
  categories: string[];
  colors: string[];
}
