import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAboutusComponent } from './edit-aboutus.component';

describe('EditAboutusComponent', () => {
  let component: EditAboutusComponent;
  let fixture: ComponentFixture<EditAboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
