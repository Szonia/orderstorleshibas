import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChipsekComponent } from './products/chipsek/chipsek.component';
import { GumicukrokComponent } from './products/gumicukrok/gumicukrok.component';
import { EdesGumicukrokComponent } from './products/edes-gumicukrok/edes-gumicukrok.component';
import { SavanyuGumicukrokComponent } from './products/savanyu-gumicukrok/savanyu-gumicukrok.component';
import { SosChipsekComponent } from './products/sos-chipsek/sos-chipsek.component';
import { CsiposChipsekComponent } from './products/csipos-chipsek/csipos-chipsek.component';
import { UditokComponent } from './products/uditok/uditok.component';
import { EdesUditokComponent } from './products/edes-uditok/edes-uditok.component';
import { SavanyuUditokComponent } from './products/savanyu-uditok/savanyu-uditok.component';
import { FiokomComponent } from './account/fiokom/fiokom.component';
import { KapcsolatComponent } from './contact-us/kapcsolat/kapcsolat.component';
import { KivansaglistamComponent } from './wishlist/kivansaglistam/kivansaglistam.component';
import { KosarComponent } from './cart/kosar/kosar.component';
import { LoginComponent } from './account/login/login.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { fantaComponent } from './brands/fanta/fanta/fanta.component';
import { ArizonaComponent } from './brands/arizona/arizona/arizona.component';
import { bazookaComponent } from './brands/bazooka/bazooka/bazooka.component';
import { cheetosComponent } from './brands/cheetos/cheetos/cheetos.component';
import { ghostComponent } from './brands/ghost/ghost/ghost.component';
import { nerdsComponent } from './brands/nerds/nerds/nerds.component';
import { primeComponent } from './brands/prime/prime/prime.component';
import { pringlesComponent } from './brands/pringles/pringles/pringles.component';
import { skittlesComponent } from './brands/skittles/skittles/skittles.component';
import { sourComponent } from './brands/sour/sour/sour.component';
import { takisComponent } from './brands/takis/takis/takis.component';
import { warheadsComponent } from './brands/warheads/warheads/warheads.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AdminloginComponent } from './admin/login/adminlogin/adminlogin.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { environments } from '../environment/environments';
import { CandyListComponent } from './products/candy-list/candy-list.component';
import { CandiesComponent } from './products/candies/candies.component';
import { FooldalComponent } from './main-page/fooldal/fooldal.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';

// Helyes import az AuthService számára
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductlistComponent,
    FiokomComponent,
    KapcsolatComponent,
    FooldalComponent,
    KivansaglistamComponent,
    KosarComponent,
    ChipsekComponent,
    GumicukrokComponent,
    EdesGumicukrokComponent,
    SavanyuGumicukrokComponent,
    SosChipsekComponent,
    CsiposChipsekComponent,
    UditokComponent,
    EdesUditokComponent,
    SavanyuUditokComponent,
    RegistrationComponent,
    LoginComponent,
    fantaComponent,
    ArizonaComponent,
    bazookaComponent,
    cheetosComponent,
    ghostComponent,
    nerdsComponent,
    primeComponent,
    pringlesComponent,
    skittlesComponent,
    sourComponent,
    takisComponent,
    warheadsComponent,
    AdminloginComponent,
    CheckoutComponent,
    CandyListComponent,
    CandiesComponent,
    OrdersListComponent,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule, // Importálva a ReactiveFormsModule
    RouterModule,
    FormsModule,
    AngularFireModule.initializeApp(environments.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, provideHttpClient()], // AuthService hozzáadva a providers szekcióhoz
  bootstrap: [AppComponent]
})
export class AppModule { }
