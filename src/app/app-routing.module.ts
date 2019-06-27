import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'salad',
  //   loadChildren: () => import('./salad/salad.module').then(m => m.SaladModule)
  // },
  // {
  //   path: 'data',
  //   loadChildren: () =>
  //     import('./data-table/data-table.module').then(m => m.DataTableModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
