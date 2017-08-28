import { Injectable } from '@angular/core';
import {Headers,Http} from '@angular/http';
import { Storage } from '@ionic/storage';
import {AlertController, App, LoadingController, NavControllerBase, ToastController} from "ionic-angular";
import * as moment from 'moment';
import 'rxjs/add/operator/toPromise';
import * as $ from 'jquery';

@Injectable()
export class UtilProvider {

  plaform:string='';//平台

  loadingUi:any=null;//用于显示加载信息
  toastUi:any=null;//用于显示提示
  alertUi:any=null;//用于显示弹出框

  navCtrl:NavControllerBase;
  page:any=null;//关联页面
  apiHost:string='https://dev.jintangjiang.cn/';//api前缀
  // apiHost:string='http://www.jtp.com/';//api前缀
  // apiHost:string='https://api.gzdmc.net/v1/';//api前缀
  defaultPage:string='HomePage';//默认登录后跳转到的页面
  refreshDuration:number=280;//下拉刷新的回复时间

  token:any=null;//保存token

  preloadConfig={
    percent:50,//百分比
    distance:300//距离
  };//在滚动到距离底部多远时进行预加载下一页

  constructor(public app: App,public http: Http,private storage: Storage,private loadingCtrl: LoadingController,private toastCtrl: ToastController,private alertCtrl: AlertController) {
    // this.clear();
  }

  /**
   * 关联当前页面(除了登录页面之外的页面)
   * @param page 当前页面
   */
  setPage(page:any){
    this.page=page;
  }

  /**
   * 获取当前导航组件
   * @returns {NavControllerBase}
   */
  getNav(){
    if(!this.navCtrl){
      this.navCtrl=this.app.getActiveNav();
    }
    return this.navCtrl;
  }

  /**
   * 是否可以返回上一页
   */
  canGoback(){
    return this.getNav().getViews().length>1;
  }

  /**
   * 显示加载信息
   * @param info
   */
  loading(info?:string|any){
    if(!this.loadingUi){
      if(info){
        if(typeof info=='string'){
          this.loadingUi=this.loadingCtrl.create({
            dismissOnPageChange:true,
            content: info
          });
        }else{
          if(!info.hasOwnProperty('dismissOnPageChange')){
            info.dismissOnPageChange=true;
          }
          this.loadingUi=this.loadingCtrl.create(info);
        }
      }else{
        this.loadingUi=this.loadingCtrl.create({
          dismissOnPageChange:true,
          content: ''
        });
      }
    }
    this.loadingUi.onDidDismiss(() => {
      this.loadingUi=null;
    });
    this.loadingUi.present();
  }

  /**
   * 隐藏加载信息
   */
  hideLoading(){
    if(this.loadingUi){
      return this.loadingUi.dismiss().catch(()=>{}).then(()=>this.loadingUi=null);//注意,不加catch在切换页面时会报错
    }else{
      return Promise.resolve(true);
    }
  }

  /**
   * 显示提示信息
   * @param info
   */
  toast(info?:string|any,duration?:number){
    if(!this.toastUi){
      if(!duration){
        duration=1000;
      }
      let cssClass=' custom-toast';
      if(info){
        if(typeof info=='string'){
          this.toastUi=this.toastCtrl.create({
            dismissOnPageChange:true,
            position:'middle',
            cssClass:cssClass,
            duration:duration,
            message: info
          });
        }else{
          if(!info.hasOwnProperty('dismissOnPageChange')){
            info.dismissOnPageChange=true;
          }
          if(!info.hasOwnProperty('duration')){
            info.duration=duration;
          }
          if(!info.hasOwnProperty('position')){
            info.position='middle';
          }
          if(!info.hasOwnProperty('message')){
            info.message='';
          }
          if(!info.hasOwnProperty('cssClass')){
            info.cssClass=cssClass;
          }else{
            info.cssClass+=cssClass;
          }
          if(info.message==''){
            this.hideToast();
          }else{
            this.toastUi=this.toastCtrl.create(info);
          }
        }
      }else{
        this.hideToast();
      }
    }
    if(this.toastUi){
      this.toastUi.onDidDismiss(() => {
        this.toastUi=null;
      });
      this.toastUi.present();
    }
  }

  /**
   * 隐藏提示
   */
  hideToast(){
    if(this.toastUi){
      this.toastUi.dismiss().catch(()=>{});//注意,不加catch在切换页面时会报错
      this.toastUi=null;
    }
  }

  /**
   * 显示弹出框
   * @param info 内容或配置信息
   */
  alert(info?:string|any){
    if(!this.alertUi){
      let cssClass=' custom-alert';
      if(info){
        if(typeof info=='string'){
          this.alertUi=this.alertCtrl.create({
            cssClass:cssClass,
            message: info
          });
        }else{
          if(!info.hasOwnProperty('cssClass')){
            info.cssClass=cssClass;
          }else{
            info.cssClass+=cssClass;
          }
          this.alertUi=this.alertCtrl.create(info);
        }
      }else{
        this.hideAlert();
      }
    }
    if(this.alertUi){
      this.alertUi.onDidDismiss(() => {
        this.alertUi=null;
      });
      this.alertUi.present();
    }
  }

  /**
   * 隐藏弹出框
   */
  hideAlert(){
    if(this.alertUi){
      this.alertUi.dismiss().catch(()=>{});
      this.alertUi=null;
    }
  }

  /**
   * 退出登录
   */
  logout() {
    this.clear().then(()=>{
      this.getNav().setRoot('LoginPage');
    });
  }

  /**
   * 清除数据
   * @returns {Promise<any[]>}
   */
  clear(){
    this.token=null;
    return Promise.all([this.storage.remove('token'),this.storage.remove('user')]);
  }

  /**
   * 登录
   * @param data 登录凭据
   * @returns {Promise<boolean|TResult2|boolean>}
   */
  login(data) {
    let url=this.apiHost+'oauth/token';
    return this.http.post(url, data).toPromise()
      .then(res => {
        let response=res.json();
        if(200<=res.status&&res.status<400 ){
          //登录成功,保存token和用户信息
          this.saveToken(response);//保存token
          return true;
        }
        else{
          this.clear();
          return false;
        }
      })
      .catch(err => {
        //登录出错
        return false;
      });
  }

  //登录(云选材)
  /*login(data) {
    let url=this.apiHost+'session?source_from=pc&ie&_t=';
    return this.http.post(url, data).toPromise()
      .then(res => {
        //登录成功,保存token和用户信息
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
      })
      .catch(err => {
        //登录出错
        return false;
      });
  }*/

  /**
   * 检查是否登录
   * @param isInLogin
   */
  checkLogin(isLoginPage?:boolean){
    return this.isLogin().then(value=>{
      // console.log(this.getNav().getActive().component.name);
      if(!isLoginPage&&!value){
        //当前不是登录页面且未登录
        this.showLoginPage();
      }
      return value;
    });
  }

  /**
   * 弹出登录页面
   */
  showLoginPage(){
    //如果当前页面不是登录页则打开登录页面,防止打开多个登录页面
    if(this.getNav().last().id!='LoginPage'){
      this.getNav().push('LoginPage',{page:this.page});
    }
  }

  /**
   * 保存token
   * @param token 令牌
   */
  saveToken(token){
    this.token=token;
    let expires_day=moment().add(this.token.expires_in,'seconds').format("YYYY-MM-DD HH:mm:ss");
    this.token.expires_day=expires_day;
    this.storage.set('token',this.token);
  }


  /**
   * 刷新token
   * @param token 令牌
   * @returns {Promise<boolean|TResult2|boolean>}
   */
  refreshToken(token){
    let url='oauth/token';
    url=this.apiHost+url;
    let data={
      refresh_token:token,
      grant_type:'refresh_token'
    };
    return this.http.post(url,data).toPromise().then(res=>{
      let response=res.json();
      if(200<=res.status&&res.status<400 ){
        //登录成功,保存token和用户信息
        this.saveToken(response);//保存token
        return true;
      }
      else{
        this.clear();
        return false;
      }
    }).catch(err=>{
      this.clear();
      return false;
    });
  }

  /**
   * 判断当前的token是否有效
   * @returns {any}
   */
  isValidToken(){
    //判断token是否过期
    let seconds=moment(this.token.expires_day).diff(moment(),'seconds');
    if(seconds<=20){
      //刷新token
      return this.refreshToken(this.token.refresh_token);//刷新token
    }else{
      return Promise.resolve(true);
    }
  }

  /**
   * 是否已经登录
   * @returns {any}
   */
  isLogin(){
    if(this.token){
      //判断token是否过期
      return this.isValidToken();
    }else{
      return this.storage.ready().then(()=>this.storage.get('token')).then(token=> {
        return (this.token=token)?this.isValidToken():false;
      }).catch(err=>{
        return false;
      });
    }
  }

  /**
   * 处理调用api成功时返回的数据
   * @param res 返回的数据
   * @returns {any} 调用api成功时返回的数据
   */
  processData(res){
      let code=res.status;
      if(200<=code&&code<400 ){
        return res;
      }
      else if (code == 401 ){
        //使用的token没有权限
        this.showLoginPage();
        return false;
      }
  }

  /**
   * 通过get方法调用api
   * @param url api地址
   * @param noToken 是否不使用token
   * @returns {Promise<TResult2|TResult1>}
   */
  get(url:string,noToken?:boolean){
    if(url.indexOf("http")!=0 ){
      url=this.apiHost+url;
    }
    if(!noToken){
      return this.isLogin().then(isLoginOk=>{
        //使用token
        if(isLoginOk){
          let headers = new Headers();
          headers.append('Authorization', this.token.token_type+' '+this.token.access_token);
          return this.http.get(url,{headers: headers}).toPromise().then(res=>this.processData(res));
        }else{
          return isLoginOk;
        }
      });
    }else{
      return this.http.get(url).toPromise().then(res=>this.processData(res));
    }
  }

  /**
   * 通过post方法调用api
   * @param url api地址
   * @param data 要提交的数据
   * @param noToken 是否不使用token
   * @returns {Promise<TResult2|TResult1>}
   */
  post(url:string,data:any,noToken?:boolean){
    if(url.indexOf("http")!=0 ){
      url=this.apiHost+url;
    }
    if(!noToken){
      return this.isLogin().then(isLoginOk=>{
        //使用token
        if(isLoginOk){
          let headers = new Headers();
          headers.append('Authorization', this.token.token_type+' '+this.token.access_token);
          return this.http.post(url,data,{headers: headers}).toPromise().then(res=>{
            return this.processData(res);
          });
        }else{
          return isLoginOk;
        }
      });
    }else{
      //不使用token
      return this.http.post(url,data).toPromise().then(res=>{
        return this.processData(res);
      });
    }
  }

  /**
   * 通过patch方法调用api
   * @param url api地址
   * @param data 要提交的数据
   * @param noToken 是否不使用token
   * @returns {Promise<TResult2|TResult1>}
   */
  patch(url:string,data:any,noToken?:boolean){
    if(url.indexOf("http")!=0 ){
      url=this.apiHost+url;
    }
    if(!noToken){
      return this.isLogin().then(isLoginOk=>{
        //使用token
        if(isLoginOk){
          let headers = new Headers();
          headers.append('Authorization', this.token.token_type+' '+this.token.access_token);
          return this.http.patch(url,data,{headers: headers}).toPromise().then(res=>{
            return this.processData(res);
          });
        }else{
          return isLoginOk;
        }
      });
    }else{
      //不使用token
      return this.http.patch(url,data).toPromise().then(res=>{
        return this.processData(res);
      });
    }
  }

  /**
   * 通过put方法调用api
   * @param url api地址
   * @param data 要提交的数据
   * @param noToken 是否不使用token
   * @returns {Promise<TResult2|TResult1>}
   */
  put(url:string,data:any,noToken?:boolean){
    if(url.indexOf("http")!=0 ){
      url=this.apiHost+url;
    }
    if(!noToken){
      return this.isLogin().then(isLoginOk=>{
        //使用token
        if(isLoginOk){
          let headers = new Headers();
          headers.append('Authorization', this.token.token_type+' '+this.token.access_token);
          return this.http.put(url,data,{headers: headers}).toPromise().then(res=>{
            return this.processData(res);
          });
        }else{
          return isLoginOk;
        }
      });
    }else{
      //不使用token
      return this.http.put(url,data).toPromise().then(res=>{
        return this.processData(res);
      });
    }
  }

  /**
   * 返回
   * @param page 要返回的页面(可选参数,未填写则回到默认页面)
   */
  goback(page?:string) {
    let nav=this.getNav();
    if (nav.getViews().length == 1) {
      if(!page){
        page=this.defaultPage;
      }
      nav.setRoot(page);
    } else {
      nav.pop();
    }
  }

  /**
   * 跳转到指定的页面
   * @param page 要跳转的页面
   */
  goto(page:string){
    this.getNav().setRoot(page);
  }

  /**
   * 转换换行为br
   * @param str 要转换的字符串
   * @returns {any}
   */
  translateToBr(str) {
    str=str.replace(/\r\n/g, '<br/>');
    str=str.replace(/\n/g, '<br/>');
    return str;
  }

  /**
   * 验证手机号码是否合法
   * @param str 号码
   * @returns {boolean} 手机号码是否合法
   */
  testPhone(str) {
    if(str.length != 11){
      return false;
    }
    return /^0?1[3|4|5|7|8][0-9]\d{8}$/.test(str);
  }

  /**
   * 获取在min和max之间的随机数
   * @param min
   * @param max
   * @returns {number}
   */
  range(min:number,max:number){
    if(min>max){
      let temp=max;
      max=min;
      min=temp;
    }
    let result=Math.floor(min+Math.random()*(max-min+1));
    return result;
  }

  /**
   * 随机化数组
   * @param arr 数组
   * @returns {Array} 打乱顺序后的数组
   */
  random(arr){
    let result=[];
    for(let i=arr.length-1;i>=0;i--){
      let index:number=this.range(0,arr.length-1);
      result.push(arr[index]);
      arr.splice(index,1);
    }
    return result;
  }

  /**
   * 重新初始化icon,修复ionic 3.7.0 ion-icon不显示的问题
   */
  reInitIcon(){
    let plaform;
    if(this.plaform){
      plaform=this.plaform;
    }else{
      plaform='md';
      let element=$('ion-app');
      if(element.hasClass('ios')){
        plaform='ios';
      }else if(element.hasClass('wp')){
        plaform='wp';
      }
    }
    $('ion-icon').each((index,node)=>{
      let icon=$(node);
      let className=icon.attr("class");
      let names=className.split(' ');
      for(let i=0;i<names.length;i++){
        if(names[i].startsWith('ion-null')){
          names[i]=names[i].replace('ion-null','ion-'+plaform);
          icon.addClass(names[i]);
          break;
        }
      }
    });
  }

}
