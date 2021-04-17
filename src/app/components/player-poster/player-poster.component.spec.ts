import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPosterComponent } from './player-poster.component';

describe('PlayerPosterComponent', () => {
  let component: PlayerPosterComponent;
  let fixture: ComponentFixture<PlayerPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerPosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
