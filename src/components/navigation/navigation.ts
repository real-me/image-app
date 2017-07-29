import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";

/**
 * Generated class for the NavigationComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'navigation',
  templateUrl: 'navigation.html'
})
export class NavigationComponent {

  @Input() index: number=0;

  constructor(public navCtrl: NavController) {
  }

  gotoPage(index:number){
    if(index==1){
      this.navCtrl.setRoot('HomePage');
    }else if(index==2){

    }else if(index==3){

    }else if(index==4){
      this.navCtrl.setRoot('PersonalPage');
    }
  }
}
