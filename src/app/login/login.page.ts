import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private router: Router, private auth: AuthenticationService) { }

  // Attempt to login, goes to the main page if successful - Oona Laitinen 1702547
  login(form) {
    this.auth.login(form.form.value).then(res => {
      document.getElementById('bad-login').style.display = 'none';
      this.router.navigateByUrl('');
    }, err => {
      document.getElementById('bad-login').style.display = 'block';
      console.log(err);
    });
  }

}
