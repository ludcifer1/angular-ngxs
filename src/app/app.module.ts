import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';
// OPT
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AppRoutingModule } from './app-routing.module';
import { AppState } from './shared/state/app.state';
import { RouterState } from './shared/state/router.state';
import { OrderService } from './shared/services/order.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

    //
    // NGXS
    NgxsModule.forRoot([RouterState, AppState]),

    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {}
