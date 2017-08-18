import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {NavigationModule} from "../../components/navigation/navigation.module";
import {ChoicePage} from "./choice";
import {CoreModule} from "../../modules/core/core.module";

@NgModule({
  declarations: [
    ChoicePage
  ],
  imports: [
    NavigationModule,
    CoreModule,
    IonicPageModule.forChild(ChoicePage)
  ],
  exports: [
    ChoicePage
  ]
})
export class ChoicePageModule {}
