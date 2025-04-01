import { Component } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { ChangeDetectorRef } from '@angular/core'; 

interface skittles {
  id: string;
  nev: string;
  image: string;
  leiras: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-skittles',
  templateUrl: './skittles.component.html',
  styleUrls: ['./skittles.component.css']
})
export class skittlesComponent {
  skittles: skittles[] = [
    {
      id: '1',
      nev: 'Skittles Drink Original 414ml',
      image: './assets/skittles/Skittles Drink Original 414ml.jpg',
      leiras: 'A Skittles Drink Original egy egyedi, színes cukorkák által inspirált üdítőital, amely a klasszikus Skittles cukorka öt gyümölcsös ízét (eper, citrom, lime, narancs és szőlő) kombinálja egy édes és frissítő italban.',
      ar: 1780,
      darab: 1
    },
    {
      id: '2',
      nev: 'Skittles Drink Wild Berry 414ml',
      image: './assets/skittles/Skittles Drink Wild Berry 414ml.jpg',
      leiras: 'A Skittles Drink Wild Berry egy izgalmas, bogyós gyümölcsök ízvilágát idéző üdítőital, amely a Skittles Wild Berry cukorka változatosságát tükrözi, ötvözve a szeder, vad eper, vad cseresznye, málna és áfonya édes és zamatos ízeit egy frissítő italban.',
      ar: 1790,
      darab: 1
    },
    {
      id: '3',
      nev: 'Skittles Drink Tropical 414ml',
      image: './assets/skittles/Skittles Drink Tropical 414ml.jpg',
      leiras: 'A Skittles Drink Tropical egy egzotikus, trópusi gyümölcsök ízvilágát idéző üdítőital, amely a Skittles Tropical cukorka változatosságát tükrözi, ötvözve a kiwi, lime, ananász, mangó és papaya édes és frissítő ízeit egy üdítő italban.',
      ar: 1790,
      darab: 1
    },
    {
      id: '4',
      nev: 'Skittles Drink Sour 414ml',
      image: './assets/skittles/Skittles Drink Sour 414ml.jpg',
      leiras: 'A Skittles Drink Sour egy merész és izgalmas üdítőital, amely a Skittles Sour cukorkák intenzív, savanyú-édes ízvilágát idézi, ötvözve a citrom, zöldalma, eper, szőlő és mandarin fanyar és frissítő ízeit egy stimuláló italban.',
      ar: 1790,
      darab: 1
    },
    {
      id: '5',
      nev: 'Skittles Crazy Sours 38g',
      image: './assets/skittles/Skittles Crazy Sours 38g.jpg',
      leiras: 'A Skittles Crazy Sours egy élénk és savanyú gyümölcsízű cukorkaválogatás, amely intenzív és frissítő ízélményt nyújt minden falatban.',
      ar: 299,
      darab: 1
    },
    {
      id: '6',
      nev: 'Skittles Fruits 38g',
      image: './assets/skittles/Skittles Fruits 38g.jpg',
      leiras: 'A Skittles Fruits egy élénk és gyümölcsös cukorkaválogatás, amely öt különböző ízzel biztosít vidám és édes rágási élményt.',
      ar: 360,
      darab: 1
    },
    {
      id: '7',
      nev: 'Skittles Crazy Sours 136g',
      image: './assets/skittles/Skittles Crazy Sours 136g.jpg',
      leiras: 'A Skittles Crazy Sours egy nagyobb kiszerelésű, savanyú gyümölcsízű cukorkaválogatás, amely intenzív és frissítő ízekkel garantálja a hosszan tartó élvezetet.',
      ar: 980,
      darab: 1
    },
    {
      id: '8',
      nev: 'Skittles dóza 195g',
      image: './assets/skittles/Skittles dóza 195g.jpg',
      leiras: 'A Skittles dóza egy nagy kiszerelésű, színes és gyümölcsös cukorkaválogatás, amely vidám és édes ízélményt nyújt minden falatban.',
      ar: 3868,
      darab: 1
    },
    {
      id: '9',
      nev: 'Skittles Fruity Tea 40g',
      image: './assets/skittles/Skittles Fruity Tea 40g.jpg',
      leiras: 'A Skittles Fruity Tea egy gyümölcsös ízű tea, amely a Skittles édességeinek frissítő, édes és aromás változatát kínálja forró ital formájában.',
      ar: 990,
      darab: 1
    },
    {
      id: '10',
      nev: 'Skittles Tropical Liquid Water Enhancer 48ml',
      image: './assets/skittles/Skittles Tropical Liquid Water Enhancer 48ml.jpg',
      leiras: 'A Skittles Tropical Liquid Water Enhancer egy trópusi gyümölcsízű, folyékony italízesítő, amely néhány cseppel feldobja a vizet, édes és gyümölcsös frissességet biztosítva.',
      ar: 4510,
      darab: 1
    },
    {
      id: '11',
      nev: 'Skittles Tropical Punch flavored drink powder, 6-pack',
      image: './assets/skittles/Skittles Tropical Punch flavored drink powder, 6-pack.jpg',
      leiras: 'A Skittles Tropical Punch trópusi puncs ízű italpor egy egzotikus gyümölcsök édes és frissítő ízét hozza el, könnyen elkészíthető, ízesített üdítő formájában.',
      ar: 1416,
      darab: 1
    },
    {
      id: '12',
      nev: 'Skittles Wild Berry Water Enhancer 48ml',
      image: './assets/skittles/Skittles Wild Berry Water Enhancer 48ml.jpg',
      leiras: 'A Skittles Wild Berry Water Enhancer egy bogyós gyümölcsök ízvilágát hozó, folyékony italízesítő, amely néhány cseppel frissítő, édes és gyümölcsös élményt ad a vízhez.',
      ar: 2573,
      darab: 1
    }
  ];

  
  showNotification = false;

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {}

  kosarbaRak(i: number) {
    const termek = this.skittles[i];
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
        this.skittles.sort((a, b) => a.ar - b.ar);
      } else if (order === 'high-to-low') {
        this.skittles.sort((a, b) => b.ar - a.ar);
      }
    }

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }