import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UtilProvider} from "../../providers/util/util";

@IonicPage()
@Component({
  selector: 'page-publish',
  templateUrl: 'publish.html',
})
export class PublishPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private util: UtilProvider) {

  }

  //关闭当前页面
  close() {
    this.util.goback();
  }

  //更换图片
  changeImage() {
    this.util.goback();
  }

}
