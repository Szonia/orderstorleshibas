import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-candies',
  templateUrl: './candies.component.html',
  styleUrls: ['./candies.component.css']
})
export class CandiesComponent {

  @Input() candies: any;
  showNotification = false;
  searchText=""
  order=""

  constructor(private cartService: CartService, private cdr:ChangeDetectorRef, private searchServ:SearchService) {
    
    this.searchServ.getSearch().subscribe(
      (text:any)=>{
        console.log("Frissítés", text)
        this.searchText=text
        console.log("this.searchText", this.searchText)
      }
    )

  }

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
    this.order=order

    // if (order === 'high-to-low') {
    //   this.candies.sort((a: { price: number; }, b: { price: number; }) => b.price - a.price);  
    // } else if (order === 'low-to-high') {
    //   this.candies.sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);  
    // }
  }
  

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}




// // candies.component.ts
// import { ChangeDetectorRef, Component, Input } from '@angular/core';
// import { CartService } from '../../services/cart/cart.service';

// @Component({
//   selector: 'app-candies',
//   templateUrl: './candies.component.html',
//   styleUrls: ['./candies.component.css']
// })
// export class CandiesComponent {

//   @Input() candies: any;
//   showNotification = false;

//   constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {}

//   kosarbaRak(candy: any) {

  
//     const termek =candy;
//     this.cartService.addToCart(candy);
//     console.log(candy,` hozzáadva a kosárhoz.`)
//     console.log('Kosár tartalma:', this.cartService.getCartItems());

//     this.showNotification = true;
//     this.cdr.detectChanges();

//     setTimeout(() => {
//       this.showNotification = false;
//       this.cdr.detectChanges();
//       console.log('Értesítés eltüntetve:', this.showNotification);
//     }, 500);
//   }

//   sortProducts(order: string) {
//     if (order === 'low-to-high') {
//       this.candies.sort((a: any, b: any) => a.ar - b.ar);
//     } else if (order === 'high-to-low') {
//       this.candies.sort((a: any, b: any) => b.ar - a.ar);
//     }
//   }

//   scrollToTop() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }
// }



// import { ChangeDetectorRef, Component, Input } from '@angular/core';
// import { CartService } from '../../services/cart/cart.service';


// @Component({
//   selector: 'app-candies',
//   templateUrl: './candies.component.html',
//   styleUrl: './candies.component.css'
// })
// export class CandiesComponent {

// @Input() candies:any
// showNotification = false;

//   constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {}

//   kosarbaRak(i: number) {
//     const termek = this.candies[i];
//     this.cartService.addToCart(termek.id, termek.nev, termek.ar);
//     console.log(`"${termek.nev}" hozzáadva a kosárhoz.`);
//     console.log('Kosár tartalma:', this.cartService.getCartItems());

//     this.showNotification = true;
//     this.cdr.detectChanges();

//     setTimeout(() => {
//       this.showNotification = false;
//       this.cdr.detectChanges();
//       console.log('Értesítés eltüntetve:', this.showNotification);
//     }, 500);
//   }

  
//     sortProducts(order: string) {
//       if (order === 'low-to-high') {
//         this.candies.sort((a:any, b:any) => a.ar - b.ar);
//       } else if (order === 'high-to-low') {
//         this.candies.sort((a:any, b:any) => b.ar - a.ar);
//       }
//     }

//     scrollToTop() {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
// }
