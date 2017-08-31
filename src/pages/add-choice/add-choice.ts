import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UtilProvider} from "../../providers/util/util";


@IonicPage()
@Component({
  selector: 'page-add-choice',
  templateUrl: 'add-choice.html',
})
export class AddChoicePage {

  refresh: () => void;
  data:any=[];

  name:string='';
  timeId:number=null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private util: UtilProvider) {
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
    this.data = [];
  }

  //初始化事件侦听
  initListener() {
    try{
      clearTimeout(this.timeId);
    }catch(e){

    }
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
    let data=this.navParams.get('data');
    if(data){
      this.data=data;
    }

    return Promise.resolve(true);
  }

  //是否发生了改变
  canShowSave(){
    let result=false;
    if(this.name!=''){
      result=true;
    }
    return result;
  }

  //保存
  save(){
    let name=this.name.trim();
    this.name=name;
    if(name==''){
      return;
    }
    if(this.data){
      let tag={
        id:this.data.length+1,
        name:name,
        count:0,
        selected:false
      };
      // this.data.push(tag);
      this.util.loading();
      this.timeId=setTimeout(()=>{
        this.util.hideLoading();
        this.data.push(tag);
        this.util.goback('PublishPage');
      },500);
    }
  }


}
