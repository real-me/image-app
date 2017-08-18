import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import {RepeatDirective} from "../../directives/repeat/repeat";

@NgModule({
  declarations: [
    RepeatDirective
  ],
  imports: [
    IonicModule.forRoot(RepeatDirective)
  ],
  exports: [
    RepeatDirective
  ]
})
export class CoreModule {}
