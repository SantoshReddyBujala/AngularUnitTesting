import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authService: AuthenticationService;
  let h1 = HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthenticationService);
    h1 = fixture.nativeElement.querySelector('h1');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return Authentication Check Called', () => {
    spyOn(authService, 'checkAuthenticate').and.returnValue(true);
    let salSlip = component.getSalarySlip()
    //expect(salSlip).toEqual('Salary Slip')
    expect(authService.checkAuthenticate).toHaveBeenCalled();
  });

  it('should Assert value to "h1" element from component', () => {
    let salSlip = component.getSalarySlip()
    fixture.detectChanges();
    let slipString = (<HTMLElement>document.getElementById('test')).textContent;
    console.log(slipString);
    expect(slipString).toContain(component.salSlip);
  });
  

});
