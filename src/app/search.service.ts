import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchSub= new BehaviorSubject<string>("")

  constructor() { }

  getSearch(){
    return this.searchSub
  }

  setSearch(text:string){
    console.log("Frissítek",text)
    this.searchSub.next(text)
  }
}
