import { Component } from '@angular/core';
import {IonicPage, NavParams} from "ionic-angular";

@IonicPage()
@Component({
  selector: 'browse',
  templateUrl: 'browse.html'
})
export class BrowseComponent {

  swiper=null;
  data=[];
  index:number=0;

  constructor(navParams: NavParams) {
    // this.data=navParams.get('data');
    // this.index=navParams.get('index');
  }


  // ionViewDidLoad() {
  //   this.swiper = new Swiper('page-browse .swiper-container', {
  //     zoom: true,
  //     paginationClickable: true,
  //     autoplay: 3000,
  //     speed:300,
  //     autoplayDisableOnInteraction : false,
  //     pagination: '.swiper-pagination',
  //     nextButton: '.swiper-button-next',
  //     prevButton: '.swiper-button-prev'
  //   });
  // }

  //页面移除时删除事件侦听
  // viewWillUnload() {
  //   this.destroySwiper();//销毁分屏滑动
  // }

  //销毁分屏滑动
  destroySwiper() {
    if(this.swiper){
      this.swiper.destroy(true,true);
    }
    this.swiper=null;
  }

}
