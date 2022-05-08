import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentEnquiryComponent } from './view-student-enquiry.component';

describe('ViewStudentEnquiryComponent', () => {
  let component: ViewStudentEnquiryComponent;
  let fixture: ComponentFixture<ViewStudentEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStudentEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
