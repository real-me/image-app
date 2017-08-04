import {Component, Input} from '@angular/core';
import {Events, NavController} from "ionic-angular";

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

  constructor(public navCtrl: NavController,public events: Events) {
  }

  gotoPage(index:number){
    let name=this.navCtrl.getActive().component.name;
    if(index==1){
      if(name=='HomePage'){
        console.log('name')
        this.events.publish('HomePage:refresh');
        console.log('----------')
      }else{
        this.navCtrl.setRoot('HomePage');
      }
    }else if(index==2){
      this.navCtrl.setRoot('DesignerPage');
    }else if(index==3){
      this.navCtrl.setRoot('ChoicenessPage');
    }else if(index==4){
      this.navCtrl.setRoot('PersonalPage');
    }else if(index==5){
      this.navCtrl.setRoot('PublishPage');
    }
  }
}
