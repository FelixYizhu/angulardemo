import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showAside(){

    // get dom node
    var asideDom= document.getElementById('aside') ;
    asideDom.style.transform="translate(0,0)";
  }
  hideAside(){

    // get dom node
    var asideDom= document.getElementById('aside') ;
    asideDom.style.transform="translate(100%,0)";
  }
}
