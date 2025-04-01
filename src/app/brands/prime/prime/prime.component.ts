import { Component } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { ChangeDetectorRef } from '@angular/core'; 

interface prime {
  id: string;
  nev: string;
  image: string;
  leiras: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class primeComponent {
  prime: prime[] = [
    {
      id: '1',
      nev: 'Prime Hydration Drink Glowberry 500ml',
      image: './assets/prime/Prime Hydration Drink Glowberry 500ml.jpg',
      leiras: 'A Prime Hydration Glowberry egy alma-, lime- és kivi ízű, szénsavmentes üdítőital, amelyet édesítőszerekkel és hozzáadott vitaminokkal készítenek.',
      ar: 3990,
      darab: 1
    },
    {
      id: '2',
      nev: 'Prime Hydration Drink Strawberry Watermelon 500ml',
      image: './assets/prime/Prime Hydration Drink Strawberry Watermelon 500ml.jpg',
      leiras: 'A Prime Hydration Strawberry Watermelon egy üdítőital, amelyben az érett, édes eper karakteres íze harmonikusan találkozik a friss görögdinnye savanykás, felfrissítő ízével.',
      ar: 1490,
      darab: 1
    },
    {
      id: '3',
      nev: 'Prime Hydration Drink Ice Pop 500ml',
      image: './assets/prime/Prime Hydration Drink Ice Pop 500ml.jpg',
      leiras: 'A Prime Hydration Ice Pop egy hűsítő, édes jégkrém ízű üdítőital, amely frissítő és gyümölcsös karakterrel rendelkezik.',
      ar: 1790,
      darab: 1
    },
    {
      id: '4',
      nev: 'Prime Hydration Drink Blue Raspberry 500ml',
      image: './assets/prime/Prime Hydration Drink Blue Raspberry 500ml.jpg',
      leiras: 'A Prime Hydration Blue Raspberry egy élénk kék színű, intenzív málna ízű üdítőital, amely tökéletes egyensúlyt teremt az édes és a savanykás ízjegyek között.',
      ar: 990,
      darab: 1
    },
    {
      id: '5',
      nev: 'Prime Hydration Drink Lemon Lime 500ml',
      image: './assets/prime/Prime Hydration Drink Lemon Lime 500ml.jpg',
      leiras: 'A Prime Hydration Lemon Lime egy frissítő citrusos ital, amely tökéletes egyensúlyt teremt a citrom savanykás és a lime üdítő íze között, kellemes és élénkítő ízélményt nyújtva.',
      ar: 990,
      darab: 1
    },
    {
      id: '6',
      nev: 'Prime Hydration Drink Grape 500ml',
      image: './assets/prime/Prime Hydration Drink Grape 500ml.jpg',
      leiras: 'A Prime Hydration Grape egy intenzív, édes szőlő ízű üdítőital, amely a friss szőlő zamatos és üdítő ízvilágát kínálja minden kortyban.',
      ar: 990,
      darab: 1
    },
    {
      id: '7',
      nev: 'Prime Hydration Drink UFC 300 500ml',
      image: './assets/prime/Prime Hydration Drink UFC 300 500ml.jpg',
      leiras: 'A Prime Hydration UFC 300 egy limitált kiadású, egyedi ízesítésű üdítőital, amely a UFC 300 esemény tiszteletére készült, és egy izgalmas, energiával teli ízkombinációt kínál.',
      ar: 4990,
      darab: 1
    },
    {
      id: '8',
      nev: 'Prime Hydration Drink Strawberry Banana 500ml',
      image: './assets/prime/Prime Hydration Drink Strawberry Banana 500ml.jpg',
      leiras: 'A Prime Hydration Strawberry Banana egy harmonikus ízélményt nyújt, amelyben az érett eper édessége tökéletesen ötvöződik a krémes banán ízével, frissítő és gyümölcsös karaktert kölcsönözve az italnak.',
      ar: 4990,
      darab: 1
    },
    {
      id: '9',
      nev: 'Prime Hydration Drink Auston Matthews 500ml',
      image: './assets/prime/Prime Hydration Drink Auston Matthews 500ml.jpg',
      leiras: 'A Prime Hydration Auston Matthews egy limitált kiadású, jégkorong-inspirálta üdítőital, amely frissítő és energizáló ízkombinációt kínál, tükrözve a jégkorong sztár dinamikus játékstílusát.',
      ar: 3990,
      darab: 1
    },
    {
      id: '10',
      nev: 'Prime Hydration Drink WWE 500ml',
      image: './assets/prime/Prime Hydration Drink WWE 500ml.jpg',
      leiras: 'A Prime Hydration WWE egy különleges kiadású, pankráció-inspirálta üdítőital, amely intenzív és robbanékony ízkombinációt kínál, tükrözve a WWE látványos és energikus világát.',
      ar: 3790,
      darab: 1
    },
    {
      id: '11',
      nev: 'Prime Hydration Drink Toronto Raptors Black 500ml',
      image: './assets/prime/Prime Hydration Drink Toronto Raptors Black 500ml.jpg',
      leiras: 'A Prime Hydration Toronto Raptors Black egy limitált kiadású, kosárlabda-inspirálta üdítőital, amely intenzív, fekete színű megjelenésével és egyedi ízkombinációjával tiszteleg a Toronto Raptors csapata előtt.',
      ar: 3990,
      darab: 1
    },
    {
      id: '12',
      nev: 'Prime Hydration Drink Central Cee 500ml',
      image: './assets/prime/Prime Hydration Drink Central Cee 500ml.jpg',
      leiras: 'A Prime Hydration Central Cee egy limitált kiadású, brit rapper Central Cee által inspirált üdítőital, amely egyedi és merész ízkombinációt kínál, tükrözve a művész innovatív és energikus stílusát.',
      ar: 3490,
      darab: 1
    },
    {
      id: '13',
      nev: 'Prime Hydration Drink LAKERS 500ml',
      image: './assets/prime/Prime Hydration Drink LAKERS 500ml.jpg',
      leiras: 'A Prime Hydration LAKERS egy limitált kiadású, kosárlabda-inspirálta üdítőital, amely a Los Angeles Lakers csapatának tiszteletére készült, és egy frissítő, lila-arany színvilágú ízkombinációt kínál.',
      ar: 4590,
      darab: 1
    },
    {
      id: '14',
      nev: 'Prime Hydration Drink Kevin Durant 500ml',
      image: './assets/prime/Prime Hydration Drink Kevin Durant 500ml.jpg',
      leiras: 'A Prime Hydration Kevin Durant egy limitált kiadású, kosárlabda-sztár inspirálta üdítőital, amely dinamikus és intenzív ízkombinációt kínál, tükrözve Durant robbanékony játékstílusát a pályán.',
      ar: 4590,
      darab: 1
    },
    {
      id: '15',
      nev: 'Prime Hydration Drink Barcelona 500ml',
      image: './assets/prime/Prime Hydration Drink Barcelona 500ml.jpg',
      leiras: 'A Prime Hydration Barcelona egy limitált kiadású, futball-inspirálta üdítőital, amely a híres katalán klub színeiben pompázik, és egy frissítő, mediterrán ízvilágot kínál, tükrözve a csapat szenvedélyes és dinamikus játékstílusát.',
      ar: 3490,
      darab: 1
    },
    {
      id: '16',
      nev: 'Prime Hydration Drink Meta Moon 500ml',
      image: './assets/prime/Prime Hydration Drink Meta Moon 500ml.jpg',
      leiras: 'A Prime Hydration Meta Moon egy titokzatos és futurisztikus ízű üdítőital, amely egyedi, gyümölcsös jegyekkel nyújt izgalmas és frissítő élményt.',
      ar: 1790,
      darab: 1
    }
  ];

  
  showNotification = false;

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {}

  kosarbaRak(i: number) {
    const termek = this.prime[i];
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
        this.prime.sort((a, b) => a.ar - b.ar);
      } else if (order === 'high-to-low') {
        this.prime.sort((a, b) => b.ar - a.ar);
      }
    }

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
