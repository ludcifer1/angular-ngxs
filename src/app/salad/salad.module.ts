import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaladRoutingModule } from './salad-routing.module';
import { SaladPageComponent } from './salad-page/salad-page.component';
import { ToppingListComponent } from './topping-list/topping-list.component';
import { RouterModule, Routes } from '@angular/router';
// NGXS
import { NgxsModule } from '@ngxs/store';
const routes: Routes = [{ path: 'order', component: SaladPageComponent }];

@NgModule({
  imports: [
    CommonModule,
    SaladRoutingModule,
    // NGXS
    RouterModule.forChild(routes)
  ],
  declarations: [SaladPageComponent, ToppingListComponent]
})
export class SaladModule {}
