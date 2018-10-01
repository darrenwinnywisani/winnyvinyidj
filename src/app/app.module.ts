import { UserprofilePage } from './../pages/userprofile/userprofile';
import { SignupPage } from './../pages/signup/signup';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import * as firebase from 'firebase';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { AccountProvider } from '../providers/account/account';
import { ViewDetailsPage } from '../pages/view-details/view-details';
import { ResetPage } from '../pages/reset/reset';
import { LoginPage } from '../pages/login/login';
import { ViewCatalogProvider } from '../providers/view-catalog/view-catalog';
import { HttpClientModule } from '@angular/common/http';



export const config = {
  apiKey: "AIzaSyDLHFkSNF8TD6wR6x4-dWNiFZe6CFL4s4I",
  authDomain: "vinyldjapp.firebaseapp.com",
  databaseURL: "https://vinyldjapp.firebaseio.com",
  projectId: "vinyldjapp",
  storageBucket: "vinyldjapp.appspot.com",
  messagingSenderId: "256212778849"
};
firebase.initializeApp(config);



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    OnboardingPage,
    ResetPage,
    SignupPage,
    LoginPage,
    UserprofilePage,
   ViewDetailsPage

  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    OnboardingPage,
    ViewDetailsPage,
    ResetPage,
    LoginPage,
    SignupPage,
    UserprofilePage,
  ],

  providers: [
    StatusBar,
    SplashScreen,
   
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AccountProvider,
    ViewCatalogProvider,

  ]
})
export class AppModule {}
