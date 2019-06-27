import { Product } from '../products.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private productUrl = 'api/products';
  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }
  postProduct(product: Product): Observable<any> {
    return this.http.post(this.productUrl, product);
  }
}
