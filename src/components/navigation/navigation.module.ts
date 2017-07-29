import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import {NavigationComponent} from "../../components/navigation/navigation";

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    IonicModule.forRoot(NavigationComponent)
    // IonicModule.forChild(NavigationComponent)
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule {}
