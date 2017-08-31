import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {UtilProvider} from "../../providers/util/util";

@IonicPage()
@Component({
  selector: 'page-publish',
  templateUrl: 'publish.html',
  animations: [
    // trigger('image', [
    //   state('current', style({
    //     opacity: 1,
    //     '-webkit-transform': 'translate(0,0)',
    //     transform: 'translate(0,0)'
    //   })),
    //   transition('* => void', [
    //     animate('0.1s ease-out', style({
    //       opacity: 0,
    //       '-webkit-transform': 'translate(100%,0)',
    //       transform: 'translate(100%,0)'
    //     }))
    //   ])
    // ]),
    trigger('tag', [
      state('in', style({
        opacity: 1,
        '-webkit-transform': 'translate(0,0)',
        transform: 'translate(0,0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          '-webkit-transform': 'translate(-100%,0)',
          transform: 'translate(-100%,0)'
        }),
        animate('0.3s ease-in')
      ])
    ])
  ]
})
export class PublishPage {

  refresh: () => void;
  data:any=[];
  hasInit:boolean=false;//是否已经初始化完毕
  step:number=1;//当前步骤（1：填写图片信息 2：选择来源和精选标签）
  source={
    type:0,//来源类型(1:原创 2:其它)
    from:''//选择其它时的值
  };
  tags=[
    {
      id:1,
      name:'竹板工艺',
      count:3,
      selected:false
    },
    {
      id:2,
      name:'石材',
      count:5,
      selected:false
    },
    {
      id:3,
      name:'瓷砖',
      count:6,
      selected:false
    },
    {
      id:4,
      name:'照明',
      count:2,
      selected:false
    },
    {
      id:5,
      name:'玻璃',
      count:0,
      selected:false
    },
    {
      id:6,
      name:'地毯',
      count:9,
      selected:false
    }
  ];//标签

  canInteractive:boolean=true;//是否可以进行交互
  timeId:number=null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private util: UtilProvider) {
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
    this.hasInit = false;
  }

  //初始化事件侦听
  initListener() {

  }

  //删除事件侦听
  removeListener() {
    try{
      clearTimeout(this.timeId);
    }catch(e){

    }
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

  //加载数据
  loadData(){
    let data=this.navParams.get('data');
    if(data){
      //判断是否有封面图
      let len=data.length;
      let hasCover=false;
      for(let i=0;i<len;i++){
        if(data[i].isCover){
          hasCover=true;
          break;
        }
      }
      //如果没有封面图则将第一张设置为封面图
      if(!hasCover&&len>0){
        data[0].isCover=true;
      }

      this.data=data;
      this.hasInit = true;
    }

    return Promise.resolve(true);
  }

  //更换封面
  changeCover(index:number){
    let len=this.data.length;
    for(let i=0;i<len;i++){
      this.data[i].isCover=i==index;
    }
  }

  //输入描述
  changeDescription(e:string,item){
    item.description=e;
  }

  //删除图片
  deleteItem(index:number){
    let item=this.data[index];
    let isCover=item.isCover;

    item.selected=false;
    item.description='';
    item.isCover=false;
    this.data.splice(index,1);

    if(this.data.length==0){
      this.util.goback();
    }else if(isCover){
      //将第一张设为封面图
      this.data[0].isCover=true;
    }
  }

  //判断是否可以启用下一步
  canGoNext(){
    let result:boolean=true;
    let len=this.data.length;
    if(len==0){
      result=false;
    }else{
      for(let i=0;i<len;i++){
        let description=this.data[i].description.trim();
        if(description==''){
          result=false;
          break;
        }
      }
    }
    return result;
  }


  //关闭当前页面
  close() {
    if(!this.canInteractive){
      return;
    }
    //二次确认
    this.util.alert({
      title:'您确定要退出吗?',
      message: '未发布的信息将不会保存!',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: '确认',
          handler: () => {
            this.closePage();
          }
        }
      ]
    });
  }

  //更换图片
  changeImage() {
    if(!this.canInteractive){
      return;
    }
    this.util.goback();
  }

  //下一步
  next(){
    if(this.canGoNext()){
      this.step=2;
    }
  }

  //上一步
  prev(){
    this.step=1;
  }

  //修改来源类型
  changeSourceType(type:number){
    this.source.type=type;
  }

  //是否可以显示清除来源按钮
  canShowClearSource(){
    let result:boolean=true;
    // let from=this.source.from.trim();
    let from=this.source.from;
    if(from==''){
      result=false;
    }
    return result;
  }

  //清除来源
  clearSource(){
    this.source.from='';
  }

  //新增精选
  addTag(){
    this.util.getNav().push('AddChoicePage',{data:this.tags});
  }

  selectTag(index:number){
    if(this.tags[index].selected){
      this.tags[index].selected=false;
    }else{
      let len=this.tags.length;
      for(let i=0;i<len;i++){
        this.tags[i].selected=i==index;
      }
    }
  }

  //判断是否可以进行发布
  canPublish(){
    let result:boolean=true;
    if(this.source.type==0){
      result=false;
    }else if(this.source.type==2){
      let from=this.source.from.trim();
      if(from==''){
        result=false;
      }
    }
    if(result){
      if(this.tags.length<=0){
        result=false;
      }else{
        //判断有无选中精选标签
        let len=this.tags.length;
        let count=0;
        for(let i=0;i<len;i++){
          if(this.tags[i].selected){
            count++;
            break;
          }
        }
        if(count==0){
          result=false;
        }
      }
    }
    return result;
  }

  //发布
  publish(){
    if(!this.canPublish()){
      return;
    }
    this.util.loading();
    let time=this.util.range(100,1000);
    this.timeId=setTimeout(()=>{
      this.util.hideLoading();
      this.canInteractive=false;
      this.util.toast('发布图说成功',1000,this.publishSuccess.bind(this));
    },time);
  }

  //发布成功
  publishSuccess(){
    this.closePage();
  }

  //关闭页面
  closePage(){
    let nav=this.util.getNav();
    let len=nav.getViews().length;
    if(len>=3){
      nav.remove(len-2,2);
    }else{
      this.goback();
    }
  }

}
