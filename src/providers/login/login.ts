import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import {App, NavControllerBase} from "ionic-angular";

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoginProvider {

  navCtrl:NavControllerBase;
  /**
   * 是否已经登录
   * @type {boolean}
   */
  // isLogin:boolean=false;

  /**
   * 令牌
   * @type {string}
   */
  token:string='';

  /**
   * 用户信息
   * @type {{name: any; realName: any; role: any}}
   */
  user:object={
    name:null,
    realName:null,
    role:null
  };

  constructor(private app: App,public http: Http,private storage: Storage) {
    // this.clear();
  }

  getNav(){
    if(!this.navCtrl){
      this.navCtrl=this.app.getRootNav();
      // this.navCtrl=this.app.getActiveNavs()[0];
    }
    return this.navCtrl;
  }

  //加载数据
  load(){
    this.storage.get('user').then(val => {
      console.log(val);
    });
  }

  //退出登录
  logout() {
    this.clear();
    this.getNav().setRoot('LoginPage');
    // this.storage.remove('user');
    // this.storage.remove('token').then(data => this.getNav().setRoot('LoginPage'));
  }

  //清除数据
  clear(){
    this.storage.remove('user');
    this.storage.remove('token');
  }

  /*//登录
  login(data) {
    let url='https://dev.jintangjiang.cn/tushuo/api/users/login';
    return this.http.post(url, data).toPromise()
      .then(res => {
        //登录成功,保存token和用户信息

        return true;
        // console.log(res.json());
        // this.navCtrl.pop();
      })
      .catch(err => {
        //登录出错
        return false;
        // this.loading.dismiss();
        // this.hasError=true;
        // this.handleError(err);
      });
  }*/

  //登录
  login(data) {
    let url='https://dev-api.gzdmc.net/v1/session?source_from=pc&ie&_t=';
    return this.http.post(url, data).toPromise()
      .then(res => {
        //登录成功,保存token和用户信息
        console.log(res);
        console.log(res.json());
        let response=res.json();
        // if(response.code)
        if(200<=response.code&&response.code<400 ){
          //登录成功,保存token和用户信息
          this.storage.set('token',response._t);
          this.storage.set('user',response.data);
          return true;
        }
        else{
          this.clear();
          return false;
        }
        // console.log(res.json());
        // this.navCtrl.pop();
      })
      .catch(err => {
        //登录出错
        // this.clear();
        return false;
        // this.loading.dismiss();
        // this.hasError=true;
        // this.handleError(err);
      });
  }

  //检查是否登录
  checkLogin(page:any,isInLogin?:boolean){
    return this.isLogin().then(value=>{
      // console.log(this.getNav().getActive().component.name);
      if(!isInLogin&&!value){
        //当前不是登录页面且未登录
        this.getNav().push('LoginPage',{page:page});
      }
      return value;
    });
  }

  //是否已经登录
  isLogin(){
    return this.storage.get('user').then(value => {
      return value?true:false;
    });
  }

}
