import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-tear-down',
  templateUrl: './setup-tear-down.component.html',
  styleUrls: ['./setup-tear-down.component.less']
})
export class SetupTearDownComponent implements OnInit {
  totalVotes: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  upVotes(): number {
    return this.totalVotes++;
  }

  downVotes(): number {
    return this.totalVotes--;
  }
}
