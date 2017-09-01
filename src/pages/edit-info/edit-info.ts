import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UtilProvider} from "../../providers/util/util";
// require('/lib/jquery-plugins/mobiscroll/js/mobiscroll.core');
// require('/lib/jquery-plugins/mobiscroll/js/mobiscroll.frame');
// require('/lib/jquery-plugins/mobiscroll/js/mobiscroll.scroller');
// require('/lib/jquery-plugins/mobiscroll/js/mobiscroll.listbase');
// require('/lib/jquery-plugins/mobiscroll/js/mobiscroll.treelist');
// require('/lib/jquery-plugins/mobiscroll/js/mobiscroll.frame.ios');

@IonicPage()
@Component({
  selector: 'page-edit-info',
  templateUrl: 'edit-info.html',
})
export class EditInfoPage {

  refresh: () => void;

  hasInit = false;//是否已经进行了初始化
  loaded:boolean=false;//头像是否加载完毕

  originData={
    url:'',
    small_photo:'',
    name:'葛亚曦',
    province:'',
    city:'',
    provinceId:0,
    cityId:0,
    spaces:[
      {id:1,name:'酒店',selected:true},{id:2,name:'办公',selected:false},{id:3,name:'零售',selected:false},{id:4,name:'展示',selected:false},
      {id:5,name:'休闲娱乐',selected:false}, {id:6,name:'样板房售楼处',selected:false},{id:7,name:'住宅公寓',selected:false},
      {id:8,name:'别墅',selected:false},{id:9,name:'公共空间',selected:false}
    ]
  };//原始数据

  data={
    url:'',
    small_photo:'',
    name:'葛亚曦',
    province:'',
    city:'',
    provinceId:0,
    cityId:0,
    spaces:[

    ]
  };//当前数据

  isShowSpace:boolean=false;//是否显示空间选项
  currentSpace:string='';//当前选择的空间

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
    this.loaded = false;
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
    this.util.goback('PersonalPage');
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
    var url = 'tushuo/api/users/me';
    return this.util.get(url).then((res: any) => {
      if (!res)return;
      let response = res.json();
      console.log(response);
      let avatarPostfix='?x-oss-process=image/resize,m_fill,limit_0,w_80,h_80/quality,Q_100';

      let item=this.originData;
      item.url=response.photo;
      item.small_photo = response.photo ? response.photo+avatarPostfix : 'assets/images/common/user/avatar.jpg';
      item.name=response.real_name;
      item.provinceId=response.province_of_origin.id;
      item.province=response.province_of_origin.name;
      item.cityId=response.city_of_origin.id;
      item.city=response.city_of_origin.name;


      let data=this.data;
      data.name=item.name;
      data.small_photo=item.small_photo;

      this.hasInit = true;
    });
  }

  //加载图片完成时调用
  loadImg(){
    this.loaded=true;
  }

  //输入姓名
  changeName(e:string){
    this.data.name=e;
  }

  //是否发生了改变
  isChanged(){
    let result=false;
    let d=this.data;
    let o=this.originData;
    result=d.name!=o.name;
    return result;
  }

  //获取当前空间名称
  getCurrentSpace(){
    let spaces=this.originData.spaces;
    let len=spaces.length;
    var temp=[];
    for(let i=0;i<len;i++){
      if(spaces[i].selected){
        temp.push(spaces[i].name);
      }
    }
    return temp.join('、');
  }

  //切换空间
  selectSpace(item:any){
    item.selected=!item.selected;
  }

  //切换选择的空间
  selectTempSpace(item:any){
    item.selected=!item.selected;
  }

  //显示空间
  showSpace(){
    let len=this.originData.spaces.length;
    var items=[];
    for(let i=0;i<len;i++){
      let s=this.originData.spaces[i];
      let item={
        id:s.id,
        name:s.name,
        selected:s.selected
      };
      items.push(item);
    }
    this.data.spaces=items;
    this.isShowSpace=true;
  }

  //隐藏空间
  hideSpace(){
    this.isShowSpace=false;
  }

  //取消空间选择
  cancelSpace(){
    this.hideSpace();
  }

  //保存空间选择
  saveSpace(){
    let len=this.originData.spaces.length;
    for(let i=0;i<len;i++){
      this.originData.spaces[i].selected=this.data.spaces[i].selected;
    }
    this.hideSpace();
  }

  //取消
  cancel(){
    this.data.name=this.originData.name;
  }

  //保存
  save(){
    this.data.name=this.data.name.trim();
    if(this.data.name==''){
      return;
    }

    this.util.loading();
    let data={
      real_name:this.data.name
    };
    let url='tushuo/api/users/me';
    this.util.put(url, data).then(res => {
      this.util.hideLoading();

      let response = res.json();
      this.originData.name=response.real_name;
      this.data.name=response.real_name;

      this.util.toast('保存成功',500);
    }).catch(err => {
      this.util.hideLoading();
      this.util.toast('修改用户名出错',1000);
    });
  }

}
