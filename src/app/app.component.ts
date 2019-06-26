import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from './shared/state/app.state';
import { Store, Select } from '@ngxs/store';
import { SetUserName, ConfirmOrder } from './shared/actions/app.actions';
import { Navigate } from './shared/state/router.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  state$: Observable<AppState>;
  // @Select(state => state.app) app$;

  constructor(private store: Store) {
    this.state$ = this.store.select(state => state);
  }

  clickHandler(username) {
    console.log(username);
    this.store.dispatch([
      new SetUserName(username),
      new Navigate('salad/order')
    ]);
  }

  confirm() {
    this.store.dispatch(ConfirmOrder);
  }
}
