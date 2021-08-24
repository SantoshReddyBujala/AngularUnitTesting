import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitorsComponent } from './event-emitors.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('EventEmitorsComponent', () => {
  let component: EventEmitorsComponent;
  let fixture: ComponentFixture<EventEmitorsComponent>;
  let de: DebugElement;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventEmitorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEmitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de =  fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('"Add Click" should increase by 1', () => {
    const h1= de.query(By.css('h1'));
    const btn= de.query(By.css('#addBtnClick'));
    btn.triggerEventHandler('click',{})
    fixture.detectChanges();
    expect(component.clickValue).toEqual(parseInt(h1.nativeElement.innerText))
  });

  it('"Sub Click" should decrease by 1', () => {
    const h1= de.query(By.css('h1'));
    const btn= de.query(By.css('#subBtnClick'));
    btn.triggerEventHandler('click',{})
    fixture.detectChanges();
    expect(component.clickValue).toEqual(parseInt(h1.nativeElement.innerText))
  });
});
