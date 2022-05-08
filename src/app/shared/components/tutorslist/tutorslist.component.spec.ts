import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorslistComponent } from './tutorslist.component';

describe('TutorslistComponent', () => {
  let component: TutorslistComponent;
  let fixture: ComponentFixture<TutorslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
