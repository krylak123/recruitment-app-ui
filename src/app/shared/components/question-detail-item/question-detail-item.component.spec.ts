import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDetailItemComponent } from './question-detail-item.component';

describe(QuestionDetailItemComponent.name, () => {
  let component: QuestionDetailItemComponent;
  let fixture: ComponentFixture<QuestionDetailItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuestionDetailItemComponent],
    });
    fixture = TestBed.createComponent(QuestionDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
