import firebase, { User } from 'firebase/app';
import 'firebase/database';
import { Injectable } from '@angular/core';

/*
  Generated class for the AccountProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AccountProvider {
  userProfile:firebase.database.Reference;
  currentUser:User;

  constructor() {

    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.currentUser=user;
        this.userProfile=firebase.database().ref(`/userProfile/${user.uid}`)
      }
    })
  }
  getUserProfile():firebase.database.Reference{
    return this.userProfile;
  }
  updateName(firstName:string,lastName:string):Promise<any>{
     return this.userProfile.update({firstName,lastName})
  }
}
