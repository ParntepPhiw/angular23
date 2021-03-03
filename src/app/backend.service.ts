import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  products: Product[];
  
  constructor() { }

  getProducts() : Product[] {
    this.products = [];
    this.products.push({
      name: 'ส้มโอ',
      price: 111
    });
    this.products.push({
      name: 'แตงโม',
      price: 222
    });
    this.products.push({
      name: 'มะพร้าวน้ำหอม',
      price: 333
    });
    return this.products;
  }

  getProductById(productId: number) : Product {
    return;
  }
}
