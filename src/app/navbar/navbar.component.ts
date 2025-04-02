import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { SearchService } from '../search.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: false
})
export class NavbarComponent {
  cart: any;
  searchQuery: string = ''; 
  searchResult: any[] = [];  
  
  user:any
  
  products = [
    { name: 'Sour patch kids', category: 'Snack' },
    { name: 'Gumicukrok', category: 'Candy' },
    { name: 'Üdítők', category: 'Beverage' },
    { name: 'Sós Chipsek', category: 'Snack' },
    { name: 'Csípős Chipsek', category: 'Snack' },
    
  ];

  constructor(private cartServ: CartService, public searchServ:SearchService, private auth:AuthService) {
    this.cartServ.getCart().subscribe((res: any) => this.cart = res);

    this.auth.getCurrentUser().subscribe(
      (u)=>this.user=u
    )
  }

  setSearch(car:string){
    this.searchServ.setSearch(car)
  }

  addOrder() {
    this.cartServ.order();
    console.log('Kosárba tett egy terméket');
  }

  signOut(){
    this.auth.logout()
  }
  

}
