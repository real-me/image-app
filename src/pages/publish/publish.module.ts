import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {PublishPage} from "./publish";
import {ShareModule} from "../../modules/share/share.module";

@NgModule({
  declarations: [
    PublishPage
  ],
  imports: [
    ShareModule,
    IonicPageModule.forChild(PublishPage)
  ],
  exports: [
    PublishPage
  ]
})
export class PublishPageModule {}
