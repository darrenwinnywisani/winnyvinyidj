import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserprofoilePage } from './userprofoile';

@NgModule({
  declarations: [
    UserprofoilePage,
  ],
  imports: [
    IonicPageModule.forChild(UserprofoilePage),
  ],
})
export class UserprofoilePageModule {}
