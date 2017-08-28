import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UtilProvider} from "../../providers/util/util";

@IonicPage()
@Component({
  selector: 'page-edit-info',
  templateUrl: 'edit-info.html',
})
export class EditInfoPage {

  originData={
    url:'',
    name:'葛亚曦',
    province:'',
    city:'',
    provinceId:0,
    cityId:0,
    spaces:[
      1
    ]
  };//原始数据

  data={
    url:'',
    name:'葛亚曦',
    province:'',
    city:'',
    provinceId:0,
    cityId:0,
    spaces:[
      1
    ]
  };//当前数据

  isShowSpace:boolean=false;//是否显示空间选项

  spaces=[
    {id:1,name:'酒店',selected:true},{id:2,name:'办公',selected:false},{id:3,name:'零售',selected:false},{id:4,name:'展示',selected:false},
    {id:5,name:'休闲娱乐',selected:false}, {id:6,name:'样板房售楼处',selected:false},{id:7,name:'住宅公寓',selected:false},
    {id:8,name:'别墅',selected:false},{id:9,name:'公共空间',selected:false}
  ];//空间

  currentSpace:string='';//当前选择的空间

  constructor(public navCtrl: NavController, public navParams: NavParams,private util: UtilProvider) {
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
    result=d.url!=o.url||d.name!=o.name||d.provinceId!=o.provinceId||d.cityId!=o.cityId||d.spaces.length!=o.spaces.length;
    if(!result){
      let len=d.spaces.length;
      d.spaces.sort();
      o.spaces.sort();
      for(let i=0;i<len;i++){
        if(d.spaces[i]!=o.spaces[i]){
          result=true;
          break;
        }
      }
    }
    return result;
  }

  //获取当前空间名称
  getCurrentSpace(){
    let len=this.spaces.length;
    var temp=[];
    for(let i=0;i<len;i++){
      if(this.spaces[i].selected){
        temp.push(this.spaces[i].name);
      }
    }
    return temp.join('、');
  }

  //切换空间
  selectSpace(item:any){
    item.selected=!item.selected;
  }

  //显示空间
  showSpace(){
    this.isShowSpace=true;
  }

  //隐藏空间
  hideSpace(){
    this.isShowSpace=false;
  }

  //取消
  cancel(){
    this.util.goback('PersonalPage');
  }

  //保存
  save(){
    this.util.goback('PersonalPage');
  }

  //返回上一页
  goback(){
    this.util.goback();
  }

  //是否可以返回上一页
  canGoback(){
    return this.util.canGoback();
  }
}
