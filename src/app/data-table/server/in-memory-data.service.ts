import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Product } from '../products.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products: Product[] = [
      {
        id: 1,
        name: 'Coca',
        code: 'CCCL0011',
        price: 9000,
        status: 'pending'
      },
      {
        id: 2,
        name: 'Pepsi',
        code: 'PPPS0011',
        price: 9500,
        status: 'pending'
      }
    ];
    return { products };
  }
}
