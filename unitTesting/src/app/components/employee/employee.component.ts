import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less']
})
export class EmployeeComponent implements OnInit {

  salSlip!: string;
  constructor(private authService: AuthenticationService) { 
    this.authService.authenticate();
  }

  ngOnInit(): void {
  }

  getSalarySlip(): void {
    if(this.authService.checkAuthenticate()) {
      this.salSlip = 'Salary Slip';
    } else{
      this.salSlip = 'Not Authenticated';
    }
  }

}
