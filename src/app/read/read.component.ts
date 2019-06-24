import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { BaseModel } from './../models/basemodel.model';
import {
  BaseModelState,
  BaseModelStateModel
} from './../state/basemodel.state'; // We will use this shortly
import { Observable } from 'rxjs/Observable';
import { RemoveBaseModel } from './../actions/basemodel.actions';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
 // baseModel$: Observable<BaseModel>;
  @Select(BaseModelState.getBaseModels) baseModel$: Observable<BaseModel>;

  constructor(private store: Store) {
    // this.baseModel$ = this.store.select(state => state.baseModel.baseModels);
  }
  delBaseModel(name) {
    this.store.dispatch(new RemoveBaseModel(name));
  }
  ngOnInit() {}
}
