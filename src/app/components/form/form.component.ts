import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public userInfo = {
    username: '',
    gender: '1' ,
    cityList: [
      'Beijing',
      'Melbourne',
      'NewYork'
    ] ,
    city: 'Melbourne' ,
    hobby: [
      {
      title : 'eating',
      checked : false
      },
      {
        title : 'sleeping',
        checked : false
      },
      {
        title : 'playing',
        checked : false
      }
    ] ,
    remark : ''
  };
  constructor() { }

  ngOnInit(): void {
  }
  doSubmit(){
    console.log(this.userInfo);
  }

}
