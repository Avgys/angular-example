import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  items : Product[] = [];

  addToCart(product : Product){
    this.items.push(product);
    alert(this.items.length);
  }

  getItems(){
    return this.items;
  }

  clearItems(){
    this.items = [];
    return this.items;
  }
  constructor() { }

}