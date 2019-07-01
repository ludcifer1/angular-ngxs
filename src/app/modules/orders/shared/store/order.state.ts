import { Order } from '../models/order.model';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { OrderService } from 'src/app/modules/orders/shared/services/order.service';
import { GetOrderList, SetOrder } from './order.action';

export const getOrderInitState = (): OrderStateModel => ({
  orderList: [],
  orderDetail: null
});
export interface OrderStateModel {
  orderList: any[];
  orderDetail: any;
}
@State<OrderStateModel>({
  name: 'orderState',
  defaults: getOrderInitState()
})
export class OrderState {
  constructor(private orderService: OrderService) {}

  @Selector()
  static orderList(state: OrderStateModel) {
    return state.orderList;
  }
  @Selector()
  static orderDetail(state: OrderStateModel) {
    return state.orderDetail;
  }

  @Action(GetOrderList)
  async getOrderList(
    context: StateContext<OrderStateModel>,
    action: GetOrderList
  ) {
    try {
      const orderList = await this.orderService.getAllOrders().toPromise();
      const state = context.getState();

      context.setState({
        ...state,
        orderList
      });
    } catch {}
  }

  @Action(SetOrder)
  SetOrder(
    { patchState }: StateContext<OrderStateModel>,
    { payload }: SetOrder
  ) {
    patchState({
      orderDetail: payload
    });
  }
}
