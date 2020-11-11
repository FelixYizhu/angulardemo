import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../services/request.service' ;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title = 'I am home title';
  public list: any[] = [
    {
      title : 'this is the news 1'
    },
    {
      title : 'this is the news 2'
    },
    {
      title : 'this is the news 3'
    }
  ];
  public flag = false;
  public orderStatus = 1; // 1. payed, 2. payed and confirmed order. 3. sent 4. got. 5.invalid

  public today = new Date();

  public keywords = 'default';

  constructor(public request: RequestService) {
   }

  ngOnInit(): void {
    let data = this.request.getData() ;
    console.log(data);

    // callback get async data

    // this.request.getCallBackData((data) => {
    // console.log(data) ;
    // });

    // promise get async data
    let promiseData=this.request.getPromiseData();
    promiseData.then((data) => {
    console.log(data);
    })

    //RxJS get async data
    // let rxjsData=this.request.getRxJSData();
    // rxjsData.subscribe((data) => {
    //   console.log(data);
    // })

    // revoke operation
    let revoke=this.request.getRxJSData();
    let d = revoke.subscribe((data) => {
      console.log(data);
    })
    setTimeout(() => {
      d.unsubscribe();
    }, 1000);
    // perform multiple times
    // let streemInterval=this.request.getRxJSIntervalData();
    // streemInterval.subscribe((data) => {
    //   console.log(data);
    // }) 
  }
  run(){
    alert('execute method');
  }
  getData(){
    alert(this.title);
  }
  updateData(){
    this.title = 'I am a new Title';
    alert(this.title);
  }
  keyDown(e){
    if (e.KeyCode === 13){
      console.log('press Enter');
    }
    else{
       console.log(e.target.value);
    }
  }
  updateKeywords(){
    this.keywords = 'new vaalue:12345';
  }

}
