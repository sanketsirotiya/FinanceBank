export interface Transaction {
  id: string;
  companyName: string;
  companyLogo: string;
  date: Date;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
}
