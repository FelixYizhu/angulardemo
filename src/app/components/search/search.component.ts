import { Component, OnInit, ViewChild } from '@angular/core';

// import service
import { StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public keyword = '';
  public historyList = [] ;
  public deleteItem = '' ;
  // get dom node
  @ViewChild('mybox') myBox: any ;
  constructor(public storage: StorageService) {
  }

  ngOnInit(): void {
    let searchlist: any = this.storage.get('searchlist');
    if (searchlist){
      this.historyList = searchlist;
    }

  }
    doSearch(){
      if(this.keyword === ''){
        alert('please input something');
        return;
      }
      if (this.historyList.indexOf(this.keyword) === -1){
        this.historyList.push(this.keyword);
        this.storage.set('searchlist', this.historyList);
      }
      this.keyword = '';
  }
  delete(key){
    this.historyList.splice(key, 1);
  }
}
