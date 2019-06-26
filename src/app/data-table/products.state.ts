import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Product, ProductList } from './products.model';
import { LoadToState, AddSupplier, RemoveSupplier } from './products.actions';
import { ProductService } from './services/product.service';
import { tap } from 'rxjs/operators';

@State<Product>({
  name: 'product',
  defaults: {
    id: -1,
    name: '',
    code: '',
    price: 0,
    description: '',
    suppliers: [],
  }
})
export class ProductState {
  constructor(private productService: ProductService) {}

  @Selector()
  static LoadFromState(state: Product) {
    return state;
  }

  @Action(LoadToState)
  CreateProduct(
    { setState, patchState }: StateContext<Product>,
    { payload }: LoadToState
  ) {
    patchState({
      id: payload.id,
      name: payload.name,
      code: payload.code,
      price: payload.price,
      description: payload.description,
      suppliers: payload.suppliers,
      status: payload.status
    });
  }
  @Selector()
  static getSupplier(state: Product) {
    return state.suppliers;
  }

  @Action(AddSupplier)
  AddSupplier(
    context,
    { getState, patchState }: StateContext<Product>,
    { payload }: AddSupplier
  ) {
    const current = getState().suppliers;
    const supplier = [...current, payload];
    context.patchState({
      supplier
    });
  }
  @Action(RemoveSupplier)
  RemoveSupplier(
    context,
    { getState, patchState }: StateContext<Product>,
    { payload }: RemoveSupplier
  ) {
    patchState({
      suppliers: getState().suppliers.filter(supplier => supplier !== payload)
    });
  }
}
