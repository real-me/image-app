import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {NavigationModule} from "../../components/navigation/navigation.module";
import {DetailPage} from "./detail";
import {BrowsePageModule} from "../browse/browse.module";

@NgModule({
  declarations: [
    DetailPage
  ],
  imports: [
    NavigationModule,
    BrowsePageModule,
    IonicPageModule.forChild(DetailPage)
  ],
  exports: [
    DetailPage
  ]
})
export class DetailPageModule {}
