import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ViewCatalogProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ViewCatalogProvider {
 
  URL="assets/vinylDJ.json";
  constructor(public http: HttpClient) {
    console.log('Hello ViewCatalogProvider Provider');
  }
  getDJs(){
    return this.http.get(this.URL);
  }

}

