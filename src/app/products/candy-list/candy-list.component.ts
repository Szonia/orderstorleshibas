import { Component } from '@angular/core';
import { ProductlistService } from '../../productlist.service';

@Component({
  selector: 'app-candy-list',
  templateUrl: './candy-list.component.html',
  styleUrl: './candy-list.component.css'
})
export class CandyListComponent {
  candies:any
  
  constructor(private prodServ:ProductlistService){
    this.prodServ.getProducts().subscribe(
      (res)=>this.candies=res
    )

  }
}
