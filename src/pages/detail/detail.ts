import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UtilProvider} from "../../providers/util/util";
import * as $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  @ViewChild('banner') banner: any;

  refresh: () => void;
  isHeadBarInverse: boolean = false;//顶部栏是否发生反转

  source: any = null;//数据来源
  data: any = {
    user_photo:'assets/images/detail/avatar.png',
    real_name:'',
    map:''//banner图片
  };//图说所有信息
  hasInit = false;//是否已经进行了初始化
  images = [];//图片信息数组
  urlArrays = [];//图片数组(用于对比url判断显示第几张图片)
  urlArraysCompress = [];//压缩大图数组(用于显示打开后的大图)
  id: string = null;

  emptyImage = 'http://i.gzdmc.net/image/577565faef2b31bd6c4db20cc9253306.jpeg';//第一张实景图
  bannerPostfix = ''
  postfix = '';
  small_postfix = '';
  large_postfix = '';

  projectData = {
    project_type: '',//项目类型(用于显示)
    province: '',//被选中的省份(用于显示)
    city: '',//被选中的城市(用于显示)
    area: '',//被选中的地区(用于显示)
    address: '',//地址(用于显示)
    requirement: '',//报名要求(用于显示)

    project_id: '',//项目ID
    project_name: '',//项目名称
    project_en_name: '',//项目英文名称
    project_type_id: 0,//项目类型 ID
    project_province_id: 0,//省份 ID
    project_city_id: 0,//市 ID
    project_completion_at: '',//竣工时间
    project_area_total: '',//面积
    project_investment_total: '',//投资总额

    project_designer_name: '',//参与设计师名称
    project_designer_en_name: '',//参与设计师英文名称

    project_location: '',//项目定位
    project_artistic_conception: '',//空间意境
    project_space_layout: '',//空间布局
    project_design_material: '',//设计选材
    project_user_experience: ''//用户体验
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private util: UtilProvider) {
    this.id = this.navParams.get('id');
    if (!this.id) {
      this.id = '85';
    }
    // this.initData();
    this.refresh = () => {
      this.clear();//清除数据
      this.util.checkLogin().then(isLogin => {
        isLogin && this.init();
      });
    };
  }

  initData() {
    this.source = this.navParams.get('data');
    this.id = this.navParams.get('id');
  }

  //初始化宽度
  initWidth() {
    var windowWidth = $(window).width();
    windowWidth=Math.ceil(windowWidth);
    this.bannerPostfix = '?x-oss-process=image/resize,w_' + windowWidth + ',limit_0/quality,q_80';
    this.postfix = '?x-oss-process=image/resize,w_' + (windowWidth - 30) + ',limit_0/quality,q_80';
    this.small_postfix = '?x-oss-process=image/resize,w_80,limit_0';
    this.large_postfix = '?x-oss-process=image/resize,w_' + windowWidth + '/quality,q_80';
  }

  //-----------------需要登录的页面必须有的方法(START)
  ionViewDidLoad() {
    this.initWidth();//初始化宽度
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
    Promise.all([this.getDataById(this.id)]).then(() => this.util.hideLoading()).catch(() => this.util.hideLoading());
  }

  //清除数据(用于刷新)
  clear() {
    this.hasInit = false;
    this.data.map = '';
    this.images = [];
    this.urlArrays = [];
    this.urlArraysCompress = [];
  }

  //初始化事件侦听
  initListener() {
    var bannerElement = $(this.banner.nativeElement);
    let element = bannerElement.closest('.scroll-content');
    element.on('scroll', e => {
      let bannerHeight = bannerElement.height();
      if (element.scrollTop() >= (bannerHeight - 50)) {
        this.isHeadBarInverse = true;
      } else {
        this.isHeadBarInverse = false;
      }
    });
  }

  //删除事件侦听
  removeListener() {
    $(this.banner.nativeElement).closest('.scroll-content').off('scroll');
  }

  doRefresh(refresher) {
    refresher.complete();
    setTimeout(this.refresh, this.util.refreshDuration);
  }

  //-----------------需要登录的页面必须有的方法(END)

  //返回上一个页面
  goback() {
    this.util.goback();
    // if (this.navCtrl.getViews().length == 1) {
    //   this.navCtrl.setRoot(this.util.defaultPage);
    // } else {
    //   this.navCtrl.pop();
    // }
  }

  //打开项目详情页
  openProjectDetail() {
    this.navCtrl.push('ProjectDetailPage', {data: this.projectData});
  }

  //转换时间为日期显示
  parseDay(day, hasDay) {
    var result = '';
    if (day) {
      day = day.replace(/\-/g, "/");
      day = new Date(day);
      result = day.getFullYear() + '年' + (day.getMonth() + 1) + '月';
      if (hasDay) {
        result += day.getDate() + '日';
      }
    }
    return result;
  }

  //获取报名数据
  getDataById(id) {
    var url = 'tushuo/api/entries/' + this.id;
    return this.util.get(url).then((res: any) => {
      if (!res)return;
      let response = res.json();
      this.hasInit = true;
      let d;
      d=this.data;

      let avatarPostfix='?x-oss-process=image/resize,m_fill,limit_0,w_60,h_60/quality,Q_100';
      d.user_photo = response.entrant_photo ? response.entrant_photo+avatarPostfix : 'assets/images/detail/avatar.png';
      d.real_name = response.entrant_real_name;

      var images = [];
      if (response.cases) {
        var cases = response.cases;

        d = this.projectData;

        d.project_id = cases.id ? cases.id : '';
        d.project_name = cases.name ? cases.name : '';
        d.project_en_name = cases.en_name ? cases.en_name : '';
        d.project_type_id = cases.type_id ? cases.type_id : 0;
        d.project_province_id = cases.province_id ? cases.province_id : 0;
        d.project_city_id = cases.city_id ? cases.city_id : 0;
        let day = cases.completion_at ? cases.completion_at : '';
        d.project_completion_at = this.parseDay(day, true);
        d.project_area_total = cases.area_total ? cases.area_total : '';
        d.project_investment_total = cases.investment_total ? cases.investment_total : '';
        d.project_designer_name = cases.designer_name ? cases.designer_name : '';
        d.project_designer_en_name = cases.designer_en_name ? cases.designer_en_name : '';
        d.project_location = this.util.translateToBr(cases.location ? cases.location : '');
        d.project_artistic_conception = this.util.translateToBr(cases.artistic_conception ? cases.artistic_conception : '');
        d.project_space_layout = this.util.translateToBr(cases.space_layout ? cases.space_layout : '');
        d.project_design_material = this.util.translateToBr(cases.design_material ? cases.design_material : '');
        d.project_user_experience = this.util.translateToBr(cases.user_experience ? cases.user_experience : '');

        d.province = cases.province ? cases.province.name : '';
        d.city = cases.city ? cases.city.name : '';
        d.address = d.province + '' + d.city;
        d.project_type = cases.type ? cases.type.name : '';


        var imageList = cases.map_images;
        var img;
        var info = {
          width: 0,
          height: 0
        };
        var url;
        var i = 0;
        //实景图

        for (i = 0; i < imageList.length; i++) {
          img = imageList[i];
          let postfix=i==0?this.bannerPostfix:this.postfix;
          var obj = {
            url: img.url,
            src: img.url + postfix,
            loaded: false,
            title: img.title
          };
          info.width = img.width ? img.width : 0;
          info.height = img.height ? img.height : 0;
          url = img.url;
          if (info.width > 0 && info.height > 0) {
            var maxLength;
            if (info.width > info.height) {
              maxLength = info.width > 1200 ? 1200 : info.width;
              maxLength += '/quality,q_80';
              url += '?x-oss-process=image/resize,w_' + maxLength;
            } else {
              maxLength = info.height > 1200 ? 1200 : info.height;
              maxLength += '/quality,q_80';
              url += '?x-oss-process=image/resize,h_' + maxLength;
            }
          } else {
            url += '?x-oss-process=image/resize,w_1200/quality,q_80';
          }
          this.urlArraysCompress.push(url);
          this.urlArrays.push(img.url);
          images.push(obj);
        }
        if (images.length > 0) {
          this.data.map = images[0].url;//第一张实景图
        } else {
          this.data.map = this.emptyImage;//第一张实景图
        }
        //平面图
        imageList = cases.plan_images;
        for (i = 0; i < imageList.length; i++) {
          img = imageList[i];
          let index = img.title.lastIndexOf(".");
          if (index > 0) {
            img.title = img.title.substr(0, index);
          }
          let obj = {
            url: img.url,
            src: img.url + this.postfix,
            loaded: false,
            title: img.title
          };
          info.width = img.width ? img.width : 0;
          info.height = img.height ? img.height : 0;
          url = img.url;
          if (info.width > 0 && info.height > 0) {
            var maxLength;
            if (info.width > info.height) {
              maxLength = info.width;
              if (maxLength > 1200) {
                maxLength = 1920 + '/quality,q_80';
              }
              url += '?x-oss-process=image/resize,w_' + maxLength;
            } else {
              maxLength = info.height;
              if (maxLength > 1200) {
                maxLength = 1200 + '/quality,q_80';
              }
              url += '?x-oss-process=image/resize,h_' + maxLength;
            }
          } else {
            url += '?x-oss-process=image/resize,w_1200/quality,q_80';
          }
          this.urlArraysCompress.push(url);
          images.push(obj);
          this.urlArrays.push(img.url);
        }
        this.images = images;
      } else {
        this.data.map = this.emptyImage;//第一张实景图
      }

      console.log(response);
      // config.hasInit = true;
      // config.loading = false;
      // config.total = response.total;
      // config.pageCount = response.last_page;
      // var data = this.parseIllustrationData(response.data);
      // if (config.page == 1) {
      //   this.dataConfig.data = [];
      //   this.dataConfig.data = data;
      // } else {
      //   this.dataConfig.data = this.dataConfig.data.concat(data);
      // }
      // if (data.length == 0) {
      //   this.renderSingle();
      // }
    });

  }

}
