import { Component } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { ChangeDetectorRef } from '@angular/core'; 

interface Arizona {
  id: string;
  nev: string;
  image: string;
  leiras: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-arizona',
  templateUrl: './arizona.component.html',
  styleUrls: ['./arizona.component.css']
})
export class ArizonaComponent {
  arizona: Arizona[] = [
    {
      id: '1',
      nev: 'Arizona Marvel LXR Hero Hydration Lemon Lime 473ml',
      image: './assets/arizona/Arizona Marvel LXR Hero Hydration Lemon Lime 473ml.jpg',
      leiras: 'Az Arizona Marvel LXR Hero Hydration Lemon Lime egy frissítő, szuperhős-inspirálta üdítőital, amely a citrom és lime élénk, citrusos ízét kombinálja egy alacsony cukortartalmú, elektrolitokban és vitaminokban gazdag formulával.',
      ar: 2200,
      darab: 1
    },
    {
      id: '2',
      nev: 'Arizona Marvel LXR Hero Hydration Peach Mango 473ml',
      image: './assets/arizona/Arizona Marvel LXR Hero Hydration Peach Mango 473ml.jpg',
      leiras: 'Az Arizona Marvel LXR Hero Hydration Peach Mango egy szuperhős-inspirálta üdítőital, amely a zamatos őszibarack és az egzotikus mangó édes ízeinek harmonikus keverékét kínálja, elektrolitokkal és vitaminokkal dúsítva.',
      ar: 2200,
      darab: 1
    },
    {
      id: '3',
      nev: 'Arizona Cherry Lime Rickey 650ml',
      image: './assets/arizona/Arizona Cherry Lime Rickey 650ml.jpg',
      leiras: 'Az Arizona Cherry Lime Rickey egy frissítő, enyhén savanykás cseresznye és lime ízű üdítőital, amely tökéletesen kiegyensúlyozza az édes és citrusos ízeket egy élénk és ínycsiklandó italban.',
      ar: 990,
      darab: 1
    },
    {
      id: '4',
      nev: 'Arizona Frost Chillzicle 650ml',
      image: './assets/arizona/Arizona Frost Chillzicle 650ml.jpg',
      leiras: 'Az Arizona Frost Chillzicle egy hűsítő és frissítő üdítő, amely az élénk gyümölcsízeket és a jeges frissességet ötvözi, tökéletes választás a forró napokra.',
      ar: 990,
      darab: 1
    },
    {
      id: '5',
      nev: 'Arizona Green Tea with Ginseng and Honey 650ml',
      image: './assets/arizona/Arizona Green Tea with Ginseng and Honey 650ml.jpg',
      leiras: 'Klasszikus zöld tea méz és ginzeng ízesítéssel, amely az Arizona legismertebb és legnépszerűbb terméke.',
      ar: 990,
      darab: 1
    },
    {
      id: '6',
      nev: 'Arizona Arnold Palmer Half & Half Iced Tea Lemonade 650ml',
      image: './assets/arizona/Arizona Arnold Palmer Half & Half Iced Tea Lemonade 650ml.jpg',
      leiras: 'Fekete tea és limonádé keveréke, amely Arnold Palmer golfozó nevét viseli.',
      ar: 990,
      darab: 1
    },
    {
      id: '7',
      nev: 'Arizona Mucho Mango 650ml',
      image: './assets/arizona/Arizona Mucho Mango 650ml.jpg',
      leiras: 'Intenzív mangó ízű gyümölcsital.',
      ar: 990,
      darab: 1
    },
    {
      id: '8',
      nev: 'Arizona Watermelon 650ml',
      image: './assets/arizona/Arizona Watermelon 650ml.jpg',
      leiras: 'Frissítő görögdinnye ízű ital.',
      ar: 990,
      darab: 1
    },
    {
      id: '9',
      nev: 'Arizona Fruit Punch 650ml',
      image: './assets/arizona/Arizona Fruit Punch 650ml.jpg',
      leiras: 'Többféle gyümölcs ízét ötvöző üdítőital.',
      ar: 990,
      darab: 1
    },
    {
      id: '10',
      nev: 'Arizona Blueberry White Tea 500ml',
      image: './assets/arizona/Arizona Blueberry White Tea 500ml.jpg',
      leiras: 'Áfonyás fehér tea, amely kellemes gyümölcsös ízt kínál.',
      ar: 990,
      darab: 1
    },
    {
      id: '11',
      nev: 'Arizona Pomegranate Green Tea 500ml',
      image: './assets/arizona/Arizona Pomegranate Green Tea 500ml.jpg',
      leiras: 'Gránátalmás zöld tea, amely ötvözi a zöld tea és a gránátalma jótékony hatásait.',
      ar: 990,
      darab: 1
    },
    {
      id: '12',
      nev: 'Arizona Cowboy Cocktail Kiwi Strawberry 500ml',
      image: './assets/arizona/Arizona Cowboy Cocktail Kiwi Strawberry 500ml.jpg',
      leiras: 'Kivi és eper ízesítésű gyümölcskoktél.',
      ar: 990,
      darab: 1
    }
  ];

  
  showNotification = false;

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {}

  kosarbaRak(i: number) {
    const termek = this.arizona[i];
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
        this.arizona.sort((a, b) => a.ar - b.ar);
      } else if (order === 'high-to-low') {
        this.arizona.sort((a, b) => b.ar - a.ar);
      }
    }

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }