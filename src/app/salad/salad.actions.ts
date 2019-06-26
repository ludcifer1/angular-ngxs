export class AddTopping {
  static readonly type = '[salad] add toppings';
  constructor(public payload: any) {}
}
export class RemoveTopping {
  static readonly type = '[salad] remove toppings';
  constructor(public payload: any) {}
}

export class StartOver {
  static readonly type = '[salad] start over';
}
