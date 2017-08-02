import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {UtilProvider} from "../../providers/util/util";
import * as $ from 'jquery';
import {animate, state, style, transition, trigger} from "@angular/animations";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
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
export class HomePage {

  user: any = null;
  banners = {
    hasInit: false,
    data: []
  };

  columnCount = 2;//一行显示多少张图片
  renderCount = 0;//图片加载张数
  deltaX = 15;
  deltaY = 18;
  initY = 0;//初始位置


  containerHeight = 100;//容器高度
  moreLeft = 0;//热门找材中更多的x坐标
  moreTop = 0;//热门找材中更多的y坐标
  initWaterfall = false;//是否已经初始化了瀑布流
  imageWidth: number = 0;//图片宽度

  list = [];//找材列表
  dataConfig = {
    pageHeight: 0,
    random_code: '',//随机码
    top: 0,
    pageSize: 10,
    total: 0,
    page: 1,
    pageCount: 1,
    hasInit: false,
    loading: false
  };

  visibleState:string='in';

  constructor(public navCtrl: NavController, private util: UtilProvider) {

  }

  //-----------------需要登录的页面必须有的方法(START)
  ionViewDidLoad() {
    this.util.setPage(this);
    this.util.checkLogin().then(isLogin => {
      isLogin && this.init();
    });
  }

  //删除事件侦听
  viewWillUnload() {
    this.removeListener();
  }

  //从登录页面登录成功需要执行的操作
  loginSuccess() {
    this.init();
  }

  //初始化
  init() {
    this.getBanners();
    this.initImageWidth();
    this.getIllustration();
    this.initListener();//事件侦听
  }

  //-----------------需要登录的页面必须有的方法(END)

  //初始化图说中的图片宽度
  initImageWidth() {
    var containerWidth = $(window).width() - 30;
    this.imageWidth = (containerWidth - this.deltaX * (this.columnCount - 1)) / this.columnCount;
  }

  //初始化图说中的图片宽度
  ceil(width) {
    return Math.ceil(width);
  }

  //事件侦听
  initListener() {
    //滚动到底部
    let element = $('#waterfallContainer').closest('.scroll-content');
    element.on('scroll',e => {
      var config = this.dataConfig;
      if (config.hasInit && !config.loading && config.page < config.pageCount) {
        var moveHeight = element.scrollTop() + $(window).height() - 50;
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

  //删除事件侦听
  removeListener() {
    $('#waterfallContainer').closest('.scroll-content').off('scroll');
  }

  //获取首页banner轮播数据
  getBanners() {
    var url = 'cms/banners/?per_page=20&page=1';
    return this.util.get(url, true).then((res: any) => {
      if (!res)return;
      let response = res.json();
      var data = this.parseBannersData(response.data);
      this.banners.hasInit = true;
      this.banners.data = data;
    });
  }

  //转换获取到的首页banner轮播数据
  parseBannersData(data) {
    var item;
    var innerData;
    var result = [];
    var len = data.length;
    // var width=$(window).width();
    // var height=Math.ceil(bannerPercent*width/100);
    //材料列表
    for (var i = 0; i < len; i++) {
      innerData = data[i];
      item = {};
      item.id = innerData.id;
      item.img_url = innerData.img_url;
      // item.img_url = app.processImage(innerData.img_url,width,height);
      item.link = innerData.link;
      item.duration = innerData.duration * 1000;
      result.push(item);
    }
    return result;
  }

  //获取图说
  getIllustration() {
    var config = this.dataConfig;
    var url = 'illustrations/?per_page=' + config.pageSize + '&page=' + config.page;
    if (config.random_code != '') {
      url += '&random_code=' + config.random_code;
    }
    // var token=app.getCookie('X-DMC-TOKEN');
    // if(app.isLogin()&&token){
    //   //如果用户已经登录
    //   url+='&_t='+token;
    // }
    if (config.page > 1) {
      config.loading = true;//是否正在获取找材列表
    }
    return this.util.get(url, true).then((res: any) => {
      if (!res)return;
      let response = res.json();

      config.hasInit = true;
      config.loading = false;
      config.total = response.total;
      config.pageCount = response.last_page;
      config.random_code = response.random_code;
      var data = this.parseIllustrationData(response.data);
      if (config.page == 1) {
        this.list = [];
        this.list = data;
      } else {
        this.list = this.list.concat(data);
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
    //材料列表
    for (var i = 0; i < len; i++) {
      innerData = data[i];
      item = {};
      item.id = innerData.id;
      item.cover_url = innerData.cover_url + '?x-oss-process=image/resize,w_' + Math.ceil(this.imageWidth);
      item.title = innerData.title;
      if (innerData.hasOwnProperty('had_star')) {
        item.had_star = innerData.had_star != 0;
      } else {
        item.had_star = false;
      }
      item.canResponse = true;//是否可以对收藏操作作出响应
      item.friendly_created_at = innerData.friendly_created_at;
      item.description = innerData.description;
      item.sku_no = innerData.sku_no;
      item.views = this.processViews(innerData.views);
      item.star_count = this.processViews(innerData.star_count);
      item.loaded = false;
      item.left = this.initY + "px";
      item.top = this.initY + "px";
      result.push(item);
    }
    return result;
  }

  //----------------------------瀑布流(START)

  //渲染逻辑
  renderSingle(index?: number) {
    if (index !== undefined) {
      this.list[index].loaded = true;
    }
    this.render();
  }

//渲染逻辑
  render() {
    var length = this.list.length;
    var wrapSelector = "#waterfallContainer";
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
      let img = $(wrapSelector + " li:eq(" + i + ")");
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
      this.list[i].left = imgLeft;
      this.list[i].top = imgTop;
    }
    //获取最小高度和最大高度,用于放置更多
    var minIndex = 0;
    var maxIndex = 0;
    var minHeight = 0;
    var maxHeight = 0;
    if (bottoms[minIndex] == undefined) {
      bottoms[minIndex] = this.initY;
    }
    if (bottoms[maxIndex] == undefined) {
      bottoms[maxIndex] = this.initY;
    }
    minHeight = bottoms[minIndex];
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
      if (minHeight > bottoms[i]) {
        minIndex = i;
        minHeight = bottoms[i];
      }
    }
    //获取第1页的高度
    if (this.dataConfig.page == 1) {
      this.dataConfig.pageHeight = this.list[this.list.length - 1].top;
    } else {
      this.dataConfig.pageHeight = this.list[this.dataConfig.pageSize - 1].top;
    }
    var containerHeight = maxHeight;
    this.containerHeight = containerHeight;//容器高度
    this.initWaterfall = true;
  };

//----------------------------瀑布流(END)

  openDetail(item) {

  }

  toggleLikeImage(e, item, p) {

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
