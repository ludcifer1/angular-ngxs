export interface Order {
  id: number;
  name: string;
  code: string;
  value: number;
  products?: any[];
  description?: string;
  status?: 'pending' | 'success' | 'reject';
}
