import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ListDjProvider } from '../../providers/list-dj/list-dj';
import { ViewCatalogProvider } from '../../providers/view-catalog/view-catalog';

/**
 * Generated class for the ViewSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-search',
  templateUrl: 'view-search.html',
})
export class ViewSearchPage {
  dj:any;
  ArrayDJ:any;
  arrayDJ=[];
  constructor(public navCtrl: NavController,private viewDJProfile:ListDjProvider, public navParams: NavParams,private viewDJ:ViewCatalogProvider){
      this.arrayDJ=this.viewDJProfile.getAddedDj();
      console.log('profile',this.arrayDJ);
  }
  goback(){
    this.viewDJProfile.viewProfileDJ=[];
    this.navCtrl.setRoot(HomePage);
  }
}
