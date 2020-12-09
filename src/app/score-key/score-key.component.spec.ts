import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreKeyComponent } from './score-key.component';

describe('ScoreKeyComponent', () => {
  let component: ScoreKeyComponent;
  let fixture: ComponentFixture<ScoreKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
