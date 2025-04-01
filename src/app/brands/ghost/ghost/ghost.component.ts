import { Component } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { ChangeDetectorRef } from '@angular/core'; 

interface ghost {
  id: string;
  nev: string;
  image: string;
  leiras: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.css']
})
export class ghostComponent {
  ghost: ghost[] = [
    {
      id: '1',
      nev: 'Ghost Hydration Drink Sour Patch Kids 500ml',
      image: './assets/ghost/Ghost Hydration Drink Sour Patch Kids 500ml.jpg',
      leiras: 'A Ghost Hydration Drink Sour Patch Kids egy egyedi, savanyú cukorkák által inspirált üdítőital, amely ötvözi a Sour Patch Kids cukorkák jellegzetes savanyú-édes ízprofilját egy frissítő és hidratáló formulával.',
      ar: 2990,
      darab: 1
    },
    {
      id: '2',
      nev: 'Ghost Hydration Drink Orange Squeeze 500ml',
      image: './assets/ghost/Ghost Hydration Drink Orange Squeeze 500ml.jpg',
      leiras: 'Frissítő, lédús narancsos íz enyhe savanykás utóízzel.',
      ar: 7411,
      darab: 1
    },
    {
      id: '3',
      nev: 'Ghost Hydration Drink Kiwi Strawberry 500ml',
      image: './assets/ghost/Ghost Hydration Drink Kiwi Strawberry 500ml.jpg',
      leiras: 'Intenzív, édes-savanykás eper íz autentikus kivi aromával kiegészítve.',
      ar: 7411,
      darab: 1
    },
    {
      id: '4',
      nev: 'Ghost Hydration Drink Lemon Lime 500ml',
      image: './assets/ghost/Ghost Hydration Drink Lemon Lime 500ml.jpg',
      leiras: 'Kiegyensúlyozott, üdítő citrom-lime ízkombináció kellemes savanyú beütéssel.',
      ar: 7411,
      darab: 1
    },
    {
      id: '5',
      nev: 'Ghost Hydration Drink Blue Raspberry 500ml',
      image: './assets/ghost/Ghost Hydration Drink Blue Raspberry 500ml.jpg',
      leiras: 'Édes-savanyú kék málna íz, amely a népszerű cukorkát idézi.',
      ar: 7411,
      darab: 1
    },
    {
      id: '6',
      nev: 'Ghost Hydration Drink Lemon Crush 500ml',
      image: './assets/ghost/Ghost Hydration Drink Lemon Crush 500ml.jpg',
      leiras: 'Intenzív citromos íz narancs aromával kiegészítve, frissítő citrusos élményt nyújtva.',
      ar: 7411,
      darab: 1
    },
    {
      id: '7',
      nev: 'Ghost Hydration Drink Tropical Mango 500ml',
      image: './assets/ghost/Ghost Hydration Drink Tropical Mango 500ml.jpg',
      leiras: 'Édeskés mangó íz enyhe ananász és narancs aromával, trópusi hangulatot idézve.',
      ar: 7411,
      darab: 1
    },
    {
      id: '8',
      nev: 'Ghost Hydration Drink Cherry Limeade 500ml',
      image: './assets/ghost/Ghost Hydration Drink Cherry Limeade 500ml.jpg',
      leiras: 'Erőteljes cseresznye íz frissítő lime utóízzel, tökéletes egyensúlyban.',
      ar: 7411,
      darab: 1
    },
    {
      id: '9',
      nev: 'Ghost Hydration Drink Citrus 500ml',
      image: './assets/ghost/Ghost Hydration Drink Citrus 500ml.jpg',
      leiras: 'Frissítő, kiegyensúlyozott citrusfélék keveréke, amely több citrusgyümölcs ízét ötvözi.',
      ar: 7411,
      darab: 1
    },
    {
      id: '10',
      nev: 'Ghost Hydration Drink Orange Cream 500ml',
      image: './assets/ghost/Ghost Hydration Drink Orange Cream 500ml.jpg',
      leiras: 'Krémes, édes narancsos íz vaníliás beütéssel, amely a klasszikus narancskrémes fagylaltra emlékeztet.',
      ar: 7411,
      darab: 1
    },
    {
      id: '11',
      nev: 'Ghost Hydration Drink Sour Pink Lemonade 500ml',
      image: './assets/ghost/Ghost Hydration Drink Sour Pink Lemonade 500ml.jpg',
      leiras: 'Savanykás rózsaszín limonádé íz, frissítő citrusos aromával.',
      ar: 7411,
      darab: 1
    },
    {
      id: '12',
      nev: 'Ghost Energy Drink, Warheads Sour Watermelon 500ml',
      image: './assets/ghost/Ghost Energy Drink, Warheads Sour Watermelon 500ml.jpg',
      leiras: 'Intenzív, savanyú görögdinnye ízű energiaital, amely a népszerű Warheads cukorka jellegzetes, csípős-savanyú aromáját idézi, frissítő és energizáló élményt nyújtva.',
      ar: 7411,
      darab: 1
    }
  ];

  
  showNotification = false;

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {}

  kosarbaRak(i: number) {
    const termek = this.ghost[i];
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
        this.ghost.sort((a, b) => a.ar - b.ar);
      } else if (order === 'high-to-low') {
        this.ghost.sort((a, b) => b.ar - a.ar);
      }
    }

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }