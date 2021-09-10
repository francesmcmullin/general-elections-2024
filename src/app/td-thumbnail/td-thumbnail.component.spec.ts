import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdThumbnailComponent } from './td-thumbnail.component';

describe('TdThumbnailComponent', () => {
  let component: TdThumbnailComponent;
  let fixture: ComponentFixture<TdThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
