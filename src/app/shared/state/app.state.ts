import { Store, Action, StateContext, State } from '@ngxs/store';
import {
  SetUserName,
  ConfirmOrder,
  OrderSuccess,
  OrderFailed
} from './../actions/app.actions';
import { OrderService } from '../services/order.service';
import { tap } from 'rxjs/operators';

export interface AppStateModel {
  username: string;
  orderId: number;
  status?: 'pending' | 'confirmed' | 'declined';
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    username: '',
    orderId: Math.floor(Math.random() * 2300)
  }
})
export class AppState {
  constructor(private orderService: OrderService) {}

  @Action(SetUserName)
  SetUserName(
    { patchState }: StateContext<AppStateModel>,
    { payload }: SetUserName
  ) {
    patchState({ username: payload });
  }

  @Action(ConfirmOrder, { cancelUncompleted: true })
  confirm({ dispatch, patchState }: StateContext<AppStateModel>) {
    patchState({ status: 'pending' });
    return this.orderService
      .post()
      .pipe(
        tap(success =>
          success ? dispatch(OrderSuccess) : dispatch(OrderFailed)
        )
      );
  }
  @Action(OrderSuccess)
  orderSuccess({ patchState }: StateContext<AppStateModel>) {
    patchState({ status: 'confirmed' });
  }

  @Action(OrderFailed)
  orderFailed({ patchState }: StateContext<AppStateModel>) {
    patchState({ status: 'declined' });
  }
}
