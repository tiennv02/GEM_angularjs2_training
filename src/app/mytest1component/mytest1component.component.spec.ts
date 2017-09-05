import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mytest1componentComponent } from './mytest1component.component';

describe('Mytest1componentComponent', () => {
  let component: Mytest1componentComponent;
  let fixture: ComponentFixture<Mytest1componentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mytest1componentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mytest1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
