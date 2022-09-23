import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  count: number = 0;
  childdata:any;
  constructor() { }

  ngOnInit(): void { }
  abc() {
    this.count++;
  }
  getchild(data:any){
    this.childdata=data;
  }
}
