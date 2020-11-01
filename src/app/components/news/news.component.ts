import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public title = 'I am a news component title';

  public username = 'Felix';

  public userInfo = {
    username: 'Felix',
    age: 17
    };
   public content = '<h2>this is a html</h2>' ;
   public message: any ;
  constructor() {
    this.message = 'this is to assign value to property' ;
  }
  list = [1111, 2222, 3333];
  userList: any[] = [
    {userName: 'Felix', age: 18},
    {userName: 'Sherry', age: 19},
    {userName: 'Tome', age: 21}
  ] ;

  ngOnInit(): void {
  }

}
