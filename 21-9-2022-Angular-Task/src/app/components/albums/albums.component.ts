import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albumData:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const API="https://jsonplaceholder.typicode.com/albums";
    this.http.get(API).subscribe(res=>{
      this.albumData = res;
    })
  }

}
