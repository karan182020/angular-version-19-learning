import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone: true
})
export class ProductComponent {

  isStudent: boolean = false;

  products: { id: number, name: string, price: number }[] = [
    { id: 1, name: 'Mobile', price: 100 },
    { id: 2, name: 'Laptop', price: 200 },
    { id: 3, name: 'Tablet', price: 300 },
  ];

  selectedProduct = this.products[0].id;

}
