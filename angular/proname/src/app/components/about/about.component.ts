import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  status:boolean=true;
  empData:any=[
    {"id":1,"name":"A"},
    {"id":2,"name":"B"},
    {"id":3,"name":"C"},
    {"id":4,"name":"D"},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  abc():void{
    this.status=this.status===true?false:true;
  }
}
