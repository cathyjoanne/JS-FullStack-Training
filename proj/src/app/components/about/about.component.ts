import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MyviewchildComponent } from '../myviewchild/myviewchild.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild(MyviewchildComponent) child!: MyviewchildComponent;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    console.log(this.child.title);
    console.log(this.child.abc());
  }
}
