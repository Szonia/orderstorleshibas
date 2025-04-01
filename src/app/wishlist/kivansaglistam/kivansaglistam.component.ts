import { Component } from '@angular/core';

interface Termek {
  nev: string;
  image: string;
}

@Component({
  selector: 'app-kivansaglistam',
  templateUrl: './kivansaglistam.component.html',
  styleUrls: ['./kivansaglistam.component.css']
})
export class KivansaglistamComponent {
  termekek: Termek[] = [];  
  ujTermekNev: string = '';   
  ujTermekKep: string = '';    

 
  hozzaadTermek(): void {
    if (this.ujTermekNev && this.ujTermekKep) {
      this.termekek.push({ nev: this.ujTermekNev, image: this.ujTermekKep });
      this.ujTermekNev = '';  
      this.ujTermekKep = '';
    }
  }

 
  torolTermek(index: number): void {
    this.termekek.splice(index, 1);
  }
}
