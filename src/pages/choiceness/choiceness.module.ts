import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ChoicenessPage} from "./choiceness";
import {NavigationModule} from "../../components/navigation/navigation.module";

@NgModule({
  declarations: [
    ChoicenessPage
  ],
  imports: [
    NavigationModule,
    IonicPageModule.forChild(ChoicenessPage)
  ],
  exports: [
    ChoicenessPage
  ]
})
export class ChoicenessPageModule {}
