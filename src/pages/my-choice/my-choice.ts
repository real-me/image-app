import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UtilProvider} from "../../providers/util/util";

@IonicPage()
@Component({
  selector: 'page-my-choice',
  templateUrl: 'my-choice.html',
})
export class MyChoicePage {

  refresh: () => void;
  data:any=null;
  hasInit:boolean=false;//是否已经初始化完毕

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
    this.hasInit = false;
  }

  //初始化事件侦听
  initListener() {

  }

  //删除事件侦听
  removeListener() {

  }

  //返回上一页
  goback(){
    this.util.goback();
  }

  //是否可以返回上一页
  canGoback(){
    return this.util.canGoback();
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

  //显示单个精选
  showChoice(id){
    this.util.getNav().push('ChoicePage',{id:id});
  }


}
