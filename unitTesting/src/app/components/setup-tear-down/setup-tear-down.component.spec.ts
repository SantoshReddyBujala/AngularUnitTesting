import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupTearDownComponent } from './setup-tear-down.component';

describe('SetupTearDownComponent', () => {
  let component: SetupTearDownComponent;
  let fixture: ComponentFixture<SetupTearDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupTearDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupTearDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('It should increment the total votes', () => {
    component.upVotes();
    expect(component.totalVotes).toBe(1);
  });

  it('It should be decrement the total votes', () => {
    component.downVotes()
    expect(component.totalVotes).toBe(-1);
  });
});
