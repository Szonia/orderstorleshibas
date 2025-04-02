import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string = '';

  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.auth.login(email, password)
        .then(res => {
          if (res.success) {
            this.router.navigate(['/fiokom']);
          } else {
            this.loginError = 'Bejelentkezési hiba történt';
          }
        })
        .catch(err => {
          this.loginError = 'Hiba történt a bejelentkezés során';
        });
    }
  }

  googleLogin() {
    this.auth.googleLogin().then(res => {
      if (res.success) {
        this.router.navigate(['/fiokom']);
      } else {
        this.loginError = 'Google bejelentkezési hiba történt';
      }
    }).catch(err => {
      this.loginError = 'Hiba történt a Google bejelentkezés során';
    });
  }
}
