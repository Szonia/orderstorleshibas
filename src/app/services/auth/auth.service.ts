import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { getAuth, GoogleAuthProvider, signInWithPopup, sendEmailVerification, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedUser: any;
  private loggedUserSubject = new BehaviorSubject<any>(null);

  constructor(private angularfireauth: AngularFireAuth, private router: Router) {
    this.angularfireauth.authState.subscribe(user => {
      this.loggedUser = user;
      this.loggedUserSubject.next(user);
    });
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(getAuth(), email, password) 
      .then(async () => {
        const user = await this.angularfireauth.currentUser;
        if (user) {
          sendEmailVerification(user);  
          console.log('Visszaigazoló email elküldve!');
        }
        this.router.navigate(['/login']); 
        return { success: true };
      })
      .catch(error => {
        console.error("Regisztrációs hiba:", error);
        return { success: false };
      });
  }

  login(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(getAuth(), email, password) 
      .then(cred => {
        if (cred.user) {
          this.loggedUserSubject.next(cred.user);
          console.log("Bejelentkezés sikeres!");
          if (!cred.user.emailVerified) {
            alert('Kérjük, erősítse meg az email címét!');
            this.router.navigate(['/login']); 
            return { success: false };
          }
          this.router.navigate(['/fiokom']); 
          return { success: true };
        } else {
          return { success: false };
        }
      })
      .catch((error: any) => {
        console.error("Hiba a bejelentkezéskor:", error);
        return { success: false };
      });
  }

  googleLogin(): Promise<any> {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    return signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log("Google login sikeres!", user);

        if (!user.emailVerified) {
          sendEmailVerification(user);
          console.log('Visszaigazoló email elküldve!');
        }

        this.loggedUserSubject.next(user);
        this.router.navigate(['/fiokom']);
        return { success: true };
      })
      .catch((error: any) => { 
        console.error("Google login hiba:", error);
        return { success: false };
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
