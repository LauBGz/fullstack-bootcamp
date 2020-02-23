import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioModifiyComponent } from './formulario-modifiy.component';

describe('FormularioModifiyComponent', () => {
  let component: FormularioModifiyComponent;
  let fixture: ComponentFixture<FormularioModifiyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioModifiyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioModifiyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
