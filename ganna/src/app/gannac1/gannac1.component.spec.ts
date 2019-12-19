import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gannac1Component } from './gannac1.component';

describe('Gannac1Component', () => {
  let component: Gannac1Component;
  let fixture: ComponentFixture<Gannac1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gannac1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gannac1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
