import { Store, Action, StateContext, State, Selector } from '@ngxs/store';

import { OrderService } from '../../modules/orders/shared/services/order.service';
import { tap } from 'rxjs/operators';
import { App } from './../models/app.interface';
import { GetOrder, SetUser } from '../actions/app.actions';

export const getAppInitState = (): any => ({
  id: null
});

export interface User {
  id: string;
  password: string;
}

@State<User>({
  name: 'user',
  defaults: getAppInitState()
})
export class AppState {
  constructor(private orderService: OrderService) {}

  @Selector()
  static userID(state: User) {
    return state.id;
  }

  @Action(SetUser)
  setUser({ patchState }: StateContext<User>, { payload }: SetUser) {
    patchState({ id: payload });
  }
}
