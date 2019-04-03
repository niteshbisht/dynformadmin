import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackCollectComponent } from './feedback-collect.component';

describe('FeedbackCollectComponent', () => {
  let component: FeedbackCollectComponent;
  let fixture: ComponentFixture<FeedbackCollectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackCollectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
