import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inputchild',
  templateUrl: './inputchild.component.html',
  styleUrls: ['./inputchild.component.css']
})
export class InputchildComponent implements OnInit {
  @Input() mycount!:number;
  count:number=0;
  @Output() myevent=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  xyz(){
    this.myevent.emit(this.count++);
  }

}
