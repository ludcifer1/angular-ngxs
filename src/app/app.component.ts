import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from './shared/state/app.state';
import { Store, Select } from '@ngxs/store';
import { Navigate } from './shared/state/router.state';
import { GetOrderList } from './shared/actions/app.actions';
import { App, OrderModel } from './shared/models/app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Select(AppState.orderList) orders$: Observable<OrderModel>;
  dataSource = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    const isListPopulated = this.store.selectSnapshot<App>(
      x => x.app.orderList.length
    );
    if (!isListPopulated) {
      console.log('>>> Nodata so fetch');
      this.store.dispatch(new GetOrderList());
    }
  }
}
