import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UtilProvider} from "../../providers/util/util";
import * as $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-project-detail',
  templateUrl: 'project-detail.html',
})
export class ProjectDetailPage {

  @ViewChild('banner') banner:any;

  refresh:()=>void;

  id:string=null;
  isHeadBarInverse:boolean=false;//顶部栏是否发生反转


  constructor(public navCtrl: NavController, public navParams: NavParams,private util: UtilProvider) {
    this.id = navParams.get('id');
    this.refresh=()=>{
      this.clear();//清除数据
      this.util.checkLogin().then(isLogin => {
        isLogin && this.init();
      });
    };
  }

  //-----------------需要登录的页面必须有的方法(START)
  ionViewDidLoad() {
    this.initListener();//初始化事件侦听
    this.util.setPage(this);
    this.refresh();
  }

  //页面移除时删除事件侦听
  viewWillUnload() {
    this.removeListener();
  }

  //初始化
  init() {
    this.util.loading();
    Promise.all([]).then(()=>this.util.hideLoading()).catch(()=>this.util.hideLoading());
  }

  //清除数据(用于刷新)
  clear(){

  }

  //初始化事件侦听
  initListener() {
    var bannerElement=$(this.banner.nativeElement);
    let element = bannerElement.closest('.scroll-content');
    element.on('scroll',e => {
      if(element.scrollTop()>=66){
        this.isHeadBarInverse=true;
      }else{
        this.isHeadBarInverse=false;
      }
    });
  }

  //删除事件侦听
  removeListener() {
    $(this.banner.nativeElement).closest('.scroll-content').off('scroll');
  }

  doRefresh(refresher) {
    refresher.complete();
    setTimeout(this.refresh,this.util.refreshDuration);
  }
  //-----------------需要登录的页面必须有的方法(END)

  //返回
  goback(){
    this.navCtrl.pop();
  }

}
