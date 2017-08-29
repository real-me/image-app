import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UtilProvider} from "../../providers/util/util";


@IonicPage()
@Component({
  selector: 'page-add-choice',
  templateUrl: 'add-choice.html',
})
export class AddChoicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private util: UtilProvider) {
  }

  //返回上一页
  goback(){
    this.util.goback();
  }

  //是否可以返回上一页
  canGoback(){
    return this.util.canGoback();
  }

  //是否发生了改变
  isChanged(){
    let result=false;
    result=true;
    return result;
  }

  //保存
  save(){

  }


}
