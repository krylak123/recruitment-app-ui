import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCloseComponent } from './question-close.component';

describe('QuestionCloseComponent', () => {
  let component: QuestionCloseComponent;
  let fixture: ComponentFixture<QuestionCloseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuestionCloseComponent],
    });
    fixture = TestBed.createComponent(QuestionCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
