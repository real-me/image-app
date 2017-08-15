import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {BrowsePage} from "./browse";

@NgModule({
  declarations: [
    BrowsePage
  ],
  imports: [
    IonicPageModule.forChild(BrowsePage)
  ],
  exports: [
    BrowsePage
  ]
})
export class BrowsePageModule {}
