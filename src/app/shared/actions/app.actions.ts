export class SetUser {
  static readonly type = '[APP] Set User Id to State';
  constructor(public payload: string) {}
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
