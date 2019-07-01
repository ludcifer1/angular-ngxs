import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { OrderState } from './shared/store/order.state';
import { FakeDataService } from './shared/_server/fakeDb.service';
import { OrderService } from './shared/services/order.service';

const routes: Routes = [
  {
    path: 'list',
    component: OrderListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    // NGXS
    RouterModule.forChild(routes),
    NgxsModule.forFeature([OrderState])
  ],
  declarations: [OrderListComponent, OrderDetailComponent],
  providers: [FakeDataService, OrderService]
})
export class OrdersModule {}
