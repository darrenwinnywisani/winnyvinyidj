import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewDetailsPage } from './../view-details/view-details';
import { AuthProvider } from '../../providers/auth/auth';
import { OnboardingPage } from '../onboarding/onboarding';
import { ViewCatalogProvider } from '../../providers/view-catalog/view-catalog';
import { ListDjProvider } from '../../providers/list-dj/list-dj';



@Component({ 
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public isSearchbarOpened=false;
  searchDj:string="";
  filteredDjs=[];
  searchArray=[];
  searchstring:string;
  tampArr=[];
  djs:any;
  dj:any;
  arrayDJ=[];
  constructor(public navCtrl: NavController,private viewDjprofile:ListDjProvider, private auth:AuthProvider,private viewDJ:ViewCatalogProvider) {
     viewDJ.getDJs().subscribe(results=>{
       this.dj=results;
       this.arrayDJ=this.dj.vinylDJ;
       this.filteredDjs=this.arrayDJ;
       this.tampArr=this.arrayDJ;
       console.log("response",results);
     })
  }
  searchDJ(searchbar){
    this.filteredDjs=this.tampArr;
    var q=searchbar.target.value;
    if(q.trim()==''){
      
        return;
    }
    this.filteredDjs=this.filteredDjs.filter((v)=>{
      if((v.NAME.toLowerCase().indexOf(q.toLowerCase()))>-1){ 
        // this.viewDjprofile.viewProfileDJ=[];
        // this.viewDjprofile.viewProfileDJ.push(v);
        console.log('v',this.viewDjprofile.viewProfileDJ);
         return true;
      }
      return false;
    })
  }
  search(i:number){
    this.viewDjprofile.addDjProfile(i);
    this.navCtrl.setRoot(ViewDetailsPage);
  }
  gotoViewDetails(i:number){
    this.viewDjprofile.addDjProfile(i);
    this.navCtrl.setRoot(ViewDetailsPage);
  }

}