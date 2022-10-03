import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  mydata={fName:'',lName:'',email:'',mobile:'',gender:'',toc:'', hobbies:'',remark:'',city:''}
  constructor() { }

  ngOnInit(): void {
  }
  postData(){
    console.log(this.mydata)
  }
}
