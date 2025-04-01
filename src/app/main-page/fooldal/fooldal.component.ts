
import { Component } from '@angular/core';
import { ProductlistService } from '../../productlist.service';

@Component({
  selector: 'app-fooldal',
  templateUrl: './fooldal.component.html',
  styleUrls: ['./fooldal.component.css']
})
export class FooldalComponent {
  products = [
      { id: 1, name: '', image: 'Fanta.png', link: 'http://localhost:4200/fanta'  },
      { id: 2, name: '', image: 'Nerds.png', link: 'http://localhost:4200/nerds'},
      { id: 3, name: '', image: 'SourPatch.png', link: 'http://localhost:4200/sour' },
      { id: 4, name: '', image: 'Prime.png', link: 'http://localhost:4200/prime'},
      { id: 5, name: '', image: 'Bazooka.png', link: 'http://localhost:4200/bazooka' }, 
      { id: 6, name: '', image: 'Skittles.png', link: 'http://localhost:4200/skittles' },
      { id: 7, name: '', image: 'Takis.png', link: 'http://localhost:4200/takis' },
      { id: 8, name: '', image: 'Warheads.png', link: 'http://localhost:4200/warheads' },
      { id: 9, name: '', image: 'Arizona2.png', link: 'http://localhost:4200/arizona' },
      { id: 10, name: '', image: 'Pringles.png', link: 'http://localhost:4200/pringles' },
      { id: 11, name: '', image: 'Cheetos.png', link: 'http://localhost:4200/cheetos' },
      { id: 12, name: '', image: 'Ghost.png', link: 'http://localhost:4200/ghost' },
   ];

   redirectToUrl(url: string) {
    window.location.href = url;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  constructor(private productsServ:ProductlistService){}
}


