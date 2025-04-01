import { Component } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { ChangeDetectorRef } from '@angular/core'; 

interface sour {
  id: string;
  nev: string;
  image: string;
  leiras: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-sour',
  templateUrl: './sour.component.html',
  styleUrls: ['./sour.component.css']
})
export class sourComponent {
  sour: sour[] = [
    {
      id: '1',
      nev: 'Sour Patch Kids Strawberry 102g',
      image: './assets/sour/Sour Patch Kids Strawberry 102g.jpg',
      leiras: 'A Sour Patch Kids Strawberry egy savanyú-édes epres gumicukor, amely először intenzív savanyú bevonattal, majd fokozatosan édesedő eper ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1290,
      darab: 1
    },
    {
      id: '2',
      nev: 'Sour Patch Kids Cola Flavor 130g',
      image: './assets/sour/Sour Patch Kids Cola Flavor 130g.jpg',
      leiras: 'A Sour Patch Kids Cola Flavor egy savanyú-édes gumicukor, amely a klasszikus kóla ízét idézi, először intenzív savanyú bevonattal, majd fokozatosan édesedő cola ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1390,
      darab: 1
    },
    {
      id: '3',
      nev: 'Sour Patch Kids Blue Raspberry 102g',
      image: './assets/sour/Sour Patch Kids Blue Raspberry 102g.jpg',
      leiras: 'A Sour Patch Kids Blue Raspberry egy savanyú-édes gumicukor, amely a kék málna intenzív, frissítő ízét kínálja, először erős savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1190,
      darab: 1
    },
    {
      id: '4',
      nev: 'Sour Patch Kids Lemonade Fest 102g',
      image: './assets/sour/Sour Patch Kids Lemonade Fest 102g.jpg',
      leiras: 'A Sour Patch Kids Lemonade Fest egy négyféle limonádé ízű (eper limonádé, kék málna limonádé, meggy-lime limonádé és klasszikus limonádé) savanyú-édes gumicukor, amely először intenzív savanyú bevonattal, majd fokozatosan édesedő gyümölcsös limonádé ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1390,
      darab: 1
    },
    {
      id: '5',
      nev: 'Sour Patch Kids 99g',
      image: './assets/sour/Sour Patch Kids 99g.jpg',
      leiras: 'A Sour Patch Kids egy extrém savanyú gumicukor, amely először intenzív savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1290,
      darab: 1
    },
    {
      id: '6',
      nev: 'Sour Patch Kids Extreme 99g',
      image: './assets/sour/Sour Patch Kids Extreme 99g.jpg',
      leiras: 'A Sour Patch Kids Extreme egy extrém savanyú gumicukor, amely először intenzív savanyú bevonattal lepi meg az ízlelőbimbókat, majd fokozatosan egy édes, gyümölcsös ízvilágba vált át, garantálva egy merész és izgalmas édességélményt.',
      ar: 1290,
      darab: 1
    },
    {
      id: '7',
      nev: 'Sour Patch Kids Candy Family Size 816g',
      image: './assets/sour/Sour Patch Kids Candy Family Size 816g.jpg',
      leiras: 'A Sour Patch Kids Candy egy klasszikus, savanyú-édes gumicukor, amely citrom, lime, narancs és piros bogyós gyümölcs ízeket tartalmaz, először intenzív savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 6990,
      darab: 1
    },
    {
      id: '8',
      nev: 'Sour Patch Kids Watermelon 130g',
      image: './assets/sour/Sour Patch Kids Watermelon 130g.jpg',
      leiras: 'A Sour Patch Kids Watermelon egy savanyú-édes gumicukor, amely a friss görögdinnye intenzív ízét kínálja, először erős savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1790,
      darab: 1
    },
    {
      id: '9',
      nev: 'Sour Patch Kids Peach 102g',
      image: './assets/sour/Sour Patch Kids Peach 102g.jpg',
      leiras: 'A Sour Patch Kids Peach egy savanyú-édes gumicukor, amely az érett őszibarack intenzív, friss gyümölcsös ízét kínálja, először erős savanyú bevonattal, majd fokozatosan édesedő barack ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1190,
      darab: 1
    },
    {
      id: '10',
      nev: 'Sour Patch Kids Red White & Blue 87g',
      image: './assets/sour/Sour Patch Kids Red White & Blue 87g.jpg',
      leiras: 'A Sour Patch Kids Red White & Blue egy patrióta ihletésű, háromféle (piros, fehér és kék) gyümölcsös ízű gumicukor, amely először intenzív savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1290,
      darab: 1
    },
    {
      id: '11',
      nev: 'Sour Patch Kids Christmas 88g',
      image: './assets/sour/Sour Patch Kids Christmas 88g.jpg',
      leiras: 'A Sour Patch Kids Christmas egy ünnepi, piros és zöld színű gumicukor, amely a klasszikus savanyú-édes ízvilágot karácsonyi hangulatban kínálja, először intenzív savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízekkel lepi meg az ízlelőbimbókat.',
      ar: 1690,
      darab: 1
    },
    {
      id: '12',
      nev: 'Sour Patch Kids Fruit Mix 130g',
      image: './assets/sour/Sour Patch Kids Fruit Mix 130g.jpg',
      leiras: 'A Sour Patch Kids Fruit Mix egy vegyes gyümölcs ízű gumicukor, amely cseresznye, alma, trópusi és feketeribizli ízeket tartalmaz, először intenzív savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1490,
      darab: 1
    },
    {
      id: '13',
      nev: 'Sour Patch Kids Black Raspberry Sour Hearts 87g',
      image: './assets/sour/Sour Patch Kids Black Raspberry Sour Hearts 87g.jpg',
      leiras: 'A Sour Patch Kids Black Raspberry Sour Hearts egy szív alakú, fekete málna ízű gumicukor, amely először intenzív savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat, tökéletes édességet kínálva Valentin-napra vagy bármilyen alkalomra.',
      ar: 1290,
      darab: 1
    },
    {
      id: '14',
      nev: 'Sour Patch Kids Original 130g',
      image: './assets/sour/Sour Patch Kids Original 130g.jpg',
      leiras: 'A Sour Patch Kids Original egy klasszikus, gyümölcsös ízű gumicukor, amely először intenzív savanyú bevonattal lepi meg az ízlelőbimbókat, majd fokozatosan egy édes, nyúlós belsővel kínál élményt.',
      ar: 1490,
      darab: 1
    },
    {
      id: '15',
      nev: 'Sour Punch Bites Strawberry, Green Apple & Blue Raspberry Sour Gummy Candy 105g',
      image: './assets/sour/Sour Punch Bites Strawberry, Green Apple & Blue Raspberry Sour Gummy Candy 105g.jpg',
      leiras: 'A Sour Punch Bites Strawberry, Green Apple & Blue Raspberry egy háromféle ízű (eper, zöldalma és kék málna) savanyú gumicukor, amely először intenzív savanyú cukorborítással, majd édes gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1090,
      darab: 1
    },
    {
      id: '16',
      nev: 'Sour Punch Bites Rad Reds Fruity Gummy Candy 142g',
      image: './assets/sour/Sour Punch Bites Rad Reds Fruity Gummy Candy 142g.jpg',
      leiras: 'A Sour Punch Bites Rad Reds egy gyümölcsös gumicukor, amely vörös gyümölcsök intenzív, savanyú-édes ízvilágát kínálja, először erős savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízekkel lepi meg az ízlelőbimbókat.',
      ar: 1390,
      darab: 1
    },
    {
      id: '17',
      nev: 'Sour Punch Mini Bites Fruit-Flavored Sour Gummy Candy 56g',
      image: './assets/sour/Sour Punch Mini Bites Fruit-Flavored Sour Gummy Candy 56g.jpg',
      leiras: 'A Sour Punch Mini Bites Fruit-Flavored Sour Gummy Candy egy vegyes gyümölcs ízű, apró méretű savanyú gumicukor, amely először intenzív savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1090,
      darab: 1
    },
    {
      id: '18',
      nev: 'Sour Punch Bites Blue Raspberry Sour Gummy Candy 105g',
      image: './assets/sour/Sour Punch Bites Blue Raspberry Sour Gummy Candy 105g.jpg',
      leiras: 'A Sour Punch Bites Blue Raspberry Sour Gummy Candy egy intenzív kék málna ízű savanyú gumicukor, amely először erős savanyú bevonattal, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1190,
      darab: 1
    }
  ];

  
  showNotification = false;

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {}

  kosarbaRak(i: number) {
    const termek = this.sour[i];
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
        this.sour.sort((a, b) => a.ar - b.ar);
      } else if (order === 'high-to-low') {
        this.sour.sort((a, b) => b.ar - a.ar);
      }
    }

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }