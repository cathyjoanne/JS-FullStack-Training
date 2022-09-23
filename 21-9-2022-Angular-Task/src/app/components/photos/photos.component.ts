import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photoData:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const API = "https://jsonplaceholder.typicode.com/photos";
    this.http.get(API).subscribe(res=>{
      this.photoData = res;
    })
  }

}
