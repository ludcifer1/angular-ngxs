export class LoadToState {
  static readonly type = '[product] load product to';
  constructor(public payload: any) {}
}
export class UpdateProduct {
  static readonly type = '[product] create product';
  constructor(public payload: any) {}
}
export class DeleteProduct {
  static readonly type = '[product] create product';
  constructor(public payload: any) {}
}

export class AddSupplier {
  static readonly type = '[product] add supplier';
  constructor(public payload: any) {}
}
export class RemoveSupplier {
  static readonly type = '[product] remove supplier';
  constructor(public payload: any) {}
}
