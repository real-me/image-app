import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from "./home";
import {NavigationModule} from "../../components/navigation/navigation.module";

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    NavigationModule,
    IonicPageModule.forChild(HomePage)
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}