import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaladPageComponent } from './salad-page/salad-page.component';
import { ToppingListComponent } from './topping-list/topping-list.component';
import { RouterModule, Routes } from '@angular/router';
// NGXS
import { NgxsModule } from '@ngxs/store';
import { SaladState } from './salad.state';

const routes: Routes = [{ path: 'order', component: SaladPageComponent }];

@NgModule({
  imports: [
    CommonModule,
    // NGXS
    RouterModule.forChild(routes),
    NgxsModule.forFeature([SaladState])
  ],
  declarations: [SaladPageComponent, ToppingListComponent]
})
export class SaladModule {}
