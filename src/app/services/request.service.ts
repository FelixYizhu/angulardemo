import { Injectable } from '@angular/core';
import {observable, Observable} from 'rxjs' ;
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }
  // sync
  getData(){
    return 'this is a service data' ;
  }

  // async   use callback
  getCallBackData(cb){

    setTimeout(() => {
      let username = 'Felix' ;
      cb(username);
    }, 1000);
  }
  // async   use promise
  getPromiseData(){

    return new Promise((resolve) => {
    setTimeout(() => {
      let username = 'Felix--Promise' ;
      resolve(username);
    }, 1000);
    })

  }

  // sync use RxJS
  getRxJSData(){
    return new Observable((observe)=>{
      setTimeout(() => {
        let username = 'Felix--ovservable' ;
        observe.next(username);
      }, 2000);
    })
  }

    // sync use RxJS  multiple times
    getRxJSIntervalData(){
      let count = 0;
      return new Observable((observe) => {
        setInterval(() => {
          count++;
          let username = 'Felix--ovservable-interval' + count ;
          observe.next(username);
        }, 1000);
      })
    }
}
