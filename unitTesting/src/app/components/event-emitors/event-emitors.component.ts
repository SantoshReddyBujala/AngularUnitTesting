import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-emitors',
  templateUrl: './event-emitors.component.html',
  styleUrls: ['./event-emitors.component.less']
})
export class EventEmitorsComponent implements OnInit {
  clickValue: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addClick=(): void=>{
    this.clickValue += 1;
  }

  subClick=(): void=>{
    this.clickValue -= 1;
  }

}
