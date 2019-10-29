import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private auth: AuthenticationService, private router: Router) {}

    // Checks if user is authenticated to view requested page
    // Oona Laitinen 1702547
    canActivate(): boolean {
      if (this.auth.isAuthenticated()) {
        return true;
      }

      this.router.navigateByUrl('/login');
      return false;
    }
}
