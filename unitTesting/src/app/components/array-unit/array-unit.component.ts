import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-unit',
  templateUrl: './array-unit.component.html',
  styleUrls: ['./array-unit.component.less']
})
export class ArrayUnitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  greet(name: string): string {
    return `Welcome ${name} !`;
  }

  getCurrency() {
    return ['USD', 'AUD', 'EUR'];
  }
}
