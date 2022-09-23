import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comData:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  getComments(){
    const API="https://jsonplaceholder.typicode.com/comments";
    this.http.get(API).subscribe(res=>{
      console.log(res)
      this.comData=res;
    })
  }
}
