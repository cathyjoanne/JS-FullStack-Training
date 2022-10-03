import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  color:string='white';
  constructor() { }

  ngOnInit(): void {
  }
  isblue(){
    this.color = 'lightblue';
  }
  ispink(){
    this.color = 'lightpink';
  }
  isgreen(){
    this.color = 'lightgreen';
  }
}
