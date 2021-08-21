import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayUnitComponent } from './array-unit.component';

describe('ArrayUnitComponent', () => {
  let component: ArrayUnitComponent;
  let fixture: ComponentFixture<ArrayUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(()=>{
    //fixture = null;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should include name in the message', () => {
    expect(component.greet('Santosh')).toContain('Santosh');
  });
  
  it('Should include currency in the array', () => {
    expect(component.getCurrency()).toContain('EUR');
    expect(component.getCurrency()).toContain('USD');
    expect(component.getCurrency()).toContain('AUD');
  });

  it('toBe matching with ===', () => {
    const hello = 'Hellow World!';
    expect(hello).toBe('Hellow World!');
  })

  it('toBe matching with ==', () => {
    const hello = 'Hellow World!';
    expect(hello).toEqual('Hellow World!');
  })

  it('toBe matching with not.toEqual ==', () => {
    const hello = 'Hellow World!';
    expect(hello).not.toEqual('Hellow World! 2');
  })


  xit('toBe matching with numbers and strings in the word', () => {
    const hello = 'Hellow World! 1994';
    expect(hello).toMatch(/\d+/g)
    expect(hello).toMatch('Hellow World!');
  })
});
