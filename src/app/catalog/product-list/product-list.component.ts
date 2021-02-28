import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Product } from '../../product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { BackendService } from '../../backend.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChildren (ProductItemComponent)
  productItems: QueryList<ProductItemComponent>;

  products: Product[];

  constructor(private backendService: BackendService) { 
    this.products = [];
    // this.products.push({
    //   name: 'ส้มโอ',
    //   price: 111
    // });
    // this.products.push({
    //   name: 'แตงโม',
    //   price: 222
    // });
    // this.products.push({
    //   name: 'มะพร้าวน้ำหอม',
    //   price: 333
    // });
  }

  ngOnInit() {
    this.products = this.backendService.getProducts();
  }

  selectedProduct(productComponent: ProductItemComponent) {
    alert(`Product ${productComponent.product.name} selected`);
    this.productItems.forEach(p => {
      p.isSelected = false;
    });
    productComponent.isSelected = true;
  }

}
