import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router, private afAuth: AngularFireAuth) {
  }

  authState = new BehaviorSubject(false);

  // Checks if the user user is logged in and can access the pages - Oona Laitinen 1702547
  canActivate() {
    if (window.localStorage.getItem('loggedIn') !== 'yes') {
      this.router.navigateByUrl('/login');
      return false;
    }

    return true;
  }

  // Checks if the user and the password are correct to login - Oona Laitinen 1702547
  login(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(() => {
          window.localStorage.setItem('loggedIn', 'yes');
          resolve();
        }).catch((error) => {
          console.log(error);
          reject();
        });
    });
  }

  // Logs out the user by deleting stored session - Oona Laitinen 1702547
  logout() {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signOut()
        .then(() => {
          window.localStorage.removeItem('loggedIn');
          this.router.navigateByUrl('/login');
          resolve();
        }).catch((error) => {
          console.log(error);
          reject();
        });
    });
  }
}
