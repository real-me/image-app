import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import Swiper from 'swiper';

@IonicPage()
@Component({
  selector: 'page-browse',
  templateUrl: 'browse.html',
})
export class BrowsePage {

  swiper = null;
  data = [];
  index: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get('data');
    this.index = navParams.get('index');
  }

  ionViewDidLoad() {
    this.swiper = new Swiper('page-browse .swiper-container', {
      initialSlide: this.index,
      zoom: true,
      lazyLoading: true,
      paginationClickable: true,
      speed: 300,
      autoplayDisableOnInteraction: false,
      onSlideChangeEnd:(swiper)=>{this.index=swiper.activeIndex;}
      // autoplay: 3000,
      // prevButton: '.swiper-button-prev',
      // nextButton: '.swiper-button-next',
      // pagination: '.swiper-pagination'
    });
  }

  //页面移除时删除事件侦听
  viewWillUnload() {
    this.destroySwiper();//销毁分屏滑动
  }

  //销毁分屏滑动
  destroySwiper() {
    if (this.swiper) {
      this.swiper.destroy(true, true);
    }
    this.swiper = null;
  }

}
