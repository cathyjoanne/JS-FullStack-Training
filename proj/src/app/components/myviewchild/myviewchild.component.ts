import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myviewchild',
  templateUrl: './myviewchild.component.html',
  styleUrls: ['./myviewchild.component.css']
})
export class MyviewchildComponent implements OnInit {
  title="cgvak"
  constructor() { }

  ngOnInit(): void {
  }
  abc(){
    return "sumit";
  }
}
