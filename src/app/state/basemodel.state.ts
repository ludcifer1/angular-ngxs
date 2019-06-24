import { State, Action, StateContext, Selector } from '@ngxs/store';
import { BaseModel } from './../models/basemodel.model';
import { AddBaseModel, RemoveBaseModel } from './../actions/basemodel.actions';

export class BaseModelStateModel {
  baseModels: BaseModel[];
}

@State<BaseModelStateModel>({
  name: 'baseModels',
  defaults: {
    baseModels: []
  }
})
export class BaseModelState {
  @Selector()
  static getBaseModels(state: BaseModelStateModel) {
    return state.baseModels;
  }

  @Action(AddBaseModel)
  add(
    { getState, patchState }: StateContext<BaseModelStateModel>,
    { payload }: AddBaseModel
  ) {
    const state = getState();
    patchState({
      baseModels: [...state.baseModels, payload]
    });
  }

  @Action(RemoveBaseModel)
  remove(
    { getState, patchState }: StateContext<BaseModelStateModel>,
    { payload }: RemoveBaseModel
  ) {
    patchState({
      baseModels: getState().baseModels.filter(a => a.name !== payload)
    });
  }
}
