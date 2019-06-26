import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataFormComponent } from '../data-form/data-form.component';
import { ProductService } from '../services/product.service';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProductState } from '../products.state';
import { CreateProduct, LoadToState } from '../products.actions';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'code', 'price', 'status'];
  dataSource = [];
  product$: Observable<ProductState>;
  constructor(
    public dialog: MatDialog,
    private store: Store,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService
      .getAllProduct()
      .subscribe(res => (this.dataSource = res));
  }

  addProduct() {
    const dialogRef = this.dialog.open(DataFormComponent, {
      width: '800px'
    });
  }
  getProduct(product: any) {
    console.log('product selected ', product);
    this.store.dispatch([new LoadToState(product)]);
    const dialogRef = this.dialog.open(DataFormComponent, {
      width: '800px'
    });
  }
}
