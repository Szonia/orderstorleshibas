import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChipsekComponent } from './products/chipsek/chipsek.component';
import { SosChipsekComponent } from './products/sos-chipsek/sos-chipsek.component';
import { CsiposChipsekComponent } from './products/csipos-chipsek/csipos-chipsek.component';
import { GumicukrokComponent } from './products/gumicukrok/gumicukrok.component';
import { EdesGumicukrokComponent } from './products/edes-gumicukrok/edes-gumicukrok.component';
import { SavanyuGumicukrokComponent } from './products/savanyu-gumicukrok/savanyu-gumicukrok.component';
import { UditokComponent } from './products/uditok/uditok.component';
import { EdesUditokComponent } from './products/edes-uditok/edes-uditok.component';
import { SavanyuUditokComponent } from './products/savanyu-uditok/savanyu-uditok.component';
import { FiokomComponent } from './account/fiokom/fiokom.component';
import { KivansaglistamComponent } from './wishlist/kivansaglistam/kivansaglistam.component';
import { KapcsolatComponent } from './contact-us/kapcsolat/kapcsolat.component';
import { FooldalComponent } from './main-page/fooldal/fooldal.component';
import { KosarComponent } from './cart/kosar/kosar.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { LoginComponent } from './account/login/login.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';

import { ArizonaComponent } from './brands/arizona/arizona/arizona.component';
import { bazookaComponent } from './brands/bazooka/bazooka/bazooka.component';
import { cheetosComponent } from './brands/cheetos/cheetos/cheetos.component';
import { fantaComponent } from './brands/fanta/fanta/fanta.component';
import { ghostComponent } from './brands/ghost/ghost/ghost.component';
import { nerdsComponent } from './brands/nerds/nerds/nerds.component';
import { primeComponent } from './brands/prime/prime/prime.component';
import { pringlesComponent } from './brands/pringles/pringles/pringles.component';
import { skittlesComponent } from './brands/skittles/skittles/skittles.component';
import { sourComponent } from './brands/sour/sour/sour.component';
import { takisComponent } from './brands/takis/takis/takis.component';
import { warheadsComponent } from './brands/warheads/warheads/warheads.component';
import { AdminloginComponent } from './admin/login/adminlogin/adminlogin.component';
import { CandyListComponent } from './products/candy-list/candy-list.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { ProductlistComponent } from './productlist/productlist.component';



const routes: Routes = [

  // { path: '', redirectTo: '/fooldal', pathMatch: 'full' },
  { path: '', component:CandyListComponent },


  { path: 'orders', component:OrdersListComponent },

  { path: 'fiokom', component: FiokomComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },


  { path: 'kivansaglistam', component: KivansaglistamComponent },
  { path: 'kapcsolat', component: KapcsolatComponent },
  { path: 'fooldal', component: FooldalComponent },

  { path: 'kosar', component: KosarComponent },
  { path: 'checkout', component: CheckoutComponent},
  { path: 'candies', component: CandyListComponent },

  { path: 'chipsek', component: ChipsekComponent },
  { path: 'sos-chipsek', component: SosChipsekComponent },
  { path: 'csipos-chipsek', component: CsiposChipsekComponent },
  { path: 'gumicukrok', component: GumicukrokComponent },
  { path: 'edes-gumicukrok', component: EdesGumicukrokComponent },
  { path: 'savanyu-gumicukrok', component: SavanyuGumicukrokComponent },
  { path: 'uditok', component: UditokComponent },
  { path: 'edes-uditok', component: EdesUditokComponent },
  { path: 'savanyu-uditok', component: SavanyuUditokComponent },

  {path: 'arizona', component: ArizonaComponent },
  {path: 'bazooka', component: bazookaComponent },
  {path: 'cheetos', component: cheetosComponent },
  {path: 'fanta', component: fantaComponent },
  {path: 'ghost', component: ghostComponent },
  {path: 'nerds', component: nerdsComponent },
  {path: 'prime', component: primeComponent },
  {path: 'pringles', component: pringlesComponent },
  {path: 'skittles', component: skittlesComponent },
  {path: 'sour', component: sourComponent },
  {path: 'takis', component: takisComponent },
  {path: 'warheads', component: warheadsComponent },
  
  {path: 'adminlogin', component: AdminloginComponent },
  {path: 'adminproducts', component: ProductlistComponent },
  // { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }