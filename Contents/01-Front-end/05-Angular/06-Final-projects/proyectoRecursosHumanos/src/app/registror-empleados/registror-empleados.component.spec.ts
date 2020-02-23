import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrorEmpleadosComponent } from './registror-empleados.component';

describe('RegistrorEmpleadosComponent', () => {
  let component: RegistrorEmpleadosComponent;
  let fixture: ComponentFixture<RegistrorEmpleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrorEmpleadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrorEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
