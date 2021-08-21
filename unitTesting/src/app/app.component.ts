import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'unitTesting';

  compute(num: number): number {
    if (num < 0) {
      return 0;
    }
    return num + 1;
  }

  addTwo(param1: number, param2: number): number {
    return param1 + param2;
  }
}
