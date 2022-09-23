import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private API="https://jsonplaceholder.typicode.com/users";
  userdata:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.API).subscribe(res=>{
      console.log(res)
      this.userdata=res;
    })
  }

}
