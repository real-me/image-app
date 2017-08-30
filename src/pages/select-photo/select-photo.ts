import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
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

  @ViewChild('imageContainer') imageContainer: any;//图片容器
  checkId=null;

  refresh: () => void;

  exampleUrl:string='http://fetch-cdn.staging.gzdmc.net/image/729054b977cae0f6929a254cfbad2411.jpeg?x-oss-process=image/resize,m_fill,limit_0,w_150,h_150/quality,Q_100';
  photos:any=[];
  selectedCount:number=0;//被选中的图片张数
  pageCount:number=60;//每页多少张图片

  dataConfig = {
    hasInit: false,
    data:[],
    pageSize: 60,
    total: 0,
    page: 1,
    pageCount: 0,
    loading: false
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,private util: UtilProvider,
              private photoLibrary: PhotoLibrary, private cd: ChangeDetectorRef) {
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
    this.loadData();
    // this.util.loading();
    // Promise.all([this.loadData()]).then(() => this.util.hideLoading()).catch(() => this.util.hideLoading());
  }

  //清除数据(用于刷新)
  clear() {
    let config=this.dataConfig;
    config.hasInit=false;
    config.data=[];
    config.total=0;
    config.page=1;
    config.pageCount=0;
    config.loading=false;

    this.selectedCount=0;
  }

  //初始化事件侦听
  initListener() {
    //滚动到底部
    let element = $(this.imageContainer.nativeElement).closest('.scroll-content');
    element.on('scroll',e => {
      var config = this.dataConfig;
      if (config.hasInit && !config.loading && config.page < config.pageCount) {
        var marginTop=parseFloat(element.css('margin-top'));
        var marginBottom=parseFloat(element.css('margin-bottom'));
        isNaN(marginTop)&&(marginTop=0);
        isNaN(marginBottom)&&(marginBottom=0);
        var moveHeight = element.scrollTop() + $(window).height()-(marginTop+marginBottom);
        moveHeight = Math.ceil(moveHeight);
        var scrollHeight = element[0].scrollHeight;
        if (moveHeight >= scrollHeight) {
          config.page += 1;
          this.loadPage();
        }
      }
    });
  }

  //删除事件侦听
  removeListener() {
    $(this.imageContainer.nativeElement).closest('.scroll-content').off('scroll');
    this.removeCheckLoading();
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
    // let len=3000;
    // let items=[];
    // for(let i=0;i<len;i++){
    //   let item={
    //     id:i,
    //     url:this.exampleUrl,
    //     photoURL:this.exampleUrl,
    //     thumbnailURL:this.exampleUrl,
    //     loaded:false,
    //     selected:false
    //   };
    //   items.push(item);
    // }
    // this.photos=items;
    // this.loadPage();


    //获取窗口宽度
    let width=$(window).width()/4;
    width =Math.ceil(width);
    // width*=3;

    //-------------获取图片

    return this.photoLibrary.requestAuthorization().then(() => {
      this.photoLibrary.getLibrary({
        thumbnailWidth: width,
        thumbnailHeight: width,
        quality:1.0
      }).subscribe({
        next: library => {
          console.log('next');
          let items=[];
          console.log(library.length);
          library.forEach(libraryItem=> {
            let item={
              id:libraryItem.id,
              url:this.exampleUrl,
              loaded:false,
              photoURL:libraryItem.photoURL,
              thumbnailURL:libraryItem.thumbnailURL,
              fileName:libraryItem.fileName,
              width:libraryItem.width,
              height:libraryItem.height,
              selected:false
            };
            items.push(item);
          });
          this.photos=this.photos.concat(items);
        },
        error: err => {this.dataConfig.hasInit=true;},
        complete: () => {
          this.loadPage();
        }
      });
    }).catch(err => {this.dataConfig.hasInit=true;});
  }

  //按页加载
  // loadPage(){
  //   var config = this.dataConfig;
  //
  //   //计算页数
  //   config.total = this.photos.length;
  //   config.pageCount = Math.ceil(config.total/config.pageSize);
  //
  //
  //   if (config.page == 1) {
  //     config.data=this.photos.slice(0,config.pageSize);
  //   } else {
  //     config.loading = true;//是否正在获取下一页的数据
  //     let index=(config.page-1)*config.pageSize;
  //     config.data = config.data.concat(this.photos.slice(index,config.pageSize));
  //   }
  //   this.cd.detectChanges();
  //   if(this.dataConfig.data.length>0){
  //     this.startCheckLoading();
  //   }
  //   if(!config.hasInit){
  //     config.hasInit=true;
  //   }
  // }

  //按页加载数据
  loadPage(){
    var config = this.dataConfig;

    //计算页数
    config.total = this.photos.length;
    config.pageCount = Math.ceil(config.total/config.pageSize);

    if (config.page == 1) {
      config.data=this.photos.slice(0,config.pageSize);
      config.hasInit=true;
      this.detect();
    } else {
      config.loading = true;//是否正在获取下一页的数据
      setTimeout(()=>{
        let index=(config.page-1)*config.pageSize;
        let data=this.photos.slice(index,index+config.pageSize);
        config.data = config.data.concat(data);
        config.loading = false;
        this.detect();
      },0);
    }
  }

  //检查加载情况
  detect(){
    this.cd.detectChanges();
    if(this.dataConfig.data.length>0){
      this.startCheckLoading();
    }
  }

  //开始检查图片是否加载完成
  startCheckLoading(){
    this.removeCheckLoading();
    this.checkId=setInterval(()=>{
      this.checkLoading();
    },50);
    this.checkLoading();
  }

  //检查图片是否加载完成
  checkLoading(){
    let imgs=$(this.imageContainer.nativeElement).find('img');
    imgs.each((index,img)=>{
      if(img.naturalWidth>0){
        this.loadImg(index);
      }
    });
  }

  //加载图片完成时调用
  loadImg(index){
    var config = this.dataConfig;
    if(!config.data[index].loaded){
      // console.log('完成加载：'+index);
      config.data[index].loaded=true;
      this.cd.detectChanges();
      // console.log('this.photos：'+index);
      //判断是否全部加载完毕
      let total=config.data.length;
      let count=0;
      config.data.forEach(img=>{
        if(img.loaded){
          count++;
        }
      });
      if(count>=total){
        this.removeCheckLoading();
      }
    }
  }

  //清除加载检查
  removeCheckLoading(){
    if(this.checkId!==null){
      clearInterval(this.checkId);
    }
    this.checkId=null;
  }

  //选择图片
  selectIt(index:number){
    let data=this.dataConfig.data;
    if(!data[index].loaded){
      return;
    }
    data[index].selected=!data[index].selected;
    let len=data.length;
    let count=0;
    for(let i=0;i<len;i++){
      if(data[i].selected){
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
