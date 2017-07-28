import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {LoginProvider} from "../../providers/login/login";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userName:string='';//用户名
  password:string='';//密码

  hasError:boolean=false;//是否有错误
  loading:any=null;
  alert:any=null;
  lastPage:any=null;//上一个页面

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastCtrl: ToastController,public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private http: Http,private loginService:LoginProvider
  ) {
    this.lastPage = navParams.get('page');
    // console.log(page.loginSuccess());
  }

  ionViewDidLoad() {

    // console.log(this.navCtrl.getActive().component.test());
    // console.log(this.navCtrl.getPrevious()._cmp);
    // console.log(this.navCtrl.getPrevious().component.loginSuccess);
    // console.log(this.navCtrl.getViews()[0].id=='LoginPage');
  }

  test(){
    alert('ha')
  }


  //输入用户名
  changeUserName(e:string){
    this.userName=e;
    if(this.hasError){
      this.hasError=false;
    }
  }

  //输入密码
  changePassword(e:string){
    this.password=e;
    if(this.hasError){
      this.hasError=false;
    }
  }

  //处理错误
  private handleError(error: Response) {
    console.log(error);
    // return Observable.throw(error.json().error || 'Server Error');
  }

  //尝试登录
  tryLogin(){
    if(this.userName==''||this.password==''){
      return;
    }
    this.loading = this.loadingCtrl.create({
      content: '正在努力登录中，请稍候...'
    });
    this.hasError=false;
    this.loading.present();

    //尝试登录
    // let data={
    //   mobile_phone:this.userName,
    //   password:this.password
    // };
    let data={
      username:this.userName,
      password:this.password,
      captcha:''
    };
    this.loginService.login(data).then(result => {
      this.loading.dismiss();
      if(result){
        //登录成功
        //判断根页面是否登录页面,如果是则转到首页,否则转入登录前的页面
        if(this.navCtrl.getViews()[0].id=='LoginPage'){
          this.navCtrl.setRoot('HomePage');
        }else{
          this.navCtrl.pop();
          this.lastPage&&this.lastPage.loginSuccess();//调用上一个页面的登录成功方法
        }
      }else{
        //登录出错
        this.hasError=true;
      }
    });
  }

  //我是新用户
  creatAccount(){
    // this.loginService.load();
    this.notImplement();
  }

  //忘记密码
  forget(){
    this.notImplement();
  }

  //微信登录
  weixinLogin(){
    this.notImplement();
  }

  //功能暂未实现
  private notImplement() {
    this.alert = this.alertCtrl.create({
      message: '该功能暂未实现,敬请期待',
      buttons: [
        {
          text: '好',
          handler: () => {

          }
        }
      ]
    });
    this.alert.present();
  }
}
