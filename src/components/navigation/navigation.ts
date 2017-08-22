import {Component, Input} from '@angular/core';
import {Events, NavController} from "ionic-angular";

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.html'
})
export class NavigationComponent {

  @Input() index: number=0;

  constructor(public navCtrl: NavController,public events: Events) {
  }

  gotoPage(index:number){
    // let name=this.navCtrl.getActive().component.name;
    let name=this.navCtrl.getActive().id;
    // console.log(name);
    // console.log(this.navCtrl.last().id);
    // console.log(this.navCtrl.getActive());
    // console.log(this.navCtrl.getViews());
    if(index==1){
      if(name=='HomePage'){
        this.events.publish('HomePage:refresh');
      }else{
        this.navCtrl.setRoot('HomePage');
      }
    }else if(index==2){
      this.navCtrl.setRoot('DesignersPage');
    }else if(index==3){
      this.navCtrl.setRoot('ChoicenessPage');
    }else if(index==4){
      this.navCtrl.setRoot('PersonalPage');
    }else if(index==5){
      this.navCtrl.setRoot('PublishPage');
    }
  }
}
