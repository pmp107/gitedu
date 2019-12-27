import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuSpliceComponent } from './pu-splice.component';

describe('PuSpliceComponent', () => {
  let component: PuSpliceComponent;
  let fixture: ComponentFixture<PuSpliceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuSpliceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuSpliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
