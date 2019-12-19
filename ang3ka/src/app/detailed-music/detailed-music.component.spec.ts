import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedMusicComponent } from './detailed-music.component';

describe('DetailedMusicComponent', () => {
  let component: DetailedMusicComponent;
  let fixture: ComponentFixture<DetailedMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
