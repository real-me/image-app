import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from "./home";
import {NavigationModule} from "../../components/navigation/navigation.module";
import {RepeatDirective} from "../../directives/repeat/repeat";

@NgModule({
  declarations: [
    HomePage,
    RepeatDirective
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
