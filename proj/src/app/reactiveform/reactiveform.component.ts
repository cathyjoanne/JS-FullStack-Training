import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

function ageRangeValidator(control:AbstractControl){
  if(control.value!==undefined && (isNaN(control.value) || control.value<18 ||control.value>45)){
    return {'ageError':true}
  }
  return null;
}

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  myForm=new FormGroup({
    fullName: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]+")]),
    mobile: new FormControl('',[Validators.required,Validators.pattern("[6-9][0-9]{9}")]),
    age: new FormControl('',[Validators.required,ageRangeValidator]),
    email: new FormControl('',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    gender: new FormControl('',[Validators.required]),
  })
  constructor() { }

  get fdata(){
    return this.myForm.controls;
  }
  postData(){
    let formData=this.myForm.getRawValue();
    console.log(formData)
  }

  ngOnInit(): void {
  }

}
