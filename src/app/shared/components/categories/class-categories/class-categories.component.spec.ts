import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCategoriesComponent } from './class-categories.component';

describe('ClassCategoriesComponent', () => {
  let component: ClassCategoriesComponent;
  let fixture: ComponentFixture<ClassCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
