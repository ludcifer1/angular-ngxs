import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { SaladState } from '../salad.state';
import { StartOver, RemoveTopping } from '../salad.actions';

@Component({
  selector: 'app-salad-page',
  templateUrl: './salad-page.component.html',
  styleUrls: ['./salad-page.component.scss']
})
export class SaladPageComponent implements OnInit {
  @Select() salad$;
  @Select(SaladState.getDressing) dressing$;
  @Select(state => state.salad.price) price$;

  constructor(private store: Store) {}

  ngOnInit() {}

  startOver() {
    this.store.dispatch(new StartOver());
  }
  removeTopping(name: string) {
    this.store.dispatch(new RemoveTopping(name));
  }
}
