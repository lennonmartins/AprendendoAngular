import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  onSubmit(){
    this.items = this.cartService.clearCart()
    console.warn('Seu pedido foi enviado!', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
