import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UtilProvider} from "../../providers/util/util";
import {PhotoLibrary} from "@ionic-native/photo-library";
import * as $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-select-photo',
  templateUrl: 'select-photo.html',
})
export class SelectPhotoPage {

  refresh: () => void;
  data:any=[];

  exampleUrl:string='http://fetch-cdn.staging.gzdmc.net/image/729054b977cae0f6929a254cfbad2411.jpeg?x-oss-process=image/resize,m_fill,limit_0,w_150,h_150/quality,Q_100';
  photos:any=[];
  selectedCount:number=0;//被选中的图片张数

  constructor(public navCtrl: NavController, public navParams: NavParams,private util: UtilProvider,private photoLibrary: PhotoLibrary) {
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

  loadData(){
    // let len=28;
    // let items=[];
    // for(let i=0;i<len;i++){
    //   let item={
    //     id:i,
    //     url:this.exampleUrl,
    //     selected:false
    //   }
    //   items.push(item);
    // }
    // this.photos=items;

    //获取窗口宽度
    let width=$(window).width()/4;
    width =Math.ceil(width);

    //-------------获取图片
    // {
    //   thumbnailWidth: width,
    //     thumbnailHeight: width
    // }
    return this.photoLibrary.requestAuthorization().then(() => {
      this.photoLibrary.getLibrary().subscribe({
        next: library => {
          let items=[];
          console.log(library.length);
          library.forEach(function(libraryItem) {
            let item={
              id:libraryItem.id,
              photoURL:libraryItem.photoURL,
              thumbnailURL:libraryItem.thumbnailURL,
              fileName:libraryItem.fileName,
              width:libraryItem.width,
              height:libraryItem.height,
              selected:false
            };
            items.push(item);

            // console.log('--------------');          // ID of the photo
            // console.log(libraryItem.id);          // ID of the photo
            // console.log(libraryItem.photoURL);    // Cross-platform access to photo
            // console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
            // console.log(libraryItem.fileName);
            // console.log(libraryItem.width);
            // console.log(libraryItem.height);
            // console.log(libraryItem.creationDate);
            // console.log(libraryItem.latitude);
            // console.log(libraryItem.longitude);
            // console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
          });
          console.log(items);
          this.photos=this.photos.concat(items);
          // this.photos.con
          console.log(this.photos);
        },
        error: err => {},
        complete: () => {
          this.data=this.photos;
        }
      });
    })
      .catch(err => console.log('permissions weren\'t granted'));
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
