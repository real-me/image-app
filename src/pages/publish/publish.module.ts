import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {PublishPage} from "./publish";
import {NavigationModule} from "../../components/navigation/navigation.module";

@NgModule({
  declarations: [
    PublishPage
  ],
  imports: [
    NavigationModule,
    IonicPageModule.forChild(PublishPage)
  ],
  exports: [
    PublishPage
  ]
})
export class PublishPageModule {}
