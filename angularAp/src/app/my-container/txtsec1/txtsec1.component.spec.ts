import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Txtsec1Component } from './txtsec1.component';

describe('Txtsec1Component', () => {
  let component: Txtsec1Component;
  let fixture: ComponentFixture<Txtsec1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Txtsec1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Txtsec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
