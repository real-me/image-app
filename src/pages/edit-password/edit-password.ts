import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";
import {UtilProvider} from "../../providers/util/util";

@IonicPage()
@Component({
  selector: 'page-edit-password',
  templateUrl: 'edit-password.html',
  animations: [
    trigger('bg', [
      state('in', style({opacity: 1})),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate('0.2s ease-out',style({
          opacity: 0
        }))
      ])
    ]),
    trigger('image', [
      state('in', style({
        '-webkit-transform': 'scale(1)',
        transform: 'scale(1)'
      })),
      transition('void => *', [
        style({
          '-webkit-transform': 'scale(0)',
          transform: 'scale(0)',
        }),
        animate('0.7s 0.2s', keyframes([
          style({
            '-webkit-transform': 'scale(0)',
            transform: 'scale(0)',
            offset: 0
          }),
          style({
            '-webkit-transform': 'scale(1.5)',
            transform: 'scale(1.5)',
            offset: 0.3
          }),
          style({
            '-webkit-transform': 'scale(0.9)',
            transform: 'scale(0.9)',
            offset: 0.5
          }),
          style({
            '-webkit-transform': 'scale(1.1)',
            transform: 'scale(1.1)',
            offset: 0.7
          }),
          style({
            '-webkit-transform': 'scale(1)',
            transform: 'scale(1)',
            offset: 1.0
          })
        ]))
      ])
    ])
  ]
})
export class EditPasswordPage {

  refresh: () => void;
  data:any=null;
  hasInit:boolean=false;//是否已经初始化完毕

  @ViewChild('password') passwordInput:any;
  @ViewChild('password2') passwordInput2:any;

  pwd:string='';//原密码
  pwd2:string='';//新密码

  hasError:boolean=false;//是否有错误

  isPasswordError:boolean=false;//原密码是否错误
  isSuccess:boolean=false;//是否修改成功
  timeId:number=null;

  visibleState:string='in';


  constructor(public navCtrl: NavController, public navParams: NavParams,private util:UtilProvider) {
    this.refresh = () => {
      this.clear();//清除数据
      this.util.checkLogin().then(isLogin => {
        isLogin && this.init();
      });
    };
  }

  //-----------------需要登录的页面必须有的方法(START)
  ionViewDidLoad() {
    this.util.setPage(this);
    this.util.reInitIcon();
    this.initListener();//初始化事件侦听
    this.refresh();
  }

  //页面移除时删除事件侦听
  viewWillUnload() {
    this.removeListener();
  }

  //初始化
  init() {
    this.util.loading();
    Promise.all([this.loadData()]).then(() => this.util.hideLoading()).catch(() => this.util.hideLoading());
  }

  //清除数据(用于刷新)
  clear() {
    this.data = null;
    this.hasInit = false;
  }

  //初始化事件侦听
  initListener() {

  }

  //删除事件侦听
  removeListener() {
    try{
      clearTimeout(this.timeId);
    }catch(e){

    }
  }

  doRefresh(refresher) {
    refresher.complete();
    setTimeout(this.refresh, this.util.refreshDuration);
  }

  //-----------------需要登录的页面必须有的方法(END)

  //加载数据
  loadData(){
    this.hasInit = true;
    return Promise.resolve(true);
  }

  //输入原密码
  changePassword(e:string){
    this.pwd=e;
    if(this.hasError){
      this.hasError=false;
      this.isPasswordError=false;
    }
  }

  //输入新密码
  changeNewPassword(e:string){
    this.pwd2=e;
    if(this.hasError){
      this.hasError=false;
      this.isPasswordError=false;
    }
  }

  //按下按键
  onKeyPress(type){
    if(type==2){
      this.sureChange();
    }else {
      this.passwordInput2.setFocus();
    }
  }

  //确定修改
  sureChange(){
    this.editSuccess();
    this.pwd=this.pwd.trim();
    this.pwd2=this.pwd2.trim();
    if(this.pwd==''||this.pwd2==''){
      return;
    }
    if(this.pwd.length<6){
      this.hasError=true;
    }
    else if(this.pwd2.length<6){
      this.hasError=true;
    }else{
      this.hasError=false;
    }
    if(this.hasError){
      return;
    }
    this.tryChange();
  }

  //开始修改密码
  tryChange(){
    this.hasError=false;
    this.isPasswordError=false;
    this.util.loading();
    //尝试登录
    let data={
      password:this.pwd,
      password2:this.pwd2
    };
    let url='tushuo/api/users/password/edit';
    this.util.post(url, data).then(res => {
      this.util.hideLoading().then(()=>this.editSuccess());
    }).catch(err => {
      //获取验证码出错
      this.hasError=true;
      this.isPasswordError=true;
      this.util.hideLoading();
      // this.util.hideLoading().then(()=>this.editSuccess());
    });
  }

  //修改成功
  editSuccess(){
    this.isSuccess=true;//是否修改成功
    this.timeId=setTimeout(()=>{
      this.isSuccess=false;//是否修改成功
      this.util.goback('PersonalPage');
      },2000);
  }

}
