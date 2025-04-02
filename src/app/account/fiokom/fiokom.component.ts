import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-fiokom',
    templateUrl: './fiokom.component.html',
    styleUrls: ['./fiokom.component.css'],
    standalone: false
})
export class FiokomComponent implements OnInit {
  userEmail: string = ''; 

  constructor(private router: Router) {}

  ngOnInit() {
    const storedEmail = localStorage.getItem('loggedInUser');
    
    if (storedEmail) {
      this.userEmail = storedEmail;
      console.log('Bejelentkezett felhasználó e-mail címe:', this.userEmail);
    } else {
      console.log('Nincs elmentett e-mail cím.');
    }
  }

  editProfile() {
    console.log('Profil szerkesztése');
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }

  purchase() {
    this.router.navigate(['/']); 
  }
}






// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-fiokom',
//   templateUrl: './fiokom.component.html',
//   styleUrls: ['./fiokom.component.css']
// })
// export class FiokomComponent implements OnInit {
//   userEmail: string = 'email@example.com'; // Alapértelmezett email

//   constructor(private router: Router) {}

//   ngOnInit() {
//     const storedEmail = localStorage.getItem('loggedInUser');
//     this.userEmail = storedEmail ? storedEmail : 'email@example.com';
//   }

//   editProfile() {
//     console.log('Profil szerkesztése');
//   }

//   logout() {
//     localStorage.removeItem('loggedInUser');
//     this.router.navigate(['/login']);
//   }
// }












