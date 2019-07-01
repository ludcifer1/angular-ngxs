import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderModel } from '../../../../shared/models/app.interface';
import { Observable } from 'rxjs';

@Injectable()
export class OrderService {
  private URL_ORDERS = 'api/orders';
  private URL_PRODUCTS = 'api/products';

  constructor(private http: HttpClient) {}

  getAllOrders() {
    return this.http.get<OrderModel[]>(this.URL_ORDERS);
  }
  getOrderbyCode(code: string): Observable<OrderModel> {
    return this.http.get<OrderModel>(this.URL_ORDERS + `/${code}`);
  }
}
