import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {NavigationModule} from "../../components/navigation/navigation.module";
import {DetailPage} from "./detail";

@NgModule({
  declarations: [
    DetailPage
  ],
  imports: [
    NavigationModule,
    IonicPageModule.forChild(DetailPage)
  ],
  exports: [
    DetailPage
  ]
})
export class DetailPageModule {}
