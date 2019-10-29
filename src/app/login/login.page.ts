import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
  }

  // Attempt to login and show error message on failure
  // Oona Laitinen 1702547
  login(form) {
    if (!this.auth.login(form)) {
      document.getElementById('bad-login').style.display = 'block';
    } else {
      document.getElementById('bad-login').style.display = 'none';
    }
  }

}
