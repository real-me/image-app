import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UtilProvider} from "../../providers/util/util";

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {
  data:any=null;

  constructor(public navCtrl: NavController, public navParams: NavParams,private util: UtilProvider) {
  }

  ionViewDidLoad() {
    this.util.reInitIcon();

    var url = 'tushuo/api/users/me';
    this.util.get(url).then((res: any) => {
      if (!res)return;
      let response = res.json();
      let avatarPostfix='?x-oss-process=image/resize,m_fill,limit_0,w_80,h_80/quality,Q_100';
      response.small_photo = response.photo ? response.photo+avatarPostfix : 'assets/images/detail/avatar.png';
      response.photo = response.photo ? response.photo : 'assets/images/detail/avatar.png';
      this.data=response;
    });

    // url = 'tushuo/api/entries/users/1';
    // this.util.get(url);

    // url = 'tushuo/api/users/register';
    // this.util.post(url,{
    //   'mobile_phone':'15989200209',
    //   'password':'15989200209',
    //   'province_id':1,
    //   'code':'15989200209'
    // });
  }

  //我的精选
  gotoChoiceness(){
    this.util.goto('ChoicenessPage');
  }



  logout() {
    this.util.logout();
  }

}
