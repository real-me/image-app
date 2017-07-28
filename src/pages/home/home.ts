import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {LoginProvider} from "../../providers/login/login";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private loginService:LoginProvider) {

  }

  //-----------------需要登录的页面必须有的方法(START)
  ionViewDidLoad() {
    this.loginService.checkLogin(this).then(isLogin =>{
        isLogin&&this.init();
    });
  }

  //从登录页面登录成功需要执行的操作
  loginSuccess(){
    this.init();
  }

  //初始化
  init(){

  }
  //-----------------需要登录的页面必须有的方法(END)



}
