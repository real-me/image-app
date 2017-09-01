import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UtilProvider} from "../../providers/util/util";

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {

  refresh: () => void;

  hasInit = false;//是否已经进行了初始化
  data:any=null;
  loaded:boolean=false;//头像是否加载完毕

  constructor(public navCtrl: NavController, public navParams: NavParams,private util: UtilProvider) {
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
    this.loaded = false;
    this.hasInit = false;
  }

  //初始化事件侦听
  initListener() {

  }

  //删除事件侦听
  removeListener() {

  }

  doRefresh(refresher) {
    refresher.complete();
    setTimeout(this.refresh, this.util.refreshDuration);
  }

  //-----------------需要登录的页面必须有的方法(END)

  //加载数据
  loadData(){
    var url = 'tushuo/api/users/me';
    return this.util.get(url).then((res: any) => {
      if (!res)return;
      let response = res.json();
      console.log(response);
      let avatarPostfix='?x-oss-process=image/resize,m_fill,limit_0,w_80,h_80/quality,Q_100';
      response.small_photo = response.photo ? response.photo+avatarPostfix : 'assets/images/common/user/avatar.jpg';
      response.photo = response.photo ? response.photo : 'assets/images/common/user/avatar.jpg';
      this.data=response;
      this.hasInit = true;
    });
  }

  //加载图片完成时调用
  loadImg(){
    this.loaded=true;
  }

  //编辑个人信息
  gotoEditInfo(){
    this.util.getNav().push('EditInfoPage');
  }

  //我的精选
  gotoChoiceness(){
    this.util.getNav().push('MyChoicePage');
  }

  //我的消息
  gotoMessages(){
    this.util.getNav().push('MessagesPage');
  }

  //我喜欢的
  gotoFavorite(){
    this.util.getNav().push('MyFavoritePage');
  }

  //修改密码
  gotoChangePassword(){
    this.util.getNav().push('EditPasswordPage');
  }

  //退出登录
  logout() {
    this.util.logout();
  }

}
