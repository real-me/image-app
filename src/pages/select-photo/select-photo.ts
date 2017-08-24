import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UtilProvider} from "../../providers/util/util";

@IonicPage()
@Component({
  selector: 'page-select-photo',
  templateUrl: 'select-photo.html',
})
export class SelectPhotoPage {

  exampleUrl:string='http://fetch-cdn.staging.gzdmc.net/image/729054b977cae0f6929a254cfbad2411.jpeg?x-oss-process=image/resize,m_fill,limit_0,w_150,h_150/quality,Q_100';
  photos:any=[];
  selectedCount:number=0;//被选中的图片张数

  constructor(public navCtrl: NavController, public navParams: NavParams,private util: UtilProvider) {
    this.loadData();
  }

  loadData(){
    let len=28;
    let items=[];
    for(let i=0;i<len;i++){
      let item={
        id:i,
        url:this.exampleUrl,
        selected:false
      }
      items.push(item);
    }
    this.photos=items;
  }

  //选择图片
  selectIt(index:number){
    this.photos[index].selected=!this.photos[index].selected;
    let len=this.photos.length;
    let count=0;
    for(let i=0;i<len;i++){
      if(this.photos[i].selected){
        count++;
      }
    }
    this.selectedCount=count;
  }

  //取消
  cancel(){
    this.util.goback();
  }

  //确定
  sureSelect(){
    this.navCtrl.push('PublishPage');
  }

}
