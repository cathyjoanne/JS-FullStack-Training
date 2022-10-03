import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-firstchild',
  templateUrl: './firstchild.component.html',
  styleUrls: ['./firstchild.component.css']
})
export class FirstchildComponent implements OnInit {
  @Input() mycount!:number;
  count:number=0;
  @Output() myevent=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  xyz(){
    this.count++;
    this.myevent.emit(this.count);
  }
}