import { Component } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { ChangeDetectorRef } from '@angular/core'; 

interface nerds {
  id: string;
  nev: string;
  image: string;
  leiras: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-nerds',
  templateUrl: './nerds.component.html',
  styleUrls: ['./nerds.component.css']
})
export class nerdsComponent {
  nerds: nerds[] = [
    {
      id: '1',
      nev: 'Nerds Gummy Clusters Very Berry 142g',
      image: './assets/nerds/Nerds Gummy Clusters Very Berry 142g.jpg',
      leiras: 'A Nerds Gummy Clusters Very Berry egy egyedi textúrájú cukorka, amely bogyós gyümölcsök intenzív ízvilágát kínálja, apró NERDS cukorkákkal kombinálva, így biztosítva egy roppanós és gyümölcsös édességélményt.',
      ar: 2190,
      darab: 1
    },
    {
      id: '2',
      nev: 'Nerds Gummy Clusters 141g',
      image: './assets/nerds/Nerds Gummy Clusters 141g.jpg',
      leiras: 'A Nerds Gummy Clusters egy egyedi textúrájú cukorka, amely Rainbow ízben készül, ahol a külső ropogós NERDS cukorkák egy puha gumicukor magot borítanak, kínálva egy intenzív, gyümölcsös ízvilágot szőlő, cseresznye és narancs aromákkal.',
      ar: 1990,
      darab: 1
    },
    {
      id: '3',
      nev: 'Nerds Gummy Clusters Theater Box 85g',
      image: './assets/nerds/Nerds Gummy Clusters Theater Box 85g.jpg',
      leiras: 'A Nerds Gummy Clusters Theater Box egy egyedi textúrájú cukorka, amely Rainbow ízben készül, ahol a külső ropogós NERDS cukorkák egy puha gumicukor magot borítanak, kínálva egy intenzív, gyümölcsös ízvilágot szőlő, cseresznye és narancs aromákkal.',
      ar: 1490,
      darab: 1
    },
    {
      id: '4',
      nev: 'Nerds Candy Grape and Strawberry 142g',
      image: './assets/nerds/Nerds Candy Grape and Strawberry 142g.jpg',
      leiras: 'A Nerds Candy Grape and Strawberry egy klasszikus, két külön rekeszben kínált cukorka, amely az intenzív, édeskés szőlő és a friss, gyümölcsös eper ízét kombinálja apró, ropogós cukorkaszemekben.',
      ar: 1490,
      darab: 1
    },
    {
      id: '5',
      nev: 'Nerds Gummy Clusters Very Berry Share Pouch 85g',
      image: './assets/nerds/Nerds Gummy Clusters Very Berry Share Pouch 85g.jpg',
      leiras: 'A Nerds Gummy Clusters Very Berry Share Pouch egy egyedi textúrájú cukorka, amely bogyós gyümölcsök intenzív ízvilágát kínálja, ahol a puha gumicukor magot apró, ropogós NERDS cukorkák borítják, létrehozva egy komplex és élménydús édességet.',
      ar: 1690,
      darab: 1
    },
    {
      id: '6',
      nev: 'Nerds Big Chewy Theater Box 120g',
      image: './assets/nerds/Nerds Big Chewy Theater Box 120g.jpg',
      leiras: 'A Nerds Big Chewy Theater Box egy egyedi textúrájú cukorka, amely ropogós NERDS héjjal és puha, gyümölcsös ízű (szőlő és eper) belsővel rendelkezik, kínálva egy komplex és élménydús édességet.',
      ar: 1430,
      darab: 1
    },
    {
      id: '7',
      nev: 'Nerds Frosty Fruit Candy 141g',
      image: './assets/nerds/Nerds Frosty Fruit Candy 141g.jpg',
      leiras: 'A Nerds Frosty Fruit Candy egy karácsonyi különkiadású cukorka, amely görögdinnye, vadcseresznye és puncs ízeket tartalmaz, apró, ropogós cukorkaszemekben, amelyek élénk színekkel és intenzív gyümölcsös ízvilággal kínálnak ünnepi édességélményt.',
      ar: 1690,
      darab: 1
    },
    {
      id: '8',
      nev: 'Wonka Nerds Grape And Strawberry 47g',
      image: './assets/nerds/Wonka Nerds Grape And Strawberry 47g.jpg',
      leiras: 'A Wonka Nerds Grape And Strawberry egy klasszikus, két rekeszben kínált apró, ropogós cukorka, amely az egyik oldalon intenzív szőlő, a másikon édes eper ízű, lehetővé téve a fogyasztónak, hogy külön-külön vagy keverve élvezze a két gyümölcsös ízt.',
      ar: 990,
      darab: 1
    },
    {
      id: '9',
      nev: 'Nerds Fruits Candy 142g',
      image: './assets/nerds/Nerds Fruits Candy 142g.jpg',
      leiras: 'A Nerds Fruits Candy egy színes, ropogós cukorka, amely többféle gyümölcsös ízt (például eper, szőlő, cseresznye, dinnye és narancs) kínál apró, változatos formájú és méretű cukorkaszemekben, intenzív és izgalmas ízélményt nyújtva.',
      ar: 1490,
      darab: 1
    },
    {
      id: '10',
      nev: 'Nerds Watermelon And Cherry 47g',
      image: './assets/nerds/Nerds Watermelon And Cherry 47g.jpg',
      leiras: 'A Nerds Watermelon And Cherry egy kétrekeszes, ropogós cukorka, amely az egyik oldalon friss, nyári görögdinnye, a másikon pedig édes és intenzív cseresznye ízű apró cukorkaszemeket kínál, lehetővé téve a fogyasztónak, hogy külön-külön vagy keverve élvezze a két gyümölcsös ízt.',
      ar: 990,
      darab: 1
    },
    {
      id: '11',
      nev: 'Wonka Nerds Rope Rainbow Candy 26g',
      image: './assets/nerds/Wonka Nerds Rope Rainbow Candy 26g.jpg',
      leiras: 'A Wonka Nerds Rope Rainbow Candy egy színes, gumicukor alapú édesség, amelyet különböző ízű (szőlő, eper, citrom, narancs és egyéb gyümölcsös) apró, ropogós Nerds cukorkák borítanak, így kínálva egy komplex, többrétegű ízélményt.',
      ar: 990,
      darab: 1
    }
  ];

  
  showNotification = false;

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {}

  kosarbaRak(i: number) {
    const termek = this.nerds[i];
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
        this.nerds.sort((a, b) => a.ar - b.ar);
      } else if (order === 'high-to-low') {
        this.nerds.sort((a, b) => b.ar - a.ar);
      }
    }

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }