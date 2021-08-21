import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitorsComponent } from './event-emitors.component';

describe('EventEmitorsComponent', () => {
  let component: EventEmitorsComponent;
  let fixture: ComponentFixture<EventEmitorsComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
