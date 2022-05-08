import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEnquiresComponent } from './student-enquires.component';

describe('StudentEnquiresComponent', () => {
  let component: StudentEnquiresComponent;
  let fixture: ComponentFixture<StudentEnquiresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEnquiresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEnquiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
