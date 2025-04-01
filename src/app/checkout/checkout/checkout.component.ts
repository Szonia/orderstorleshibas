import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartService } from '../../services/cart/cart.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';  // Router importálása

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  order = {
    lastName: '',
    firstName: '',
    postalCode: '',
    city: '',
    street: '',
    houseNumber: '',
    email: '',
    phoneNumber: '',
  };

  isSubmitting = false;
  successMessage: string | null = null;
  orderTotal: number | null = null;
  paymentType: string = 'Készpénzes fizetés';

  cartItems: any[] = [];
  user: any;

  constructor(private cartService: CartService, private authService: AuthService, private router: Router) {}  // Router injektálása

  ngOnInit(): void {
    this.loadCartItems();
    this.getUserEmail();
  }

  loadCartItems() {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.orderTotal = this.cartService.getTotalPrice();
  }

  getUserEmail() {
    this.authService.getCurrentUser().subscribe((user) => {
      this.user = user;
      if (this.user && this.user.email) {
        this.order.email = this.user.email;
      }
    });
  }

  submitOrder(orderForm: NgForm) {
    if (orderForm.valid) {
      this.isSubmitting = true;

      this.cartService.addOrder({
        ...this.order,
        total: this.orderTotal,
        paymentType: this.paymentType,
      });

      this.successMessage = 'A rendelés sikeresen leadva!';

      // 3 másodperces várakozás után navigálunk a főoldalra
      setTimeout(() => {
        this.isSubmitting = false;
        orderForm.resetForm();  // A rendelési form resetelése
        this.router.navigate(['/']);  // Visszairányítás a főoldalra
      }, 3000);  // 3 másodperc

      this.cartService.clearCart();
      this.clearFields();
    }
  }

  clearFields() {
    this.orderTotal = null;
    this.paymentType = 'Készpénzes fizetés';
  }
}













// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { CartService } from '../../services/cart/cart.service';
// import { AuthService } from '../../services/auth/auth.service';

// @Component({
//   selector: 'app-checkout',
//   templateUrl: './checkout.component.html',
//   styleUrls: ['./checkout.component.css']
// })
// export class CheckoutComponent {
//   order: any = {};
//   isSubmitting = false;
//   successMessage: string | null = null;
//   user:any
//   constructor(private router:Router, private cartServ:CartService,private auth:AuthService){
//     this.auth.getCurrentUser().subscribe(
//       (u)=>{
//         this.user=u
//         this.order.email=this.user.email
//         console.log("user", this.user)
//       }
//     )
//   }

//   submitOrder(form: any) {
    
//     if (form.valid && !this.isSubmitting) {
//       this.isSubmitting = true;
//       this.order.Uid=this.user.uid
//       this.cartServ.addOrder(this.order)
//       console.log("Order:",this.order)
//       console.log("User:",this.user)
//       this.successMessage = 'Rendelés sikeresen leadva!';

//       setTimeout(() => {
//         this.isSubmitting = false; 
//         form.resetForm(); 
//         this.router.navigate(["/"])
        
//       }, 4000);
//     }
//   }
// }





