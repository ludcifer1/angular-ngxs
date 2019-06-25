import { Store, Action, StateContext, State } from '@ngxs/store';
import { SetUserName } from './../actions/app.actions';

export interface AppStateModel {
  username: string;
  orderId: number;
  status?: 'pending' | 'confirmed' | 'declined';
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    username: '',
    orderId: Math.floor(Math.random() * 2300)
  }
})
export class AppState {
  @Action(SetUserName)
  SetUserName(
    { patchState }: StateContext<AppStateModel>,
    { payload }: SetUserName
  ) {
    patchState({ username: payload });
  }
}
