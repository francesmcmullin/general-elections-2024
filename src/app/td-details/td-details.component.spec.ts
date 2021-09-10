import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdDetailsComponent } from './td-details.component';

describe('TdDetailsComponent', () => {
  let component: TdDetailsComponent;
  let fixture: ComponentFixture<TdDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
