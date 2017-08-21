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
  data:any=null;
  hasInit:boolean=false;//是否已经初始化完毕

  activeIndex:number=1;//激活的是哪一个tab
  isShowFilter:boolean=false;//是否显示筛选项

  spaces=[
    {
      name:'全部空间',
      selected:true
    },
    {name:'酒店', selected:false},{name:'办公', selected:false},{name:'零售', selected:false},{name:'展示', selected:false},{name:'休闲娱乐', selected:false},
    {name:'样板房售楼处', selected:false},{name:'住宅公寓', selected:false},{name:'别墅', selected:false},{name:'公共空间', selected:false}
  ];//空间

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

  doRefresh(refresher) {
    refresher.complete();
    setTimeout(this.refresh, this.util.refreshDuration);
  }

  //-----------------需要登录的页面必须有的方法(END)

  //加载数据
  loadData() {
    this.hasInit = true;
    return Promise.resolve(true);
  }

  //切换筛选项
  changeIndex(index:number){
    if(index==this.activeIndex){
      //点击相同项,切换显示筛选项
      this.isShowFilter=!this.isShowFilter;
    }else{
      this.activeIndex=index;
      this.isShowFilter=true;
    }
  }

  //切换空间
  changeSpace(index:number){
    let len=this.spaces.length;
    for (let i = 0; i < len; i++) {
      if(i==index){
        this.spaces[i].selected=true;
      }else{
        this.spaces[i].selected=false;
      }
    }
    this.isShowFilter=false;
  }

  //隐藏筛选项
  hideFilter(){
    this.isShowFilter=false;
  }


}
