import { HomePage } from './../home/home';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Alert,Loading, LoadingController, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {

  userForm:FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCTR: AlertController,private FB:FormBuilder, private authPROV: AuthProvider) {

     this.userForm= this.FB.group({
  
          Date:['',Validators.compose([Validators.required])],
  
           Time:['',Validators.compose([Validators.required,
           Validators.pattern('[0-9]*')
         ])],

          Location:['',Validators.compose([Validators.required ])],

          Email:['',Validators.compose([Validators.required,
           Validators.minLength(8),
         ])],

          Number:['',Validators.compose([Validators.required,
         
          Validators.pattern('[0-9]*')
         ])],
  })


  }


  
  submit(){
    this.authPROV.Register().then(() => {
      alert("you have successfully submitted the form")
      this.navCtrl.setRoot(HomePage);
    });
  }
  //  ionViewDidLoad() {
  //    console.log('ionViewDidLoad BookingPage')
  //  }


}