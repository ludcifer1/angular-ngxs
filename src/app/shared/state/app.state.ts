import { Store, Action, StateContext, State, Selector } from '@ngxs/store';

import { OrderService } from '../services/order.service';
import { tap } from 'rxjs/operators';
import { App } from './../models/app.interface';
import { GetOrderList, GetOrder } from '../actions/app.actions';

export const getAppInitState = (): App => ({
  orderList: []
});

@State<App>({
  name: 'app',
  defaults: getAppInitState()
})
export class AppState {
  constructor(private orderService: OrderService) {}

  @Selector()
  static orderList(state: App) {
    return state.orderList;
  }

  @Action(GetOrderList)
  async getOrderList(context: StateContext<App>, action: GetOrderList) {
    try {
      const orderList = await this.orderService.getAllOrders().toPromise();
      const state = context.getState();

      context.setState({
        ...state,
        orderList
      });
    } catch {}
  }
}
