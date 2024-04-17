import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Model/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: Product;

  @Input() productListComponentOfChild: ProductListComponent = undefined;

  ngOnInit() {
    this.product = this.productListComponentOfChild.selectedProduct;
  }
}
