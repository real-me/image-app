import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoginProvider {

  /**
   * 是否已经登录
   * @type {boolean}
   */
  isLogin:boolean=false;

  /**
   * 令牌
   * @type {string}
   */
  token:string='';

  /**
   * 用户信息
   * @type {{name: any; realName: any; role: any}}
   */
  user:object={
    name:null,
    realName:null,
    role:null
  };

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }

}
