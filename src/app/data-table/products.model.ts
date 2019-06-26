export interface Product {
  id: number;
  name: string;
  code: string;
  price: number;
  description?: string;
  status?: 'pending' | 'accepted' | 'declined';
  suppliers?: any[];
}

export interface ProductList {
  productList: Product[];
}
