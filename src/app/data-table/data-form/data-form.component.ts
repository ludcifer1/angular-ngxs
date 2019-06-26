import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductState } from '../products.state';
import { Store, Select } from '@ngxs/store';
import { SaladState } from 'src/app/salad/salad.state';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {
  @Select() product$;
  @Select(ProductState.getSupplier) supplier$;

  constructor(private store: Store) {

  }

  ngOnInit() {}
}
