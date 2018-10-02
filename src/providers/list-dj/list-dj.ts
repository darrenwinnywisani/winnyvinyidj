import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViewCatalogProvider } from '../view-catalog/view-catalog';

/*
  Generated class for the ListDjProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListDjProvider {
  dj:any;
  arrayDJ=[];
  viewProfileDJ=[];
  view=[];
  constructor(private viewDJ:ViewCatalogProvider) {
    viewDJ.getDJs().subscribe(results=>{
      this.dj=results;
      this.arrayDJ=this.dj.vinylDJ;
      this.view=this.arrayDJ;
      console.log("list",this.view);
    })
  }
  addDjProfile(i:number){
     this.viewProfileDJ.push(this.view[i]);
     console.log("view",this.viewProfileDJ);
  }
  getfilteredDj(){
     return this.viewProfileDJ;
  }
  getAddedDj():any{
     return this.viewProfileDJ;
  }
  removeDJ(){
     this.viewProfileDJ.splice(1,1);
  }
}
