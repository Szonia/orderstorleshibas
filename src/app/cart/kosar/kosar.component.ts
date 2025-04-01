import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-kosar',
  templateUrl: './kosar.component.html',
  styleUrls: ['./kosar.component.css']
})
export class KosarComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService, private router:Router) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems().map(item => ({ ...item }));
    console.log('valami', this.cartItems);
    this.calculateTotalPrice();
  }

  removeFromCart(productId: string) {
    this.cartService.removeFromCart(productId);
    this.loadCart(); 
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price * item.mennyiseg, 0);
  }

  goCheckOut(){
    this.router.navigate(['/checkout'])
  }
}




