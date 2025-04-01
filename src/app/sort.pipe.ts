import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(candies:any[], order:string): any {
    if (!candies) return null;
    if (!order) return candies

    if (order === 'high-to-low') {
     return candies.sort((a: { price: number; }, b: { price: number; }) => b.price - a.price);  
    } else if (order === 'low-to-high') {
     return candies.sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);  
    }
  }

}
