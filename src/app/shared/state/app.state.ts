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
  userId: number;
  status?: 'pending' | 'confirmed' | 'declined';
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    username: '',
    userId: Math.floor(Math.random() * 2300)
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

}
