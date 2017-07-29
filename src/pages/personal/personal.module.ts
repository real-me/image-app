import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {PersonalPage} from "./personal";
import {NavigationModule} from "../../components/navigation/navigation.module";

@NgModule({
  declarations: [
    PersonalPage
  ],
  imports: [
    NavigationModule,
    IonicPageModule.forChild(PersonalPage)
  ],
  exports: [
    PersonalPage
  ]
})
export class PersonalPageModule {}
