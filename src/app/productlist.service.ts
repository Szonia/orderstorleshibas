import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
 
  private produtctsSub= new BehaviorSubject<any>(null)

  productsRef : AngularFireList<any>

  constructor(private db: AngularFireDatabase) {
    this.productsRef=db.list("products")
   }

   getProducts(){
    return this.productsRef.snapshotChanges().pipe(
      map(
        (changes:any)=>changes.map((c:any)=> ({key:c.payload.key,...c.payload.val() }))
      )
    )
    
   }


   pushProduct(candy:any){  
    this.productsRef.push(candy)
   }
   deleteProduct(candy:any){  
    this.productsRef.remove(candy.key)
   }
  updateProduct(candy:any){
    let key=candy.key
    delete candy.key
    this.productsRef.update(key,candy)
   }



}
