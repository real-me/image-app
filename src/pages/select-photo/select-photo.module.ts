import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {SelectPhotoPage} from "./select-photo";

@NgModule({
  declarations: [
    SelectPhotoPage
  ],
  imports: [
    IonicPageModule.forChild(SelectPhotoPage)
  ],
  exports: [
    SelectPhotoPage
  ]
})
export class SelectPhotoPageModule {}
