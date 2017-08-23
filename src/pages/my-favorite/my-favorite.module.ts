import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {MyFavoritePage} from "./my-favorite";
import {CoreModule} from "../../modules/core/core.module";

@NgModule({
  declarations: [
    MyFavoritePage
  ],
  imports: [
    CoreModule,
    IonicPageModule.forChild(MyFavoritePage)
  ],
  exports: [
    MyFavoritePage
  ]
})
export class MyFavoritePageModule {}
