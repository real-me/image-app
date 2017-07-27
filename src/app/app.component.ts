import {Component, ViewChild} from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginProvider} from "../providers/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = '';
  @ViewChild('nav') nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,login:LoginProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      if(!login.isLogin){
        this.nav.push('LoginPage');
      }
    });
  }
}

