import {Component, ViewChild} from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {UtilProvider} from "../../providers/util/util";
import * as $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-designer',
  templateUrl: 'designer.html',
  animations: [
    trigger('image', [
      state('in', style({opacity: 1,transform: 'scale(1)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'scale(0)'
        }),
        animate('0.2s ease-in')
      ])
    ])
  ]
})
export class DesignerPage {

  //图说容器
  @ViewChild('pictures') pictures: any;
  //喜欢容器
  @ViewChild('lovePictures') lovePictures: any;

  refresh: () => void;
  resize:()=>void;

  id:number=0;
  hasInit = false;//是否已经进行了初始化
  data:any=null;
  loaded:boolean=false;//头像是否加载完毕
  activeIndex:number=1;//激活的是哪一个tab


  columnCount = 2;//一行显示多少张图片
  renderCount = 0;//图片加载张数
  deltaX = 15;
  deltaY = 18;
  initY = 0;//初始位置


  imageWidth: number = 0;//图片宽度

  //图说
  dataConfig = {
    hasInit: false,
    data:[],
    pageHeight: 0,
    pageSize: 10,
    total: 0,
    page: 1,
    pageCount: 0,
    containerHeight:100,//容器高度
    loading: false
  };

  //喜欢
  dataConfig3 = {
    hasInit: false,
    data:[],
    pageHeight: 0,
    pageSize: 10,
    total: 0,
    page: 1,
    pageCount: 0,
    containerHeight:100,//容器高度
    loading: false
  };

  visibleState:string='in';

  constructor(public navCtrl: NavController, public navParams: NavParams,private util: UtilProvider,public events: Events) {
    this.initData();
    this.refresh = () => {
      this.clear();//清除数据
      this.util.checkLogin().then(isLogin => {
        isLogin && this.init();
      });
    };
    //窗口发生改变
    this.resize=()=>{
      this.initImageWidth();
      this.resetImageHeight();//重设图片高度
      this.renderedList();
      // setTimeout(()=>{
      //   this.render();//窗口大小发生改变时重新渲染图说图片
      // },100);
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
    this.initImageWidth();
    this.util.loading();
    Promise.all([this.loadData(),this.getIllustration(),this.getLoveData()]).then(()=>this.util.hideLoading()).catch(()=>this.util.hideLoading());
  }

  //清除数据(用于刷新)
  clear() {
    this.data = null;
    this.loaded = false;
    this.hasInit = false;

    let config=this.dataConfig;
    config.containerHeight = 100;
    config.hasInit=false;
    config.data=[];
    config.pageHeight=0;
    config.total=0;
    config.page=1;
    config.pageCount=0;
    config.loading=false;

    config=this.dataConfig3;
    config.containerHeight = 100;
    config.hasInit=false;
    config.data=[];
    config.pageHeight=0;
    config.total=0;
    config.page=1;
    config.pageCount=0;
    config.loading=false;
  }

  //初始化事件侦听
  initListener() {
    $(window).on('resize',this.resize);
    this.initPicturesScroll();//初始化图说滚动监听
    this.initLovePicturesScroll();//初始化喜欢滚动监听
  }

  //初始化图说滚动监听
  initPicturesScroll(){
    //滚动到底部
    let picturesWrap=$(this.pictures.nativeElement);
    let outerElement = picturesWrap.closest('.scroll-content');
    let element = picturesWrap.closest('.content-wrap');
    let delta:number=308;
    element.on('scroll',e => {
      var config = this.dataConfig;
      if (config.hasInit && !config.loading && config.page < config.pageCount) {
        var marginTop=parseFloat(outerElement.css('margin-top'));
        var marginBottom=parseFloat(outerElement.css('margin-bottom'));
        isNaN(marginTop)&&(marginTop=0);
        isNaN(marginBottom)&&(marginBottom=0);
        var moveHeight = element.scrollTop() + $(window).height()-(marginTop+marginBottom+delta);
        var preloadHeight = config.pageHeight * this.util.preloadConfig.percent / 100;
        moveHeight += preloadHeight;
        moveHeight = Math.ceil(moveHeight);
        var scrollHeight = element[0].scrollHeight;
        if (moveHeight >= scrollHeight) {
          config.page += 1;
          this.getIllustration();
        }
      }
    });
  }

  //初始化喜欢滚动监听
  initLovePicturesScroll(){
    //滚动到底部
    let picturesWrap=$(this.lovePictures.nativeElement);
    let outerElement = picturesWrap.closest('.scroll-content');
    let element = picturesWrap.closest('.content-wrap');
    let delta:number=308;
    element.on('scroll',e => {
      var config = this.dataConfig;
      if (config.hasInit && !config.loading && config.page < config.pageCount) {
        var marginTop=parseFloat(outerElement.css('margin-top'));
        var marginBottom=parseFloat(outerElement.css('margin-bottom'));
        isNaN(marginTop)&&(marginTop=0);
        isNaN(marginBottom)&&(marginBottom=0);
        var moveHeight = element.scrollTop() + $(window).height()-(marginTop+marginBottom+delta);
        var preloadHeight = config.pageHeight * this.util.preloadConfig.percent / 100;
        moveHeight += preloadHeight;
        moveHeight = Math.ceil(moveHeight);
        var scrollHeight = element[0].scrollHeight;
        if (moveHeight >= scrollHeight) {
          config.page += 1;
          this.getLoveData();
        }
      }
    });
  }

  //删除事件侦听
  removeListener() {
    $(window).off('resize',this.resize);
    $(this.pictures.nativeElement).closest('.content-wrap').off('scroll');
    $(this.lovePictures.nativeElement).closest('.content-wrap').off('scroll');
  }

  doRefresh(refresher) {
    refresher.complete();
    setTimeout(this.refresh, this.util.refreshDuration);
  }

  //-----------------需要登录的页面必须有的方法(END)

  //初始化数据
  initData(){
    this.id=this.navParams.get('id');

  }

  //加载数据
  loadData(){
    var url = 'tushuo/api/users/me';
    return this.util.get(url).then((res: any) => {
      if (!res)return;
      let response = res.json();
      let avatarPostfix='?x-oss-process=image/resize,m_fill,limit_0,w_80,h_80/quality,Q_100';
      response.small_photo = response.photo ? response.photo+avatarPostfix : 'assets/images/detail/avatar.png';
      response.photo = response.photo ? response.photo : 'assets/images/detail/avatar.png';
      this.data=response;
      this.hasInit = true;
    });
  }

  //加载图片完成时调用
  loadImg(){
    this.loaded=true;
  }

  //切换筛选项
  changeIndex(index:number){
    if(index!==this.activeIndex){
      this.activeIndex=index;
    }
  }

  //显示单个精选
  showChoice(id){
    this.util.getNav().push('ChoicePage',{id:id});
  }

  //初始化图说中的图片宽度
  initImageWidth() {
    var containerWidth = $(window).width() - 30;
    this.imageWidth = (containerWidth - this.deltaX * (this.columnCount - 1)) / this.columnCount;
  }

  //获取图说
  getIllustration() {
    var config = this.dataConfig;
    var url = 'tushuo/api/entries?per_page=' + config.pageSize + '&page=' + config.page;
    if (config.page > 1) {
      config.loading = true;//是否正在获取找材列表
    }
    return this.util.get(url).then((res: any) => {
      if (!res)return;
      let response = res.json();

      config.hasInit = true;
      config.loading = false;
      config.total = response.total;
      config.pageCount = response.last_page;
      var data = this.parseIllustrationData(response.data);
      if (config.page == 1) {
        config.data = [];
        config.data = data;
      } else {
        config.data = config.data.concat(data);
      }
      if (data.length == 0) {
        this.renderSingle();
      }
    });
  }


//转换获取到的材料数据
  parseIllustrationData(data) {
    var item;
    var innerData;
    var result = [];
    var len = data.length;
    let ossWidth=Math.ceil(this.imageWidth);
    let ossHeight;
    //材料列表
    for (var i = 0; i < len; i++) {
      innerData = data[i];
      item = {};
      item.id = innerData.id;

      item.url = '';
      item.title= '';
      item.width = Math.ceil(this.imageWidth);
      item.height = 0;
      if(innerData.cases&&innerData.cases.plan_images&&innerData.cases.plan_images.length>0){
        let img=innerData.cases.plan_images[0];
        item.width = img.width?img.width:0;
        item.height = img.height?img.height:0;
        ossHeight=Math.ceil(ossWidth*item.height/item.width);
        item.ossWidth = ossWidth;
        item.ossHeight = ossHeight;
        item.url = img.url + '?x-oss-process=image/resize,m_fill,limit_0,w_' + ossWidth+',h_'+ossHeight+'/quality,Q_100';
        item.title = innerData.cases.name;
      }else{
        continue;
      }
      if (innerData.hasOwnProperty('had_star')) {
        item.had_star = innerData.had_star != 0;
      } else {
        item.had_star = false;
      }

      item.choiceness_count = innerData.choiceness?this.processViews(innerData.choiceness):0;
      item.favorite_count = innerData.favorite_count?this.processViews(innerData.favorite_count):0;
      // item.canResponse = true;//是否可以对收藏操作作出响应
      item.loaded = false;
      item.left = this.initY;
      item.top = this.initY;
      result.push(item);
    }
    return result;
  }

  //获取图说
  getLoveData() {
    var config = this.dataConfig3;
    var url = 'tushuo/api/entries?per_page=' + config.pageSize + '&page=' + config.page;
    if (config.page > 1) {
      config.loading = true;//是否正在获取找材列表
    }
    return this.util.get(url).then((res: any) => {
      if (!res)return;
      let response = res.json();

      config.hasInit = true;
      config.loading = false;
      config.total = response.total;
      config.pageCount = response.last_page;
      var data = this.parseLoveData(response.data);
      if (config.page == 1) {
        config.data = [];
        config.data = data;
      } else {
        config.data = config.data.concat(data);
      }
      if (data.length == 0) {
        this.renderSingle();
      }
    });
  }


//转换获取到的喜欢数据
  parseLoveData(data) {
    var item;
    var innerData;
    var result = [];
    var len = data.length;
    let ossWidth=Math.ceil(this.imageWidth);
    let ossHeight;
    //材料列表
    for (var i = 0; i < len; i++) {
      innerData = data[i];
      item = {};
      item.id = innerData.id;

      item.url = '';
      item.title= '';
      item.width = Math.ceil(this.imageWidth);
      item.height = 0;
      if(innerData.cases&&innerData.cases.plan_images&&innerData.cases.plan_images.length>0){
        let img=innerData.cases.plan_images[0];
        item.width = img.width?img.width:0;
        item.height = img.height?img.height:0;
        ossHeight=Math.ceil(ossWidth*item.height/item.width);
        item.ossWidth = ossWidth;
        item.ossHeight = ossHeight;
        item.url = img.url + '?x-oss-process=image/resize,m_fill,limit_0,w_' + ossWidth+',h_'+ossHeight+'/quality,Q_100';
        item.title = innerData.cases.name;
      }else{
        continue;
      }
      if (innerData.hasOwnProperty('had_star')) {
        item.had_star = innerData.had_star != 0;
      } else {
        item.had_star = false;
      }



      item.choiceness_count = innerData.choiceness?this.processViews(innerData.choiceness):0;
      item.favorite_count = innerData.favorite_count?this.processViews(innerData.favorite_count):0;

      item.had_star = true;
      item.choiceness_count = 160;
      item.favorite_count = 25;

      // item.canResponse = true;//是否可以对收藏操作作出响应
      item.loaded = false;
      item.left = this.initY;
      item.top = this.initY;
      result.push(item);
    }
    return result;
  }

  //----------------------------瀑布流(START)

  renderedList(){
    console.log('renderedList');
    this.render();
    setTimeout(()=>{
      this.render();
    },500);
    // this.render();
    // this.cdr.detectChanges();
  }

  //渲染逻辑
  renderSingle(index?: number) {
    if (index !== undefined) {
      this.dataConfig.data[index].loaded = true;
    }
    this.render();
  }

  //重设图片高度
  resetImageHeight(){
    let item;
    let config=this.dataConfig;
    let len = config.data.length;
    let ossWidth=Math.ceil(this.imageWidth);
    let ossHeight;
    for (var i = 0; i < len; i++) {
      item = config.data[i];
      ossHeight=Math.ceil(ossWidth*item.height/item.width);
      item.ossHeight = ossHeight;
    }
  }

//渲染逻辑
  render() {
    var config=this.dataConfig;
    var length = config.data.length;
    let picturesWrap=$(this.pictures.nativeElement);
    var imageWidth = this.imageWidth;
    var imageHeight = 0;
    var bottoms = [];
    var imgLeft = 0;
    var imgTop = 0;
    var index = 0;
    var row = 0;//行(从0开始)
    var column = 0;//列(从0开始)
    var i = 0;
    for (i = 0; i < length; i++) {
      let img = picturesWrap.find("li:eq(" + i + ")");
      imageHeight = img.outerHeight(true);
      row = Math.floor(i / this.columnCount);//行(从0开始)


      //计算位置
      if (row == 0) {
        //第一行
        imgTop = this.initY;
        bottoms.push(this.initY + imageHeight + this.deltaY);
        column = (i % this.columnCount);//列(从0开始)
        imgLeft = column * (imageWidth + this.deltaX);
      } else {
        //获取最小高度
        index = 0;
        imgTop = bottoms[index];
        for (var j = 1; j < this.columnCount; j++) {
          if (imgTop > bottoms[j]) {
            index = j;
            imgTop = bottoms[index];
          }
        }
        bottoms[index] += imageHeight + this.deltaY;
        column = (index % this.columnCount);//列(从0开始)
        imgLeft = column * (imageWidth + this.deltaX);
      }
      // console.log('---------');
      // console.log(imgLeft+':'+imgTop);

      config.data[i].left = imgLeft;
      config.data[i].top = imgTop;
    }
    //获取最大高度
    var maxIndex = 0;
    var maxHeight = 0;
    if (bottoms[maxIndex] == undefined) {
      bottoms[maxIndex] = this.initY;
    }
    maxHeight = bottoms[maxIndex];
    for (i = 1; i < this.columnCount; i++) {
      if (bottoms[i] == undefined) {
        //其它列为空
        bottoms[i] = this.initY;
      }
      if (maxHeight < bottoms[i]) {
        maxIndex = i;
        maxHeight = bottoms[i];
      }
    }
    //获取第1页的高度
    if (config.page == 1) {
      if(config.data.length>0){
        config.pageHeight = config.data[config.data.length - 1].top;
      }
    } else {
      if(config.data.length>0&&config.pageSize - 1>=0){
        config.pageHeight = config.data[config.pageSize - 1].top;
      }
    }
    config.containerHeight = maxHeight;//容器高度
  };

  //----------------------------瀑布流(END)

  //----------------------------瀑布流喜欢(START)

  renderedList3(){
    console.log('renderedList');
    this.render3();
    setTimeout(()=>{
      this.render3();
    },500);
    // this.render();
    // this.cdr.detectChanges();
  }

  //渲染逻辑
  renderSingle3(index?: number) {
    if (index !== undefined) {
      this.dataConfig3.data[index].loaded = true;
    }
    this.render();
  }

  //重设图片高度
  resetImageHeight3(){
    let item;
    let config=this.dataConfig3;
    let len = config.data.length;
    let ossWidth=Math.ceil(this.imageWidth);
    let ossHeight;
    for (var i = 0; i < len; i++) {
      item = config.data[i];
      ossHeight=Math.ceil(ossWidth*item.height/item.width);
      item.ossHeight = ossHeight;
    }
  }

//渲染逻辑
  render3() {
    var config=this.dataConfig3;
    var length = config.data.length;
    let picturesWrap=$(this.pictures.nativeElement);
    var imageWidth = this.imageWidth;
    var imageHeight = 0;
    var bottoms = [];
    var imgLeft = 0;
    var imgTop = 0;
    var index = 0;
    var row = 0;//行(从0开始)
    var column = 0;//列(从0开始)
    var i = 0;
    for (i = 0; i < length; i++) {
      let img = picturesWrap.find("li:eq(" + i + ")");
      imageHeight = img.outerHeight(true);
      row = Math.floor(i / this.columnCount);//行(从0开始)


      //计算位置
      if (row == 0) {
        //第一行
        imgTop = this.initY;
        bottoms.push(this.initY + imageHeight + this.deltaY);
        column = (i % this.columnCount);//列(从0开始)
        imgLeft = column * (imageWidth + this.deltaX);
      } else {
        //获取最小高度
        index = 0;
        imgTop = bottoms[index];
        for (var j = 1; j < this.columnCount; j++) {
          if (imgTop > bottoms[j]) {
            index = j;
            imgTop = bottoms[index];
          }
        }
        bottoms[index] += imageHeight + this.deltaY;
        column = (index % this.columnCount);//列(从0开始)
        imgLeft = column * (imageWidth + this.deltaX);
      }
      // console.log('---------');
      // console.log(imgLeft+':'+imgTop);

      config.data[i].left = imgLeft;
      config.data[i].top = imgTop;
    }
    //获取最大高度
    var maxIndex = 0;
    var maxHeight = 0;
    if (bottoms[maxIndex] == undefined) {
      bottoms[maxIndex] = this.initY;
    }
    maxHeight = bottoms[maxIndex];
    for (i = 1; i < this.columnCount; i++) {
      if (bottoms[i] == undefined) {
        //其它列为空
        bottoms[i] = this.initY;
      }
      if (maxHeight < bottoms[i]) {
        maxIndex = i;
        maxHeight = bottoms[i];
      }
    }
    //获取第1页的高度
    if (config.page == 1) {
      if(config.data.length>0){
        config.pageHeight = config.data[config.data.length - 1].top;
      }
    } else {
      if(config.data.length>0&&config.pageSize - 1>=0){
        config.pageHeight = config.data[config.pageSize - 1].top;
      }
    }
    config.containerHeight = maxHeight;//容器高度
  };

  //----------------------------瀑布流喜欢(END)

  //打开详情页
  openDetail(item) {
    this.navCtrl.push('DetailPage',{data:this.dataConfig.data,id:item.id});
  }

  //图说切换喜欢
  toggleLikeImage(e, item, p) {

  }

  //喜欢切换喜欢
  toggleLikeImage3(e, item, p) {

  }

  //转换查看数
  processViews(views) {
    var result = '0';
    if (views < 10000) {
      result = views + '';
    } else if (views < 100000000) {
      result = Math.floor(views / 10000) + '万';
    } else {
      result = Math.floor(views / 100000000) + '亿';
    }
    return result;
  }

}
