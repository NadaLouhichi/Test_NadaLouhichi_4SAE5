import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  addProduct(product: Product) {
    product.id = this.products.length + 1;
    product.available = true;
    this.products.push(product);
  }

  getProducts(): Product[] {
    return this.products.filter(product => product.available);
  }

  likeProduct(productId: number, userId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product && !product.likes.includes(userId)) {
      product.likes.push(userId);
    }
  }
}
