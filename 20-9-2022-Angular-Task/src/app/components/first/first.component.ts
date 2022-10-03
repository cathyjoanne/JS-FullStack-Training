import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  showBool = false;
  images = ["https://picsum.photos/200/200?random=1", "https://picsum.photos/200/200?random=2", "https://picsum.photos/200/200?random=3"];
  count: number = 0;
  childdata:any;
  constructor() { }

  ngOnInit(): void {
  }
  showMessage() {
    this.showBool = (this.showBool) ? false : true;
  }
  abc() {
    this.count++;
  }
  getchild(data:any){
    this.childdata=data;
  }
}
