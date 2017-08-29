import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {AddChoicePage} from "./add-choice";

@NgModule({
  declarations: [
    AddChoicePage
  ],
  imports: [
    IonicPageModule.forChild(AddChoicePage)
  ],
  exports: [
    AddChoicePage
  ]
})
export class AddChoicePageModule {}
