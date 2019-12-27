import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstpComponent } from './bootstp.component';

describe('BootstpComponent', () => {
  let component: BootstpComponent;
  let fixture: ComponentFixture<BootstpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
