import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewDetailsPage } from './../view-details/view-details';
import { AuthProvider } from '../../providers/auth/auth';
import { OnboardingPage } from '../onboarding/onboarding';
import { ViewCatalogProvider } from '../../providers/view-catalog/view-catalog';



@Component({ 
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public isSearchbarOpened=false;

  topics=[];
  dj:any;
  arrayDJ=[];
  constructor(public navCtrl: NavController,private auth:AuthProvider,private viewDJ:ViewCatalogProvider) {
     this.generateTopics();
     viewDJ.getDJs().subscribe(results=>{
       this.dj=results;
       this.arrayDJ=this.dj.vinylDJ;
       console.log("response",results);
     })
  }

  
  generateTopics(){
    this.topics=["Dj clock","DJ balck Coffee","Dj ganyani"];
  }

  getTopics(ev:any){
     this.generateTopics();
     let serVal=ev.target.value;
      if(serVal && serVal.trim() !=''){
         this.topics=this.topics.filter((topic)=>{
           return (topic.toLowerCase().indexOf(serVal.toLowerCase))>-1
         });
      }
  }
   goToDetails(){
    this.navCtrl.push(ViewDetailsPage);
  }


  onSearch(event){
    
  }
}