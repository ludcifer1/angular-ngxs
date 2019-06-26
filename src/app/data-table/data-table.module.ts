import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataListComponent } from './data-list/data-list.component';
import { DataFormComponent } from './data-form/data-form.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { NgxsModule } from '@ngxs/store';
import { ProductState } from './products.state';
// FAKE DATA
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './server/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';

const routes: Routes = [{ path: 'table', component: DataListComponent }];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    MatTableModule,
    MatDialogModule,
    MatTabsModule,
    // NGXS
    RouterModule.forChild(routes),
    NgxsModule.forFeature([ProductState])
  ],
  providers: [ProductService],
  declarations: [DataListComponent, DataFormComponent],
  entryComponents: [DataFormComponent]
})
export class DataTableModule {}
