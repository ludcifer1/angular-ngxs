export interface App {
  orderList: OrderModel[];
}

export interface OrderModel {
  name: string;
  code: string;
  value: number;
  products: Product[];
}

export interface Product {
  name: string;
  quantity?: number;
}
