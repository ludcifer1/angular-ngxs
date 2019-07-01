import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { OrderState } from '../../shared/store/order.state';
import { Observable } from 'rxjs';
import { Order } from '../../shared/models/order.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  @Select(OrderState.orderDetail) order$: Observable<Order>;

  constructor(private store: Store) {}

  ngOnInit() {}
}
