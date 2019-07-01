import { Component, OnInit } from '@angular/core';
import { OrderState } from '../../shared/store/order.state';
import { Observable } from 'rxjs';
import { OrderModel } from 'src/app/shared/models/app.interface';
import { Select, Store } from '@ngxs/store';
import { GetOrderList, SetOrder } from '../../shared/store/order.action';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  @Select(OrderState.orderList) orders$: Observable<OrderModel[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    const isListPopulated = this.store.selectSnapshot<OrderModel>(
      x => x.orderState.orderList.length
    );
    if (!isListPopulated) {
      console.log('>>> Nodata so fetch');
      this.store.dispatch(new GetOrderList());
    }
  }

  loadDetail(order: any) {
    this.store.dispatch(new SetOrder(order));
  }
}
