import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {SelectPhotoPage} from "./select-photo";
import {PhotoLibrary} from "@ionic-native/photo-library";
import {ShareModule} from "../../modules/share/share.module";

@NgModule({
  declarations: [
    SelectPhotoPage
  ],
  imports: [
    ShareModule,
    IonicPageModule.forChild(SelectPhotoPage)
  ],
  providers: [
    PhotoLibrary
  ],
  exports: [
    SelectPhotoPage
  ]
})
export class SelectPhotoPageModule {}
