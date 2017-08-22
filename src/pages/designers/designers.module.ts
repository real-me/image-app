import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {NavigationModule} from "../../components/navigation/navigation.module";
import {DistrictsProvider} from "../../providers/districts/districts";
import {DesignersProvider} from "../../providers/designers/designers";
import {DesignersPage} from "./designers";

@NgModule({
  declarations: [
    DesignersPage
  ],
  imports: [
    NavigationModule,
    IonicPageModule.forChild(DesignersPage)
  ],
  exports: [
    DesignersPage
  ],
  providers: [
    DistrictsProvider,
    DesignersProvider
  ]
})
export class DesignersPageModule {}
