import { Injectable } from '@angular/core';
import {Headers,Http, RequestOptionsArgs} from '@angular/http';
import { Storage } from '@ionic/storage';
import {App, NavControllerBase} from "ionic-angular";
import 'rxjs/add/operator/map';


@Injectable()
export class UtilProvider {

  navCtrl:NavControllerBase;
  page:any=null;//关联页面
  // apiHost:string='https://dev-api.gzdmc.net/v1/';//api前缀
  apiHost:string='https://api.gzdmc.net/v1/';//api前缀

  preloadConfig={
    percent:50,//百分比
    distance:300//距离
  };//在滚动到距离底部多远时进行预加载下一页

  constructor(private app: App,public http: Http,private storage: Storage) {
  }

  //关联当前页面(除了登录页面之外的页面)
  setPage(page:any){
    this.page=page;
  }

  getNav(){
    if(!this.navCtrl){
      this.navCtrl=this.app.getActiveNav();
    }
    return this.navCtrl;
  }

  //退出登录
  logout() {
    this.clear().then(()=>{
      this.getNav().setRoot('LoginPage');
    });
    // this.storage.remove('user');
    // this.storage.remove('token').then(data => this.getNav().setRoot('LoginPage'));
  }

  //清除数据
  clear(){
    return Promise.all([this.storage.remove('user'),this.storage.remove('token')]);
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
  }

  //检查是否登录
  checkLogin(isInLogin?:boolean){
    return this.isLogin().then(value=>{
      // console.log(this.getNav().getActive().component.name);
      if(!isInLogin&&!value){
        //当前不是登录页面且未登录
        this.showLoginPage();
      }
      return value;
    });
  }

  //弹出登录页面
  showLoginPage(){
    this.getNav().push('LoginPage',{page:this.page});
  }

  //是否已经登录
  isLogin(){
    return this.storage.ready().then(()=>this.storage.get('user')).then(value => {
      return value?true:false;
    });
  }

  //处理调用api成功时返回的数据
  processData(res,notUseToken?:boolean){
      let response = res.json();
      let code=res.status;
      if(!notUseToken&&response._t){
        this.storage.set('token',response._t);
      }
      if(200<=code&&code<400 ){
        return res;
      }
      else if (code == 401 ){
        //使用的token没有权限
        this.showLoginPage();
        return false;
      }
  }

  //通过get方法调用api
  get(url:string,notUseToken?:boolean){
    // let options:RequestOptionsArgs = {
    //   url: url,
    //   search: null,
    //   headers: new Headers({
    //     'Content-Type': 'application/json',
    //     'X-Requested-With': 'XMLHttpRequest',
    //     'x-access-token' : 'sometoken'
    //   }),
    //   body: null
    // };
    if(url.indexOf("http")!=0 ){
      url=this.apiHost+url;
    }
    if(!notUseToken){
      return this.storage.get('token').then(token => {
        if(token){
          if(url.indexOf('?') != -1){
            url += '&_t=' + token;
          }
          else{
            url += '?_t=' + token;
          }
        }
        return this.http.get(url).toPromise().then(res=>{
          return this.processData(res,notUseToken);
        });
      });
    }else{
      return this.http.get(url).toPromise().then(res=>{
        return this.processData(res,notUseToken);
      });
    }
  }

  //通过post方法调用api
  post(url:string,data:any,notUseToken?:boolean){
    if(url.indexOf("http")!=0 ){
      url=this.apiHost+url;
    }
    if(!notUseToken){
      return this.storage.get('token').then(token => {
        if(token){
          if(url.indexOf('?') != -1){
            url += '&_t=' + token;
          }
          else{
            url += '?_t=' + token;
          }
        }
        return this.http.post(url,data).toPromise().then(res=>{
          return this.processData(res,notUseToken);
        });
      });
    }else{
      return this.http.post(url,data).toPromise().then(res=>{
        return this.processData(res,notUseToken);
      });
    }
  }

}
