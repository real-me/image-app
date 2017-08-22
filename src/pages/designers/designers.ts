import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UtilProvider} from "../../providers/util/util";
import {DistrictsProvider} from "../../providers/districts/districts";
import {DesignersProvider} from "../../providers/designers/designers";

@IonicPage()
@Component({
  selector: 'page-designers',
  templateUrl: 'designers.html',
})
export class DesignersPage {

  refresh: () => void;
  data:any=null;
  hasInit:boolean=false;//是否已经初始化完毕

  activeIndex:number=1;//激活的是哪一个tab
  isShowFilter:boolean=false;//是否显示筛选项

  spaces=[
    {id:1,name:'酒店'},{id:2,name:'办公'},{id:3,name:'零售'},{id:4,name:'展示'},{id:5,name:'休闲娱乐'},
    {id:6,name:'样板房售楼处'},{id:7,name:'住宅公寓'},{id:8,name:'别墅'},{id:9,name:'公共空间'}
  ];//空间
  spaceId:number=0;

  provinces=[];//省份
  cities=[];//城市
  provinceId=0;//省份ID
  cityId=0;//城市ID

  constructor(public navCtrl: NavController, public navParams: NavParams,private util: UtilProvider,private districtsProvider:DistrictsProvider,
  private designersProvider:DesignersProvider) {
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
    this.provinces=this.districtsProvider.getTopLevel();
    if(this.provinceId==0){
      this.provinceId=this.provinces[0].id;
    }
    if(this.provinceId!=0){
      //获取市区
      this.cities=this.districtsProvider.getChildById(this.provinceId);
    }
  }

  //加载数据
  loadData() {
    let province:string='';
    let city:string='';
    if(!(this.provinceId==-1&&this.cityId==0)){
      let len=this.provinces.length;
      for(let i=0;i<len;i++){
        if(this.provinceId==this.provinces[i].id){
          if(this.provinceId==-1){
            province='';
          }else{
            province=this.provinces[i].name;
          }
          //获取地区
          if(this.cityId!=0){
            for(let j=0;j<this.cities.length;j++){
              if(this.cityId==this.cities[j].id){
                city+=this.cities[j].name;
                break;
              }
            }
          }
          break;
        }
      }
    }

    let params={
      province:province,
      city:city
    };
    let time=this.util.range(500,1500);
    let p=new Promise((resolve)=>{
      setTimeout(()=>{
        let data=this.designersProvider.getData(params);
        this.data=this.util.random(data);
        this.hasInit = true;
        resolve(true);
      },time);
    });
    return p;
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

  //获取当前空间名称
  getCurrentSpace(){
    let result:string='按空间';
    if(this.spaceId!=0){
      let len=this.spaces.length;
      for(let i=0;i<len;i++){
        if(this.spaceId==this.spaces[i].id){
          result=this.spaces[i].name;
          break;
        }
      }
    }
    return result;
  }

  //切换空间
  selectSpace(id:number){
    this.spaceId=id;
    this.isShowFilter=false;
    this.init();
  }

  //选择省份
  selectProvince(id:number){
    this.provinceId=id;
    this.cityId=0;
    //获取市区
    this.cities=this.districtsProvider.getChildById(this.provinceId);
    if(this.cities.length<=0){
      this.isShowFilter=false;
      //获取对应的列表
      this.init();
    }
  }

  //选择城市
  selectCity(id:number){
    this.cityId=id;
    this.isShowFilter=false;
    //获取对应的列表
    this.init();
  }

  //获取当前所在地名称
  getCurrentArea(){
    let result:string='所在地';
    if(!(this.provinceId==-1&&this.cityId==0)){
      let len=this.provinces.length;
      for(let i=0;i<len;i++){
        if(this.provinceId==this.provinces[i].id){
          if(this.provinceId==-1){
            result='';
          }else{
            result=this.provinces[i].name;
          }
          //获取地区
          if(this.cityId!=0){
            for(let j=0;j<this.cities.length;j++){
              if(this.cityId==this.cities[j].id){
                result+=''+this.cities[j].name;
                break;
              }
            }
          }
          break;
        }
      }
    }
    return result;
  }


  //隐藏筛选项
  hideFilter(){
    this.isShowFilter=false;
  }

  //切换关注状态
  toggleFollow(item:any){
    item.follow=!item.follow;
  }

  //显示设计师详情
  showDesigner(id:number){

  }

}
