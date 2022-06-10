import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHereComponent } from './test-here.component';

describe('TestHereComponent', () => {
  let component: TestHereComponent;
  let fixture: ComponentFixture<TestHereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestHereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
