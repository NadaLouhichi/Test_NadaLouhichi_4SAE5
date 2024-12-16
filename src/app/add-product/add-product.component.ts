import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product = {
    name: '',
    description: '',
    price: 0,
    available: false
  };

  constructor(private productService: ProductService) {}

  onSubmit(form: NgForm) {
    const newProduct = form.value;
    this.productService.addProduct(newProduct);
  }
}
