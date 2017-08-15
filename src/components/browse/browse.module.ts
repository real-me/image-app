import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import {BrowseComponent} from "./browse";

@NgModule({
  declarations: [
    BrowseComponent
  ],
  imports: [
    IonicModule.forRoot(BrowseComponent)
  ],
  exports: [
    BrowseComponent
  ]
})
export class BrowseModule {}
