import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewCatalogProvider } from '../../providers/view-catalog/view-catalog';
import { ListDjProvider } from '../../providers/list-dj/list-dj';
import { HomePage } from '../home/home';
import { BookingPage } from '../booking/booking';

/**
 * Generated class for the ViewDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-details',
  templateUrl: 'view-details.html',
})
export class ViewDetailsPage {

  dj:any;
  ArrayDJ:any;
  arrayDJ=[];
  constructor(public navCtrl: NavController,private viewDJProfile:ListDjProvider, public navParams: NavParams,private viewDJ:ViewCatalogProvider){
      this.arrayDJ=this.viewDJProfile.viewProfileDJ;
      console.log('profile',this.arrayDJ);
  }
  goback(){
    this.viewDJProfile.viewProfileDJ=[];
    this.navCtrl.setRoot(HomePage);
  }

  GetBooking(){
    this.navCtrl.push(BookingPage);
  }
}