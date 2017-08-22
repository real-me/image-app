import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {DesignerPage} from "./designer";
import {CoreModule} from "../../modules/core/core.module";

@NgModule({
  declarations: [
    DesignerPage
  ],
  imports: [
    CoreModule,
    IonicPageModule.forChild(DesignerPage)
  ],
  exports: [
    DesignerPage
  ]
})
export class DesignerPageModule {}
