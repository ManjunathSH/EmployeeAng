import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetaisByIdComponent } from './employee-detais-by-id.component';

describe('EmployeeDetaisByIdComponent', () => {
  let component: EmployeeDetaisByIdComponent;
  let fixture: ComponentFixture<EmployeeDetaisByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetaisByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetaisByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
