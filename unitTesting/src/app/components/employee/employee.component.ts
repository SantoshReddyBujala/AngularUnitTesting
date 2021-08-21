import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less']
})
export class EmployeeComponent implements OnInit {

  constructor(private authService: AuthenticationService) { 
    this.authService.authenticate();
  }

  ngOnInit(): void {
  }

  getSalarySlip(): string {
    if(this.authService.checkAuthenticate()) {
      return 'Salary Slip';
    }

    return 'Not Authenticated';
  }

}
