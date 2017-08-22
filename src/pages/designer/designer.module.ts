import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {DesignerPage} from "./designer";
import {NavigationModule} from "../../components/navigation/navigation.module";
import {DistrictsProvider} from "../../providers/districts/districts";
import {DesignersProvider} from "../../providers/designers/designers";

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
  ],
  providers: [
    DistrictsProvider,
    DesignersProvider
  ]
})
export class DesignerPageModule {}
