import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListStudentComponent } from './my-list-student.component';

describe('MyListStudentComponent', () => {
  let component: MyListStudentComponent;
  let fixture: ComponentFixture<MyListStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
