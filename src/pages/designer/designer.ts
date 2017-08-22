import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UtilProvider} from "../../providers/util/util";

@IonicPage()
@Component({
  selector: 'page-designer',
  templateUrl: 'designer.html',
})
export class DesignerPage {

  refresh: () => void;

  id:number=0;
  hasInit = false;//是否已经进行了初始化
  data:any=null;
  loaded:boolean=false;//头像是否加载完毕
  activeIndex:number=1;//激活的是哪一个tab

  constructor(public navCtrl: NavController, public navParams: NavParams,private util: UtilProvider) {
    this.initData();
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

  //初始化数据
  initData(){
    this.id=this.navParams.get('id');

  }

  //加载数据
  loadData(){
    var url = 'tushuo/api/users/me';
    return this.util.get(url).then((res: any) => {
      if (!res)return;
      let response = res.json();
      let avatarPostfix='?x-oss-process=image/resize,m_fill,limit_0,w_80,h_80/quality,Q_100';
      response.small_photo = response.photo ? response.photo+avatarPostfix : 'assets/images/detail/avatar.png';
      response.photo = response.photo ? response.photo : 'assets/images/detail/avatar.png';
      this.data=response;
      this.hasInit = true;
    });
  }

  //加载图片完成时调用
  loadImg(){
    this.loaded=true;
  }

  //切换筛选项
  changeIndex(index:number){
    if(index!==this.activeIndex){
      this.activeIndex=index;
    }
  }



}
