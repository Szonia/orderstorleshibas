import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart/cart.service';
import { ProductlistService } from '../../productlist.service';

@Component({
  selector: 'app-savanyu-uditok',
  templateUrl: './savanyu-uditok.component.html',
  styleUrls: ['./savanyu-uditok.component.css'],
})

export class SavanyuUditokComponent {

  @Input() candies: any;
  showNotification = false;

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef, private prodServ:ProductlistService) 
  {this.prodServ.getProducts().subscribe(
    (res)=>this.candies=res)}


  kosarbaRak(candy: any, quantity_in: string) {
    const termek = {
      ...candy,       
      picture: candy.picture,
      mennyiseg: parseInt(quantity_in)
    };
    
    this.cartService.addToCart(termek);  
    console.log(candy, `hozzáadva a kosárhoz.`);
    console.log('Kosár tartalma:', this.cartService.getCartItems());

    this.showNotification = true;
    this.cdr.detectChanges();  

    
    setTimeout(() => {
      this.showNotification = false;
      this.cdr.detectChanges();
      console.log('Értesítés eltüntetve:', this.showNotification);
    }, 500);
  }
  sortProducts(order: string) {
    if (order === 'high-to-low') {
      this.candies.sort((a: { price: number; }, b: { price: number; }) => b.price - a.price);  
    } else if (order === 'low-to-high') {
      this.candies.sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);  
    }
  }
  

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}