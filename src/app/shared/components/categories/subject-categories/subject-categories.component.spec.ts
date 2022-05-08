import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCategoriesComponent } from './subject-categories.component';

describe('SubjectCategoriesComponent', () => {
  let component: SubjectCategoriesComponent;
  let fixture: ComponentFixture<SubjectCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
