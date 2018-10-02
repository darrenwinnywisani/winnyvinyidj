import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController } from 'ionic-angular';
import { AccountProvider } from '../../providers/account/account';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  userProfile:any;
  email:string;
  firstName:string;
  lastName:string;



  constructor(public navCtrl: NavController, public navParams: NavParams,private accService:AccountProvider,public alertCtrl:AlertController,private auth:AuthProvider) {

    this.userProfile=this.navParams.get('userProfile');
 
  }

  
  ionViewCanEnter(){
    this.auth.getUserProfile().off;
  }
  ionViewDidLoad() {
    this.auth.getUserProfile().on('value',userprofileSnapShot=>{
      this.userProfile=userprofileSnapShot.val();
      this.email=userprofileSnapShot.val().email;
      this.firstName=userprofileSnapShot.val().firstName;
      this.lastName=userprofileSnapShot.val().lastName;
      
    })
  }

 updateEmail(){

  const alert:Alert=this.alertCtrl.create({

    inputs:[{
      name:'oldEmail',
      placeholder:'enter old email',
   type:'email'
    },{
      name:'newEmail',
      placeholder:'enter new email',
      type:'email'
  
    }],
    buttons:[{
      text:'cancel',
    },{
      text:'save',
      handler:data =>{
        this.accService.updateEmail(data.newEmail,data.oldEmail)
        .catch(error=>{
          console.log('error message from catch',error.message)
         let newAlert:Alert=this.alertCtrl.create({
           message:error.message
         })
         newAlert.present(); 
        })
      }
    }],
   
  })
  alert.present()
  }
  goback(){
  this.navCtrl.setRoot(HomePage);
 }
}