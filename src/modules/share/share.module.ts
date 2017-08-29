import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import {CdvPhotoLibraryPipe} from "../../pipes/cdv-photo-library/cdv-photo-library";

@NgModule({
  declarations: [
    CdvPhotoLibraryPipe
  ],
  imports: [
    // IonicModule.forRoot(CdvPhotoLibraryPipe)
  ],
  exports: [
    CdvPhotoLibraryPipe
  ]
})
export class ShareModule {}
