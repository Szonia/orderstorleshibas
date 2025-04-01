
import { Component } from '@angular/core';
import { ProductlistService } from '../productlist.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  products: any[] = [];
  newProduct:any={}
  searchText=""

  columns= [ "category", "description", "name", "picture", "price", "quantity" ]

  constructor(private pserv: ProductlistService, private cartServ: CartService) {
    this.pserv.getProducts().subscribe(
      (termekek) => this.products = termekek
    );
  }

  addProduct() {
    this.pserv.pushProduct(this.newProduct);
    this.newProduct={}
  }

  sortProducts(order: string) {
    if (order === 'low-to-high') {
      this.products.sort((a, b) => a.ar - b.ar);
    } else if (order === 'high-to-low') {
      this.products.sort((a, b) => b.ar - a.ar);
    }
  }


  editProduct(product:any){
    console.log(product)
    this.pserv.updateProduct(product)
  }
  deleteProduct(product:any){
    this.pserv.deleteProduct(product)
  }
}
