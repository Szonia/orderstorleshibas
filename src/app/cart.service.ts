import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private kosar: any[] = [];
  private kosarSub = new BehaviorSubject<any[]>([]);

  private productsApi = "https://webshop-X8fcd0-default-rtdb.europe-west1.firebasedatabase.app/megrendelesek.json";

  constructor(private http: HttpClient) {}

  
  getCart(): Observable<any[]> {
    return this.kosarSub.asObservable();
  }
  addProduct(product: any) {
    throw new Error('Method not implemented.');
  }
  
  
  addToCart(product: any) {
    const existingItem = this.kosar.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      if (!product.quantity) product.quantity = 1;
      this.kosar.push(product);
    }
    this.kosarSub.next(this.kosar);  
  }

  
  getCartItems() {
    return this.kosar;
  }

 
  getTotalPrice(): number {
    return this.kosar.reduce((total, item) => total + item.ar * item.quantity, 0);
  }

 
  removeFromCart(productId: string) {
    this.kosar = this.kosar.filter(item => item.id !== productId);
    this.kosarSub.next(this.kosar);  
  }

  
  order() {
    return this.http.post(this.productsApi, this.kosar);
  }
}



// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private kosar: any[] = [];
//   private kosarSub = new BehaviorSubject<any[]>([]);

//   private productsApi = "https://webshop-X8fcd0-default-rtdb.europe-west1.firebasedatabase.app/megrendelesek.json";

//   constructor(private http: HttpClient) { }

//   // Kosár Observable-ként
//   getCart(): Observable<any[]> {
//     return this.kosarSub.asObservable();
//   }

//   // 👉 Verzió 1 – teljes termék objektum hozzáadása
//   addToCart(product: any) {
//     this.kosar.push(product);
//     this.kosarSub.next(this.kosar);
//   }

//   // 👉 Verzió 2 – id, név, ár paraméterekkel
//   addToCartByParams(id: string, nev: string, ar: number) {
//     const product = { id, nev, ar };
//     this.kosar.push(product);
//     this.kosarSub.next(this.kosar);
//   }

//   // Alternatív név, ha így hívod máshol
//   addProduct(product: any) {
//     this.addToCart(product); // ugyanaz mint az első verzió
//   }

//   // Kosár tartalom szinkronban
//   getCartItems() {
//     return this.kosar;
//   }

//   // Megrendelés mentése adatbázisba
//   order() {
//     return this.http.post(this.productsApi, this.kosar);
//   }
// }




  // order(){
  //   let body={
  //     userName:"Noel",
  //     address:"2220 Vecsés Lőrinci út 38.",
  //     order:this.kosar,
  //     status:"Felvéve",
  //     date:Date.now
  //   }

  //   this.http.post(this.productsApi+".json", body).subscribe({
  //     next: (res)=>{
  //       console.log("Megrendelés leadva", res)
  //       this.deleteCart()
  //     },
  //     error:(err)=>console.log(err)
  //   }
  //   )

  // }

  // deleteCart(){
  //   this.kosar=[]
  //   this.kosarSub.next(this.kosar)
  // }

  // getCart(){
  //   return this.kosarSub
  // }

  // addProduct(product:any){
  //   let x= this.kosar.findIndex( (p:any)=>p.id==product.id)
  //   if (x!=-1)  this.kosar[x].db=product.db  
  //   else {
  //     let termek = {...product}
  //     delete termek.leiras
  //     delete termek.keplink
  //     delete termek.mennyiseg
  //     this.kosar.push(termek)
  //   }
  //   this.kosarSub.next(this.kosar)
  // }

