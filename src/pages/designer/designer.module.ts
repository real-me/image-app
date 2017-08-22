import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {DesignerPage} from "./designer";

@NgModule({
  declarations: [
    DesignerPage
  ],
  imports: [
    IonicPageModule.forChild(DesignerPage)
  ],
  exports: [
    DesignerPage
  ]
})
export class DesignerPageModule {}
