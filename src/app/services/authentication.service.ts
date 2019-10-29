import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private storage: Storage,
    private platform: Platform,
    private router: Router) {}

  authState = new BehaviorSubject(false);

  // Checks if the user is logged in
  // Oona Laitinen 1702547
  isAuthenticated() {
    return window.localStorage.getItem('loggedIn') === 'yes';
  }

  // Checks if the user and the password are correct to login
  // Oona Laitinen 1702547
  login(form: NgForm) {
    const user = form.value.username;
    const password = form.value.password;

    const loggedIn = user === 'Oona' && password === 'OonaPassword';
    window.localStorage.setItem('loggedIn', 'yes');

    if (loggedIn) {
      this.router.navigateByUrl('/home');
    }

    return loggedIn;
  }

  // Logs out the user by deleting stored session
  // Oona Laitinen 1702547
  logout() {
    window.localStorage.removeItem('loggedIn');
    this.router.navigateByUrl('/login');
  }

}
