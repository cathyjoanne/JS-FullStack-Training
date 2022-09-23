import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todoData:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const API="https://jsonplaceholder.typicode.com/todos";
    this.http.get(API).subscribe(res=>{
      this.todoData = res;
    })
  }

}
