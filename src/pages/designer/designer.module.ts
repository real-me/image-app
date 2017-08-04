import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {DesignerPage} from "./designer";
import {NavigationModule} from "../../components/navigation/navigation.module";

@NgModule({
  declarations: [
    DesignerPage
  ],
  imports: [
    NavigationModule,
    IonicPageModule.forChild(DesignerPage)
  ],
  exports: [
    DesignerPage
  ]
})
export class DesignerPageModule {}
