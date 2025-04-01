import { Component } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { ChangeDetectorRef } from '@angular/core'; 

interface warheads {
  id: string;
  nev: string;
  image: string;
  leiras: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-warheads',
  templateUrl: './warheads.component.html',
  styleUrls: ['./warheads.component.css']
})
export class warheadsComponent {
  warheads: warheads[] = [
    {
      id: '1',
      nev: 'WarHeads Sour Black Cherry Soda 355ml',
      image: './assets/warheads/WarHeads Sour Black Cherry Soda 355ml.jpg',
      leiras: 'A WarHeads Sour Black Cherry Soda egy intenzíven savanyú, fekete cseresznye ízű szénsavas üdítőital, amely a WarHeads cukorkák jellegzetes, arcfintorító savanyúságát ötvözi a gyümölcsös ízzel, egyedi és merész ízélményt nyújtva.',
      ar: 990,
      darab: 1
    },
    {
      id: '2',
      nev: 'Warheads Blue Raspberry Soda 355ml',
      image: './assets/warheads/Warheads Blue Raspberry Soda 355ml.jpg',
      leiras: 'A Warheads Blue Raspberry Soda egy intenzíven savanyú, kék málna ízű szénsavas üdítőital, amely ötvözi a Warheads cukorkák jellegzetes, arcfintorító savanyúságát a gyümölcsös ízzel, egyedi és merész ízélményt nyújtva.',
      ar: 990,
      darab: 1
    },
    {
      id: '3',
      nev: 'WarHeads Sour Green Apple Soda 355ml',
      image: './assets/warheads/WarHeads Sour Green Apple Soda 355ml.jpg',
      leiras: 'A WarHeads Sour Green Apple Soda egy intenzíven savanyú, zöldalma ízű szénsavas üdítőital, amely ötvözi a WarHeads cukorkák jellegzetes, arcfintorító savanyúságát a frissítő almaízzel, egyedi és merész ízélményt nyújtva.',
      ar: 990,
      darab: 1
    },
    {
      id: '4',
      nev: 'Warheads Sour Watermelon Soda 355ml',
      image: './assets/warheads/Warheads Sour Watermelon Soda 355ml.jpg',
      leiras: 'A Warheads Sour Watermelon Soda egy intenzíven savanyú, görögdinnye ízű szénsavas üdítőital, amely ötvözi a Warheads cukorkák jellegzetes, arcfintorító savanyúságát a frissítő görögdinnye ízével, egyedi és merész ízélményt nyújtva.',
      ar: 990,
      darab: 1
    },
    {
      id: '5',
      nev: 'Warheads Sour peach soda 355ml',
      image: './assets/warheads/Warheads Sour peach soda 355ml.jpg',
      leiras: 'A Warheads Sour Peach Soda egy intenzíven savanyú, őszibarack ízű szénsavas üdítőital, amely ötvözi a Warheads cukorkák jellegzetes, arcfintorító savanyúságát az édes őszibarack zamatával, egyedi és merész ízélményt nyújtva.',
      ar: 990,
      darab: 1
    },
    {
      id: '6',
      nev: 'Warheads Care Bears Sour Grumpy Bears 99g',
      image: './assets/warheads/Warheads Care Bears Sour Grumpy Bears 99g.jpg',
      leiras: 'A Warheads Care Bears Sour Grumpy Bears egy intenzív kék málna ízű, extrém savanyú bevonattal ellátott gumicukor, amely először erős savanyúsággal, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1490,
      darab: 1
    },
    {
      id: '7',
      nev: 'Warheads Galactic Mix Cubes 127g',
      image: './assets/warheads/Warheads Galactic Mix Cubes 127g.jpg',
      leiras: 'A Warheads Galactic Mix Cubes egy űrtémájú, intenzíven savanyú gumicukor keverék, amely különböző gyümölcsös ízekben (mint például fekete cseresznye, kék málna és zöldalma) kínál extrém savanyú élményt, majd fokozatosan édesedő ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1990,
      darab: 1
    },
    {
      id: '8',
      nev: 'Warheads Ooze Chewz Sour Filled Candy 99g',
      image: './assets/warheads/Warheads Ooze Chewz Sour Filled Candy 99g.jpg',
      leiras: 'A Warheads Ooze Chewz Sour Filled Candy egy intenzíven savanyú, folyékony töltelékkel ellátott rágócukorka, amely először extrém savanyú ízrobbanással, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1390,
      darab: 1
    },
    {
      id: '9',
      nev: 'Warheads Wedgies Sour Chewy Candy 99g',
      image: './assets/warheads/Warheads Wedgies Sour Chewy Candy 99g.jpg',
      leiras: 'A Warheads Wedgies Sour Chewy Candy egy intenzíven savanyú, ék alakú rágós gumicukor, amely görögdinnye, puncs, limonádé és cseresznye ízekben kínál extrém savanyú élményt, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1290,
      darab: 1
    },
    {
      id: '10',
      nev: 'Warheads Sour Worms 99g',
      image: './assets/warheads/Warheads Sour Worms 99g.jpg',
      leiras: 'A Warheads Sour Worms egy intenzíven savanyú, kukac alakú gumicukor, amely többféle gyümölcsös ízben (mint zöldalma, fekete cseresznye és kék málna) kínál extrém savanyú élményt, majd fokozatosan édesedő ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1390,
      darab: 1
    },
    {
      id: '11',
      nev: 'Warheads Sour Cubes Sour Gummies 113g',
      image: './assets/warheads/Warheads Sour Cubes Sour Gummies 113g.jpg',
      leiras: 'A Warheads Sour Cubes Sour Gummies egy intenzíven savanyú, kocka alakú rágós gumicukor, amely öt különböző ízben (dinnye, eper, cseresznye, zöld alma és kék málna) kínál extrém savanyú élményt, majd fokozatosan édesedő gyümölcsös ízvilággal lep meg.',
      ar: 1390,
      darab: 1
    },
    {
      id: '12',
      nev: 'WarHeads Chewy Cubes Galactic Mix 99g',
      image: './assets/warheads/WarHeads Chewy Cubes Galactic Mix 99g.jpg',
      leiras: 'A WarHeads Chewy Cubes Galactic Mix egy űrtémájú, intenzíven savanyú, kocka alakú rágós gumicukor, amely különleges gyümölcsös ízekben (mint fekete cseresznye, kék málna és zöldalma) kínál extrém savanyú élményt, majd fokozatosan édesedő ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1390,
      darab: 1
    },
    {
      id: '13',
      nev: 'Warheads Sour Cubes Berry Mix 99g',
      image: './assets/warheads/Warheads Sour Cubes Berry Mix 99g.jpg',
      leiras: 'A Warheads Sour Cubes Berry Mix egy intenzíven savanyú, kocka alakú rágós gumicukor, amely különböző bogyós gyümölcsök ízében kínál extrém savanyú élményt, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1490,
      darab: 1
    },
    {
      id: '14',
      nev: 'Warheads Extreme Sour Hard Candy 92g',
      image: './assets/warheads/Warheads Extreme Sour Hard Candy 92g.jpg',
      leiras: 'A Warheads Extreme Sour Hard Candy egy intenzíven savanyú keménycukorka, amely öt különböző gyümölcsös ízben (zöldalma, fekete cseresznye, kék málna, citrom és görögdinnye) kínál extrém savanyú élményt, majd fokozatosan édes ízvilágba vált át.',
      ar: 1490,
      darab: 1
    },
    {
      id: '15',
      nev: 'Warheads Jelly Beans Sour Candy 113g',
      image: './assets/warheads/Warheads Jelly Beans Sour Candy 113g.jpg',
      leiras: 'A Warheads Jelly Beans Sour Candy egy intenzíven savanyú zselécukorka, amely hat megdöbbentően savanykás gyümölcsös ízben (narancs, görögdinnye, citrom, kék málna, cseresznye és zöld alma) kínál extrém savanyú élményt.',
      ar: 1090,
      darab: 1
    },
    {
      id: '16',
      nev: 'Warheads Cubes 141g',
      image: './assets/warheads/Warheads Cubes 141g.jpg',
      leiras: 'A Warheads Cubes egy intenzíven savanyú, kocka alakú rágós gumicukor, amely hat különböző gyümölcsös ízben (zöldalma, kék málna, eper, görögdinnye, narancs és fekete cseresznye) kínál extrém savanyú élményt, majd fokozatosan édesedő ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1690,
      darab: 1
    },
    {
      id: '17',
      nev: 'Warheads Cubes 99g',
      image: './assets/warheads/Warheads Cubes 99g.jpg',
      leiras: 'A Warheads Cubes egy intenzíven savanyú, kocka alakú rágós gumicukor, amely hat különböző gyümölcsös ízben (zöldalma, kék málna, eper, görögdinnye, narancs és fekete cseresznye) kínál extrém savanyú élményt, majd fokozatosan édesedő ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1490,
      darab: 1
    },
    {
      id: '18',
      nev: 'Warheads Mega Sour Bombs 71g',
      image: './assets/warheads/Warheads Mega Sour Bombs 71g.jpg',
      leiras: 'A Warheads Mega Sour Bombs egy extrém savanyú, bomba alakú kemény cukorka, amely intenzív gyümölcsös ízekben kínál megdöbbentően savanyú élményt, majd fokozatosan édesedő ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1690,
      darab: 1
    },
    {
      id: '19',
      nev: 'Warheads Sour Ooze Chewz Ropes Bag 85g',
      image: './assets/warheads/Warheads Sour Ooze Chewz Ropes Bag 85g.jpg',
      leiras: 'A Warheads Sour Ooze Chewz Ropes Bag egy intenzíven savanyú, rágós cukorka zsinór, amely görögdinnye, kék málna és zöldalma ízekben kínál extrém savanyú élményt, belsejében savanyú töltelékkel, majd fokozatosan édesedő ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1490,
      darab: 1
    },
    {
      id: '20',
      nev: 'Warheads Blue Raspberry Cubes 99g',
      image: './assets/warheads/Warheads Blue Raspberry Cubes 99g.jpg',
      leiras: 'A Warheads Blue Raspberry Cubes egy intenzíven savanyú, kék málna ízű kocka alakú gumicukor, amely először extrém savanyú élményt nyújt, majd fokozatosan édesedő gyümölcsös ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 1390,
      darab: 1
    },
    {
      id: '21',
      nev: 'Warheads Extreme Sour Hard Candy 57g',
      image: './assets/warheads/Warheads Extreme Sour Hard Candy 57g.jpg',
      leiras: 'A Warheads Extreme Sour Hard Candy egy intenzíven savanyú keménycukorka, amely öt különböző gyümölcsös ízben (görögdinnye, alma, kék málna, citrom és fekete cseresznye) kínál extrém savanyú élményt, majd fokozatosan édes, gyümölcsös ízvilágba vált át.',
      ar: 1390,
      darab: 1
    },
    {
      id: '22',
      nev: 'Warheads Dipping Lollipop with Sour Powder 42g',
      image: './assets/warheads/Warheads Dipping Lollipop with Sour Powder 42g.jpg',
      leiras: 'A Warheads Dipping Lollipop with Sour Powder egy intenzív ízélményt nyújtó nyalóka, amely egy édes cukorka alapot és egy rendkívül savanyú port kombinál, lehetővé téve, hogy a fogyasztó a nyalókát a savanyú porba mártogassa, így fokozva az extrém savanyú-édes kontrasztot.',
      ar: 690,
      darab: 1
    },
    {
      id: '23',
      nev: 'Warheads Extreme Sour Extra Sour Candy Assorted Flavors 4g',
      image: './assets/warheads/Warheads Extreme Sour Extra Sour Candy Assorted Flavors 4g.jpg',
      leiras: 'A Warheads Mega Sour Bombs egy extrém savanyú, bomba alakú kemény cukorka, amely intenzív gyümölcsös ízekben kínál megdöbbentően savanyú élményt, majd fokozatosan édesedő ízvilággal lepi meg az ízlelőbimbókat.',
      ar: 99,
      darab: 1
    }
  ];

  
  showNotification = false;

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {}

  kosarbaRak(i: number) {
    const termek = this.warheads[i];
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
        this.warheads.sort((a, b) => a.ar - b.ar);
      } else if (order === 'high-to-low') {
        this.warheads.sort((a, b) => b.ar - a.ar);
      }
    }

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }