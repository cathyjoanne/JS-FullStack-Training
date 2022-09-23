import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  dropdown:string[]=["mens","womens","kids"];
  constructor() { }

  ngOnInit(): void {
  }

}
