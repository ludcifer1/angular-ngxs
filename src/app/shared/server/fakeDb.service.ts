import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        name: 'Product 1'
      },
      {
        name: 'Product 2'
      },
      {
        name: 'Product 3'
      },
      {
        name: 'Product 4'
      },
      {
        name: 'Product 5'
      }
    ];
    const orders = [
      {
        name: 'Order 1',
        code: 'ORD1',
        value: 200000,
        products: [
          {
            name: 'Product 5',
            quantity: 20
          }
        ]
      },
      {
        name: 'Order 2',
        code: 'ORD2',
        value: 150000,
        products: [
          {
            name: 'Product 3',
            quantity: 12
          },
          {
            name: 'Product 5',
            quantity: 20
          }
        ]
      },
      {
        name: 'Order 3',
        code: 'ORD3',
        value: 200000,
        products: [
          {
            name: 'Product 1',
            quantity: 100
          },
          {
            name: 'Product 2',
            quantity: 35
          },
          {
            name: 'Product 3',
            quantity: 15
          }
        ]
      },
      {
        name: 'Order 4',
        code: 'ORD4',
        value: 200000,
        products: [
          {
            name: 'Product 1',
            quantity: 20
          },
          {
            name: 'Product 2',
            quantity: 20
          }
        ]
      },
      {
        name: 'Order 5',
        code: 'ORD5',
        value: 1400000,
        products: [
          {
            name: 'Product 4',
            quantity: 27
          }
        ]
      }
    ];
    return { products, orders };
  }
}
