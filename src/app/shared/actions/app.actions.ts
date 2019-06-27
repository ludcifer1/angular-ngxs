
export class GetOrderList {
  static readonly type = '[ORDERS API] Get Orders List';
  constructor() {}
}
export class GetOrderListFail {
  static readonly type = '[ORDERS API] Get Orders List fail';
  constructor() {}
}
export class GetOrder {
  static readonly type = '[ORDER SERVICE] Get one Order';
  constructor() {}
}
export class AddProductToOrder {
  static readonly type = '[PRODUCT] Add Product to Order';
  constructor(public payload: any) {}
}
export class RemoveProductFromOrder {
  static readonly type = '[PRODUCT] Remove Product from Order';
  constructor(public payload: any) {}
}
