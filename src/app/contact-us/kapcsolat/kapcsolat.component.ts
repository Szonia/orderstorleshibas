
import { Component } from '@angular/core';

@Component({
  selector: 'app-kapcsolat',
  templateUrl: './kapcsolat.component.html',
  styleUrls: ['./kapcsolat.component.css']
})
export class KapcsolatComponent {
  address: string = '2000 Szentendre, Kucsera Ferenc utca 15';

  getGoogleMapsUrl(): string {
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(this.address);
  }
}
