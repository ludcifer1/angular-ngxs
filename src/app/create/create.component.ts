import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddBaseModel } from './../actions/basemodel.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor(private store: Store) {}
  addBaseModel(name, url) {
    this.store.dispatch(new AddBaseModel({ name: name, url: url }));
  }

  ngOnInit() {}
}
