import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blurb:string="this is a new page made w angular";
  points:string[]=["i","want","to","read","<3"]
  imageurl:string="https://picsum.photos/200/200";
  constructor() { }

  ngOnInit(): void {
  }

}
