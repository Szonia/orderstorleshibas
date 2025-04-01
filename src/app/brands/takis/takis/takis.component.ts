import { Component } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { ChangeDetectorRef } from '@angular/core'; 

interface takis {
  id: string;
  nev: string;
  image: string;
  leiras: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-takis',
  templateUrl: './takis.component.html',
  styleUrls: ['./takis.component.css']
})
export class takisComponent {
  takis: takis[] = [
    { 
      id: '1',
      nev: 'Takis Blue Heat Spicy Mexican Chips 92g',
      image: './assets/takis/Takis Blue Heat Spicy Mexican Chips 92g.jpeg',
      leiras: 'A Takis Blue Heat egy rendkívül csípős mexikói chips, amely vibráns kék színben és intenzív, pikáns fűszerezésben tündököl, lime és chili paprika keverékével kínálva egy merész és tűzforró ízélményt.',
      ar: 1990,
      darab: 1
    },
    {
      id: '2',
      nev: 'Takis Guacamole Mexico 70g',
      image: './assets/takis/Takis Guacamole Mexico 70g.jpg',
      leiras: 'A Takis Guacamole Mexico egy csípős, guacamole ízesítésű kukoricás tortilla chips, amely valódi avokádó és fűszerkeverék felhasználásával készül, intenzív mexikói ízvilágot és enyhe csípősséget kínálva.',
      ar: 1390,
      darab: 1
    },
    { id: '3',
      nev: 'Takis Queso Volcano Chips 90g',
      image: './assets/takis/Takis Queso Volcano Chips 90g.jpg',
      leiras: 'A Takis Queso Volcano Chips egy intenzív, csípős sajtos tortilla chips, amely a sajt és chili fűszerek tűzforró kombinációját kínálja, vulkanikus ízvilágot teremtve egyetlen harapásban.',
      ar: 1690,
      darab: 1
    },
    {
      id: '4',
      nev: 'Takis Fuego Hot Chips 90g',
      image: './assets/takis/Takis Fuego Hot Chips 90g.jpg',
      leiras: 'A Takis Fuego Hot Chips egy rendkívül csípős mexikói tortilla chips, amely a chili és lime tűzforró kombinációjával kínál intenzív, pikáns ízélményt, csavart taco formában, a mexikói konyha szenvedélyes karakterét idézve.',
      ar: 1690,
      darab: 1
    },
    {
      id: '5',
      nev: 'Takis Nitro 113g',
      image: './assets/takis/Takis Nitro 113g.jpg',
      leiras: 'Intenzív habanero chili ízesítésű tekercs, fekete-piros csomagolásban, enyhén füstös aromával.',
      ar: 1990,
      darab: 1
    },
    {
      id: '6',
      nev: 'Takis Crunchy Fajita 92g',
      image: './assets/takis/Takis Crunchy Fajita 92g.jpg',
      leiras: 'Taco fűszerezésre emlékeztető ízvilágú tekercs, köménymagos aromával és enyhe savanyú utóízzel.',
      ar: 2363,
      darab: 1
    },
    {
      id: '7',
      nev: 'Takis Dragon Sweet Chili 90g',
      image: './assets/takis/Takis Dragon Sweet Chili 90g.jpg',
      leiras: 'Édes-csípős ízesítésű tekercs, amely a Sweet Chili Doritos rajongóinak is ízleni fog.',
      ar: 1990,
      darab: 1
    },
    {
      id: '8',
      nev: 'Takis Intense Nacho 92g',
      image: './assets/takis/Takis Intense Nacho 92g.jpg',
      leiras: 'Sajtos ízesítésű, nem csípős változat, amely a klasszikus nachos ízét idézi.',
      ar: 2190,
      darab: 1
    },
    {
      id: '9',
      nev: 'Takis Zombie 92g',
      image: './assets/takis/Takis Zombie 92g.jpg',
      leiras: 'Habanero és uborka ízesítésű tekercs, fekete-zöld csomagolásban.',
      ar: 1990,
      darab: 1
    },
    {
      id: '10',
      nev: 'Takis Waves Fuego 190g',
      image: './assets/takis/Takis Waves Fuego 190g.jpg',
      leiras: 'Hullámos burgonyachips változat a klasszikus Fuego ízesítéssel.',
      ar: 1473,
      darab: 1
    },
    {
      id: '11',
      nev: 'Takis Hot Nuts Fuego 90g',
      image: './assets/takis/Takis Hot Nuts Fuego 90g.jpg',
      leiras: 'Ropogós kukoricabevonattal ellátott földimogyoró, a Fuego ízesítéssel.',
      ar: 1490,
      darab: 1
    },
    {
      id: '12',
      nev: 'Takis Stix Fuego 280g',
      image: './assets/takis/Takis Stix Fuego 280g.jpg',
      leiras: 'Vékony kukorica rudacskák a klasszikus Fuego ízesítéssel, intenzívebb chili és lime aromával.',
      ar: 1513,
      darab: 1
    }
  ];

  showNotification = false;

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {}

  kosarbaRak(i: number) {
    const termek = this.takis[i];
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
        this.takis.sort((a, b) => a.ar - b.ar);
      } else if (order === 'high-to-low') {
        this.takis.sort((a, b) => b.ar - a.ar);
      }
    }

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }