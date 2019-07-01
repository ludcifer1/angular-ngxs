export class GetOrderList {
  static readonly type = '[ORDERS] Get Order List';
  constructor() {}
}
export class GetOrder {
  static readonly type = '[ORDER] Get Order Detail';
  constructor() {}
}
export class SetOrder {
  static readonly type = '[ORDER] Set Order Detail';
  constructor(public payload: any) {}
}
