import { AccountProvider } from './../../providers/account/account';
import { HomePage } from './../home/home';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Alert,Loading, LoadingController, AlertController, ToastController } from 'ionic-angular';
import firebase, { User} from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


  firstName:string;
  lastName:string;
  email:string;
  private load:Loading;
  cpassword:string;
  password:string;
  userProfile:firebase.database.Reference;
  currentUser:User;

  constructor(public navCtrl: NavController, private account:AccountProvider, private loadingCTR: LoadingController,
    private alertCTR: AlertController, private authPROV: AuthProvider) {
      firebase.auth().onAuthStateChanged(user=>{
        if(user){
          this.currentUser=user;
          this.userProfile=firebase.database().ref(`/userProfile/${user.uid}`)
        }
      })
  }
  signUp(){
    if(!this.email && !this.password){
      console.log('error');
    }else{
      this.authPROV.signUp(this.email,this.password)
      .then(authPROV =>{
        this.load.dismiss().then(()=>{
          this.account.updateName(this.firstName,this.lastName);
          this.navCtrl.setRoot(HomePage);
        })
      },error=>{
        this.load.dismiss().then(()=>{
          const alert :Alert = this.alertCTR.create({
            message:error.message,
            buttons:[{text:'ok',role:'cancel'}]
          })
          alert.present();
        })
      })
      this.load = this.loadingCTR.create();
      this.load.present();
    }
{
  {
    let alert: Alert =this.alertCTR.create({
      
      subTitle:'You have successfully signed up',
      buttons:[{
        text:'OK',
        handler:data=>{
        this.navCtrl.setRoot(HomePage)
        }
    
      }]
     })
     alert.present();
    }
}


  }
  goback(){
    this.navCtrl.setRoot(HomePage);
   }
}
