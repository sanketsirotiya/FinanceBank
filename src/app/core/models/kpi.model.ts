export interface KpiData {
  totalIncome: number;
  totalOutcome: number;
  incomeChange: number;
  outcomeChange: number;
}

export interface KpiCardData {
  label: string;
  value: number;
  percentageChange: number;
  isPositive: boolean;
  icon: string;
  iconBackground: string;
}
