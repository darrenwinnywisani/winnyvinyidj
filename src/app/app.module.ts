
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
import { ListDjProvider } from '../providers/list-dj/list-dj';
import { AccountPage } from '../pages/account/account';
import {BookingPage} from '../pages/booking/booking';


export const config = {
  apiKey: "AIzaSyB6wFnNa8EY1IRpags_2tUXbo9qbe2HPx0",
  authDomain: "vinyl-8fb36.firebaseapp.com",
  databaseURL: "https://vinyl-8fb36.firebaseio.com",
  projectId: "vinyl-8fb36",
  storageBucket: "vinyl-8fb36.appspot.com",
  messagingSenderId: "973224201180"
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
    AccountPage,
    ViewDetailsPage,
    BookingPage

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
    AccountPage,
    BookingPage,
  ],

  providers: [
    StatusBar,
    SplashScreen,
   
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AccountProvider,
    ViewCatalogProvider,
    ListDjProvider,

  ]
})
export class AppModule {}
