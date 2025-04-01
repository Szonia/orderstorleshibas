import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getCurrentUserEmail() {
    throw new Error('Method not implemented.');
  }
  loggedUser: any;
  private loggedUserSubject = new BehaviorSubject<any>(null);

  constructor(private angularfireauth: AngularFireAuth, private router: Router) {
    this.angularfireauth.authState.subscribe(user => {
      this.loggedUser = user;
      this.loggedUserSubject.next(user);
    });
  }

  
  register(email: string, password: string) {
    return this.angularfireauth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Sikeres regisztráció!');
        this.router.navigate(['login']);  
        return { success: true, message: 'Sikeres regisztráció!' };
      })
      .catch(error => {
        console.error("Regisztrációs hiba:", error);
        return { success: false, message: error.message };
      });
  }

  
  login(email: string, password: string): Promise<any> {
    return this.angularfireauth.signInWithEmailAndPassword(email, password)
      .then(cred => {
        if (cred.user) {
          this.loggedUserSubject.next(cred.user);
          console.log("Bejelentkezés sikeres!");
          this.router.navigate(['/candies']);  
          return { success: true };
        } else {
          return { success: false, message: 'Az email cím vagy jelszó nem megfelelő' };
        }
      })
      .catch((error: any) => {
        console.error("Hiba a bejelentkezéskor:", error);
        return { success: false, message: error.message };
      });
  }

 
  logout(): Promise<void> {
    return this.angularfireauth.signOut().then(() => {
      this.loggedUserSubject.next(null);
    });
  }

  getCurrentUser() {
    return this.loggedUserSubject.asObservable();
  }
}




// import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { Router } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   loggedUser: any;
//   private loggedUserSubject = new BehaviorSubject<any>(null);

//   constructor(private angularfireauth: AngularFireAuth, private router: Router) {
//     this.angularfireauth.authState.subscribe(user => {
//       this.loggedUser = user;
//       this.loggedUserSubject.next(user);
//     });
//   }

  
//   register(email: string, password: string) {
//     return this.angularfireauth.createUserWithEmailAndPassword(email, password)
//       .then(() => {
//         console.log('Sikeres regisztráció!');
//         this.router.navigate(['login']);  
//         return { success: true, message: 'Sikeres regisztráció!' };
//       })
//       .catch(error => {
//         console.error("Regisztrációs hiba:", error);
//         return { success: false, message: error.message };
//       });
//   }

  
//   login(email: string, password: string): Promise<any> {
//     return this.angularfireauth.signInWithEmailAndPassword(email, password)
//       .then(cred => {
//         if (cred.user) {
//           this.loggedUserSubject.next(cred.user);
//           console.log("Bejelentkezés sikeres!");
//           this.router.navigate(['/candies']);  
//           return { success: true };
//         } else {
//           return { success: false, message: 'Az email cím vagy jelszó nem megfelelő' };
//         }
//       })
//       .catch((error: any) => {
//         console.error("Hiba a bejelentkezéskor:", error);
//         return { success: false, message: error.message };
//       });
//   }

 
//   logout(): Promise<void> {
//     return this.angularfireauth.signOut().then(() => {
//       this.loggedUserSubject.next(null);
//     });
//   }

//   getCurrentUser() {
//     return this.loggedUserSubject.asObservable();
//   }
// }