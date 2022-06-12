import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSheet2Component } from './time-sheet2.component';

describe('TimeSheet2Component', () => {
  let component: TimeSheet2Component;
  let fixture: ComponentFixture<TimeSheet2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeSheet2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
