import { SignupPage } from './../signup/signup';
import { HomePage } from './../home/home';
import { ResetPage } from './../reset/reset';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import {Alert,AlertController,Loading,LoadingController, IonicPage, NavController } from 'ionic-angular';
import 'firebase/database';
import firebase from 'firebase/app';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private load:Loading;

  email:string;
  password:string;

    constructor(public navCtrl: NavController,
       private alertCtrl:AlertController,
       private loadingCTR: LoadingController, 
       private authProvider:AuthProvider ) {
    }
  
ionViewDidLoad() {
  console.log('ionViewDidLoad  SiginPage');
}
goToSignUp():void {
  this.navCtrl.setRoot( SignupPage);
} 
Google(){

  let loader = this.loadingCTR.create({
    content: 'Please wait'
  })

}
signIn(){
  if(!this.email && !this.password){
  console.log('Enter email and address')
  }else{
    this.authProvider.signIn(this.email, this.password)
    .then(authData=>{
      this.load.dismiss().then(()=>{
    this.navCtrl.setRoot(HomePage);
      })
    },error=>{
      this.load.dismiss().then(()=>{
        const alert :Alert = this.alertCtrl.create({
          message:error.message,
          buttons:[{text:'ok',role: 'cancel'}]
        })
        alert.present();
      })
    })
    this.load=this.loadingCTR.create();
    this.load.present()
    }
  }
  forgotPassword(){
      this.navCtrl.push(ResetPage);
    
  } 
  
  goback(){
    this.navCtrl.setRoot(HomePage);
   }
}
