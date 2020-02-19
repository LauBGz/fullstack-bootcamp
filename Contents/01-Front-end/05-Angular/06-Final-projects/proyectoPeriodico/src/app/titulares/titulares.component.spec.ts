import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitularesComponent } from './titulares.component';

describe('TitularesComponent', () => {
  let component: TitularesComponent;
  let fixture: ComponentFixture<TitularesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitularesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
