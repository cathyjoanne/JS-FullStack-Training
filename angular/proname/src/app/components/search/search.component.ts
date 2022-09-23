import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  fname:string="cathy";
  lname:string="joanne";

  constructor() { }

  ngOnInit(): void {
  }

}
