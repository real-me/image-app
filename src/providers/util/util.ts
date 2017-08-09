import { Injectable } from '@angular/core';
import {Headers,Http, RequestOptionsArgs} from '@angular/http';
import { Storage } from '@ionic/storage';
import {App, LoadingController, NavControllerBase} from "ionic-angular";
import * as moment from 'moment';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UtilProvider {

  loadingTip:any=null;//用于显示加载信息
  navCtrl:NavControllerBase;
  page:any=null;//关联页面
  apiHost:string='https://dev.jintangjiang.cn/';//api前缀
  // apiHost:string='https://api.gzdmc.net/v1/';//api前缀
  defaultPage:string='HomePage';//默认登录后跳转到的页面
  refreshDuration:number=280;//下拉刷新的回复时间

  token:any=null;//保存token

  preloadConfig={
    percent:50,//百分比
    distance:300//距离
  };//在滚动到距离底部多远时进行预加载下一页

  constructor(private app: App,public http: Http,private storage: Storage,private loadingCtrl: LoadingController) {
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
   * 显示加载信息
   * @param info
   */
  loading(info?:string|any){
    if(!this.loadingTip){
      if(info){
        if(typeof info=='string'){
          this.loadingTip=this.loadingCtrl.create({
            dismissOnPageChange:true,
            content: info
          });
        }else{
          if(!info.hasOwnProperty('dismissOnPageChange')){
            info.dismissOnPageChange=true;
          }
          this.loadingTip=this.loadingCtrl.create(info);
        }
      }else{
        this.loadingTip=this.loadingCtrl.create({
          dismissOnPageChange:true,
          content: ''
        });
      }
    }
    this.loadingTip.present();
  }

  /**
   * 隐藏加载信息
   */
  hideLoading(){
    if(this.loadingTip){
      this.loadingTip.dismiss().catch(()=>{});//注意,不加catch在切换页面时会报错
      this.loadingTip=null;
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
      let response = res.json();
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

}
