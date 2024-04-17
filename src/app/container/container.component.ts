import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  // name: string = 'John Doe';
  addToCart: number = 0;
  searchText: string = '';


  // Store reference of ProductListComponent
  @ViewChild(ProductListComponent) productListComponentofParent: ProductListComponent;

  product = {
    name: 'iPhone',
    price: 999,
    color: 'Matte Black',
    discount: 8.5,
    inStock: 6,
    url: '/assets/images/apple-iphone-x-pictures-5.png',
  };

  getDiscountedPrice() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }

  decrementCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }

  incrementCartValue() {
    if (this.addToCart < this.product.inStock) {
      this.addToCart++;
    }
  }

  setSearchText(value: string) {
    this.searchText = value;
  }
}
