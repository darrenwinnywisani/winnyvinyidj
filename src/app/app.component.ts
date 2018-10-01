
import { SignupPage } from './../pages/signup/signup';
import { UserprofilePage } from './../pages/userprofile/userprofile';
import { OnboardingPage } from './../pages/onboarding/onboarding';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = OnboardingPage;

  private HomePage;
  private UserprofilePage;
  private SignupPage;
  private LoginPage;

  constructor(public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen,private auth:AuthProvider) {
    this.initializeApp();
    this.HomePage =HomePage;
    this.UserprofilePage= UserprofilePage;
    this.SignupPage = SignupPage;
    this.LoginPage = LoginPage;


  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  
    openPage(page) {
      this.rootPage =page; 
  }
  signOut(){
    this.auth.signOut().then(() => {
      alert("you have successfully signed out")
      this.rootPage(OnboardingPage);
    });
  }
}