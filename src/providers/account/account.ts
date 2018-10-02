import firebase, { User } from 'firebase/app';
import 'firebase/database';
import { Injectable } from '@angular/core';


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
 updateEmail(newEmail:string,oldEmail:string):Promise<any>{
   const credentials:firebase.auth.AuthCredential=
   firebase.auth.EmailAuthProvider.credential(this.currentUser.email,oldEmail);
   return this.currentUser.reauthenticateWithCredential(credentials).then(user=>{
     this.currentUser.updateEmail(newEmail).then(user=>{
       console.log('Email has been changed')
     })
   }).catch(error=>{
     console.log(error);
   })
  
 }
}

