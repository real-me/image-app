import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DesignersProvider {

  data=[
    {
      name:'海德娜娜',
      province:'广东',
      city:'广州',
      introduce:'擅长  酒店、家居住宅',
      fans:'22万',
      follow:false,
      url:'assets/images/designer/avatar1.png'
    },
    {
      name:'洪文谅',
      province:'广东',
      city:'深圳',
      introduce:'擅长  酒店、家居住宅',
      fans:'1万',
      follow:true,
      url:'assets/images/designer/avatar2.png'
    },
    {
      name:'梁志天',
      province:'香港',
      city:'荃湾',
      introduce:'擅长  酒店、家居住宅',
      fans:'26万',
      follow:true,
      url:'assets/images/designer/avatar3.png'
    },
    {
      name:'凯莉赫本',
      province:'北京',
      city:'',
      introduce:'擅长  酒店、家居住宅',
      fans:'52万',
      follow:true,
      url:'assets/images/designer/avatar4.png'
    },
    {
      name:'王逸林',
      province:'广东',
      city:'广州',
      introduce:'擅长  酒店、家居住宅',
      fans:'2万',
      follow:false,
      url:'assets/images/designer/avatar5.png'
    },
    {
      name:'琛',
      province:'广东',
      city:'广州',
      introduce:'擅长  酒店、家居住宅',
      fans:'12万',
      follow:false,
      url:'assets/images/designer/avatar6.png'
    }
  ];

  constructor(public http: Http) {

  }

  /**
   * 获取数据
   * @param params 参数
   * @returns {Array} 设计师
   */
  getData(params){
    let result=[];
    let len=this.data.length;
    for(let i=0;i<len;i++){
      let d=this.data[i];
      let item={
        name:d.name,
        province:d.province,
        city:d.city,
        location:d.province+' '+d.city,
        introduce:d.introduce,
        fans:d.fans,
        follow:d.follow,
        url:d.url
      };
      if(params.province==''&&params.city==''){

      }else{
        item.province=params.province;
        item.city=params.city;
        item.follow=Math.random()>0.5?true:false;
      }
      // if(params.province){
      //   item.province=params.province;
      // }
      // if(params.city){
      //   item.city=params.city;
      // }


      item.location=item.province+' '+item.city;
      result.push(item);
    }
    return result;
  }

}
