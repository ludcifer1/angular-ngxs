import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductState } from '../products.state';
import { Store, Select } from '@ngxs/store';
import { SaladState } from 'src/app/salad/salad.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {
  @Select(state => state.product) product$;
  productForm: FormGroup;

  constructor(
    private store: Store,
    private _fb: FormBuilder,
    private productSerice: ProductService
  ) {
    this.productForm = this._fb.group({
      name: ['', Validators.required],
      code: [null, Validators.required],
      price: [null, Validators.required],
      description: ['']
    });
    if (this.product$) {
      this.product$.subscribe(res => {
        this.productForm.patchValue(res);
      });
    }
  }

  ngOnInit() {}
  submitForm() {
    this.productSerice.postProduct(this.productForm.value).subscribe(res => {
      console.log('res', res);
    });
    console.log('submit form', this.productForm.value);
  }

}
