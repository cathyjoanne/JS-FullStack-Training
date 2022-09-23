import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userData:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const API="https://jsonplaceholder.typicode.com/users";
    this.http.get(API).subscribe(res=>{
      this.userData = res;
    })
  }

}
