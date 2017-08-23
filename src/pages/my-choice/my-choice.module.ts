import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {MyChoicePage} from "./my-choice";

@NgModule({
  declarations: [
    MyChoicePage
  ],
  imports: [
    IonicPageModule.forChild(MyChoicePage)
  ],
  exports: [
    MyChoicePage
  ]
})
export class MyChoicePageModule {}
