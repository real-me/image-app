import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UtilProvider} from "../../providers/util/util";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('password') passwordInput:any;

  phone:string='';//用户名
  pwd:string='';//密码
  code:string='';//验证码



  hasError:boolean=false;//是否有错误
  loading:any=null;
  alert:any=null;
  lastPage:any=null;//上一个页面

  step:number=1;//当前步骤
  isChecking:boolean=false;//是否正在检查
  phoneResult:any={
    isMatchLength:true,
    isValid:true
  };//手机号码格式是否正确
  codeResult:any={
    msg:'',//获取验证码的失败结果
    success:true, //是否获取成功
    isPass:true //验证是否通过
  };//验证码结果

  canGetCode:boolean=true;//是否可以重新获取验证码
  waitTime:number=60;
  time:number=60;
  countId:number=null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private util:UtilProvider
  ) {
    // this.lastPage = navParams.get('page');
    // console.log('------------');
    // console.log(this.lastPage);
    // console.log(page.loginSuccess());
  }

  ionViewDidLoad() {
    // this.startCountDown();
    //自动登录
    // this.util.isLogin().then(ok=>ok&&this.loginSuccess());
    // console.log(this.navCtrl.getActive().component.test());
    // console.log(this.navCtrl.getPrevious()._cmp);
    // console.log(this.navCtrl.getPrevious().component.loginSuccess);
    // console.log(this.navCtrl.getViews()[0].id=='LoginPage');
  }

  //页面移除时删除事件侦听
  viewWillUnload() {
    this.stopCountDown();//停止计时
  }

  //开始倒计时
  startCountDown(){
    this.canGetCode=false;
    this.time=this.waitTime;
    this.countId=setInterval(()=>{
      this.time--;
      if(this.time<=0){
        clearTimeout(this.countId);
        this.countId=null;
        this.canGetCode=true;
      }
    },1000);
  }

  //停止计时
  stopCountDown(){
    if(this.countId){
      clearTimeout(this.countId);
      this.countId=null;
    }
  }

  //获取验证码
  getCode(){
    if(this.isCodeBtnDisabled()){
      return;
    }
    //输入时已经调用testPhone检查过
    this.hasError=!this.util.testPhone(this.phone);
    if(this.hasError){
      this.isChecking=true;
    }else{
      this.isChecking=false;
      this.tryToGetCode();
    }
  }

  //获取验证码
  tryToGetCode(){
    this.util.loading();
    //尝试登录
    let data={
      mobile_phone:this.phone
    };
    let url='tushuo/api/captcha';
    this.util.post(url, data,true).then(res => {
      let response=res.json();
      this.util.hideLoading();
      if(response.status=='success'){
        //获取验证码成功
        this.codeResult.success=true;
        this.hasError=!this.codeResult.success;
        this.step=2;
        this.startCountDown();//开始计时
      }else{
        response.msg&&(this.codeResult.msg=response.msg);
        this.codeResult.success=false;
        this.hasError=!this.codeResult.success;
      }
    }).catch(err => {
      //获取验证码出错
      this.util.hideLoading();
      this.codeResult.msg='';
      this.codeResult.success=false;
      this.hasError=!this.codeResult.success;
    });
  }


  //输入手机
  changePhone(e:string){
    this.phone=e;
    this.codeResult.success=true;
    this.testPhone();
  }

  //检查手机号码输入是否合法
  testPhone(){
    let isPass:boolean=true;
    if(this.phone.length!=11){
      isPass=false;
      this.phoneResult.isMatchLength=false;
      this.phoneResult.isValid=true;
      if(this.isChecking){
        this.hasError=true;
      }
    }else{
      this.phoneResult.isMatchLength=true;
      isPass=this.phoneResult.isValid=this.util.testPhone(this.phone);
      if(this.phoneResult.isValid){
        this.hasError=false;
      }else{
        if(this.isChecking){
          this.hasError=true;
        }else{
          this.hasError=false;
        }
      }
    }
    return isPass;
  }

  //获取验证码按钮是否可见
  isCodeBtnDisabled(){
    return this.phone=='';
  }

  //输入验证码
  changeCode(e:string){
    this.code=e;
    this.codeResult.isPass=true;
    if(this.isChecking){
      if(this.code.length<4){
        this.hasError=true;
      }else if(this.pwd.length<6){
        this.hasError=true;
      }else{
        this.hasError=false;
      }
    }
  }

  //输入密码
  changePassword(e:string){
    this.pwd=e;
    if(this.isChecking){
      if(this.code.length<4){
        this.hasError=true;
      }else if(this.pwd.length<6){
        this.hasError=true;
      }else{
        this.hasError=false;
      }
    }
  }

  //下一步按钮是否没有启用
  isNextStepDisabled(){
    return (this.code==''||this.pwd=='');
  }

  //下一步
  register(){
    if(this.isNextStepDisabled()){
      return;
    }
    this.code=this.code.trim();
    this.pwd=this.pwd.trim();
    if(this.code.length<4){
      this.hasError=true;
      this.isChecking=true;
    }else if(this.pwd.length<6){
      this.hasError=true;
      this.isChecking=true;
    }else{
      this.isChecking=false;
      this.hasError=false;
      this.codeResult.isPass=true;
      this.tryRegister();
    }
  }

  //开始注册
  tryRegister(){
    this.util.loading();
    //尝试登录
    let data={
      mobile_phone:this.phone,
      password:this.pwd,
      province_id:1,
      code:this.code
    };
    let url='tushuo/api/users/register';
    this.util.post(url, data,true).then(res => {
      this.tryLogin();
    }).catch(err => {
      //获取验证码出错
      this.util.hideLoading();
      this.isChecking=true;
      this.codeResult.isPass=false;
      this.hasError=true;
    });
  }

  //按下按键
  onKeyPress(type){
    if(type==1){
      //在手机输入框
      this.step==1&&this.getCode();
    }
    else if(type==2){
      //在验证码输入框
      this.passwordInput.setFocus();
    }else {
      //在密码输入框
      this.register();
    }
  }

  //尝试登录
  tryLogin(){
    //尝试登录
    let data={
      username:this.phone,
      password:this.pwd,
      grant_type:'password'
    };
    this.util.login(data).then(ok => {
      this.util.hideLoading();
      if(ok){
        //登录成功
        this.loginSuccess();
      }else{
        //登录出错
      }
    }).catch(err => {
      //登录失败
      this.util.hideLoading();
    });
  }

  //登录成功
  private loginSuccess() {
    this.navCtrl.setRoot(this.util.defaultPage);
  }

}
