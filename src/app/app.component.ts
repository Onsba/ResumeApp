import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  // List of navigation items - Oona Laitinen 1702547
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthenticationService
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // Create the navigation items with their properties - Oona Laitinen 1702547
  sideMenu() {
    this.navigate =
    [
      {
        title : 'About',
        url   : '/home',
        icon  : 'information-circle-outline'
      },
      {
        title : 'CV',
        url   : '/cv',
        icon  : 'document'
      },
      {
        title : 'Project Work',
        url   : '/projects',
        icon  : 'checkbox-outline'
      },
      {
        title : 'Skills',
        url   : '/skills',
        icon  : 'stats'
      },
      {
        title : 'Extra Curriculum',
        url   : '/extra',
        icon  : 'brush'
      },
      {
        title : 'Contact',
        url   : '/contact',
        icon  : 'contacts'
      },
    ];
  }

  // Calls the logout function - Oona Laitinen 1702547
  logout() {
    this.auth.logout().then(res => {
    }, err => {
      console.log(err);
    });
  }
}
