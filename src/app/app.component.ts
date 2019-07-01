import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Navigate } from './shared/state/router.state';
import { SetUser } from './shared/actions/app.actions';
import { AppState } from './shared/state/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Select(AppState.userID) userId$: Observable<any>;
  currentId = null;

  constructor(private store: Store) {
    this.userId$.subscribe(res => (this.currentId = res));
  }

  ngOnInit(): void {}

  login(id: any, password: any) {
    this.store.dispatch([new SetUser(id.value), new Navigate('orders/list')]);
  }
}
