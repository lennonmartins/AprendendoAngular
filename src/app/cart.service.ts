import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private httpcliente: HttpClient
  ){}

  items: Product[] = new Array<Product>();

  addToCart(product : Product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = new Array<Product>();
    return this.items;
  }

  getShippingPrices(){
    return this.httpcliente.get<{type: string, price: number}[]>('/assets/shipping.json');
      // .pipe(map((data) =>{
      //   return data.map((shippingPrice) => ({
      //     type: shippingPrice.type,
      //     price: shippingPrice.price,
      //   }));
      // }));
  }
}
