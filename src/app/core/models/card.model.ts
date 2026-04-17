export interface CreditCard {
  id: string;
  cardNumber: string;
  balance: number;
  cardType: 'mastercard' | 'visa';
  expiryDate: string;
  holderName: string;
}
