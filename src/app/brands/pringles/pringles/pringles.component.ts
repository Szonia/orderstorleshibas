import { Component } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { ChangeDetectorRef } from '@angular/core'; 

interface pringles {
  id: string;
  nev: string;
  image: string;
  leiras: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-pringles',
  templateUrl: './pringles.component.html',
  styleUrls: ['./pringles.component.css']
})
export class pringlesComponent {
  pringles: pringles[] = [
    {
      id: '1',
      nev: 'Pringles Texas BBQ Sauce 165g',
      image: './assets/pringles/Pringles Texas BBQ Sauce 165g.jpg',
      leiras: 'A Pringles Texas BBQ Sauce egy csípős paradicsomszósz, fűszerek és füstös barbecue íz kombinációját kínáló chips, amely merész és intenzív ízélményt nyújt a klasszikus Pringles chipsek ropogós textúrájával.',
      ar: 1049,
      darab: 1
    },
    {
      id: '2',
      nev: 'Pringles Paprika 130g',
      image: './assets/pringles/Pringles Paprika 130g.jpg',
      leiras: 'A Pringles Paprika egy pikáns-édeskés, füstös paprika ízű chips, amely ropogós állagával és intenzív fűszerezésével kínál egy karakteres snack élményt, amelyben az édes és paprikás jegyek harmonikusan keverednek.',
      ar: 1049,
      darab: 1
    },
    {
      id: '3',
      nev: 'Pringles Original 165g',
      image: './assets/pringles/Pringles Original 165g.jpg',
      leiras: 'Klasszikus, semleges ízű Pringles, amely az alapvető snackélményt nyújtja.',
      ar: 1699,
      darab: 1
    },
    {
      id: '4',
      nev: 'Pringles Sour Cream & Onion 165g',
      image: './assets/pringles/Pringles Sour Cream & Onion 165g.jpg',
      leiras: 'Észbontóan hagymás-tejfölös ízvilág, amely a Pringles egyik legnépszerűbb ízesítése.',
      ar: 1699,
      darab: 1
    },
    {
      id: '5',
      nev: 'Pringles Hot & Spicy 165g',
      image: './assets/pringles/Pringles Hot & Spicy 165g.jpg',
      leiras: 'Csípős, fűszeres íz, amely azoknak való, akik szeretik a tüzes snackeket.',
      ar: 1699,
      darab: 1
    },
    {
      id: '6',
      nev: 'Pringles Ranch 165g',
      image: './assets/pringles/Pringles Ranch 165g.jpg',
      leiras: 'Krémes, sajtos ízű Pringles, amely a klasszikus ranch mártást idézi.',
      ar: 1699,
      darab: 1
    },
    {
      id: '7',
      nev: 'Pringles Jalapeño 165g',
      image: './assets/pringles/Pringles Jalapeño 165g.jpg',
      leiras: 'Csípős jalapeño ízű Pringles, amely azoknak való, akik szeretik a fűszeres snackeket.',
      ar: 1699,
      darab: 1
    },
    {
      id: '8',
      nev: 'Pringles Pizza 165g',
      image: './assets/pringles/Pringles Pizza 165g.jpg',
      leiras: 'Olasz ízvilágot idéző Pringles, amely a pizza klasszikus ízeit ötvözi.',
      ar: 1699,
      darab: 1
    },
    {
      id: '9',
      nev: 'Fűszeres Pringles Cheddar Cheese 165g',
      image: './assets/pringles/Pringles Cheddar Cheese 165g.jpg',
      leiras: 'Intenzív sajtos ízű Pringles, amely a cheddar sajt rajongóinak való.',
      ar: 1699,
      darab: 1
    },
    {
      id: '10',
      nev: 'Pringles Scorchin Sour Cream & Onion 165g',
      image: './assets/pringles/Pringles Scorchin Sour Cream & Onion 165g.jpg',
      leiras: 'A klasszikus Sour Cream & Onion íz csípősebb változata.',
      ar: 1699,
      darab: 1
    },
    {
      id: '11',
      nev: 'Pringles Loaded Potato Skins 165g',
      image: './assets/pringles/Pringles Loaded Potato Skins 165g.jpg',
      leiras: 'Új, limitált kiadású íz, amely a töltött krumplihéj ízeit idézi, sajttal, vajjal és szalonnás aromával.',
      ar: 1699,
      darab: 1
    }
  ];

  
  showNotification = false;

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {}

  kosarbaRak(i: number) {
    const termek = this.pringles[i];
    this.cartService.addToCart(termek);
    console.log(`"${termek.nev}" hozzáadva a kosárhoz.`);
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
      if (order === 'low-to-high') {
        this.pringles.sort((a, b) => a.ar - b.ar);
      } else if (order === 'high-to-low') {
        this.pringles.sort((a, b) => b.ar - a.ar);
      }
    }

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }