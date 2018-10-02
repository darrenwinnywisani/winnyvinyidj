import { Injectable } from '@angular/core';
import 'firebase/auth';
import 'firebase/database';
import 'rxjs/add/operator/map';
import firebase, { User } from 'firebase/app';
import 'firebase/database'
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  userProfile:firebase.database.Reference;
  currentUser:User;

  constructor() {

    firebase.auth().onAuthStateChanged(user=>{
      if(user){
      this.currentUser =user;
      this.userProfile=firebase.database().ref(`userProfile/${user.uid}`)
      }
    })
    console.log('Hello ProfilerProvider Provider');
  }

  getUserProfile():firebase.database.Reference{
    return this.userProfile
  }
  signOut():Promise<any>{
    return firebase.auth().signOut();
  }
  //authenication using email & 
signIn(email:string,password:string):Promise<any>{
  return firebase.auth().signInWithEmailAndPassword(email,password);
}
passwordreset(email:string) {
    var promise = new Promise((resolve, reject) => {
      firebase.auth().sendPasswordResetEmail(email).then(() => {
        resolve({ success: true });
      }).catch((err) => {
        reject(err);
      })
    })
    return promise;
}
signUp(email:string,password:string):Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(newUserCred=>{
      firebase.database().ref(`/userProfile/${newUserCred.user.uid}/email`).set(email);
    }).catch(error=>{
      throw new Error(error);
    })
  }


  Register():Promise<any>{
    return firebase.auth().signOut();
  }
}


