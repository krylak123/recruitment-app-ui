import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionOpenResponseInterface } from '@backend/questions';
import { TranslateModule } from '@ngx-translate/core';
import { ExpLevelEnum } from '@shared/enums';

import { QuestionDetailItemComponent } from './question-detail-item.component';

const testData: QuestionOpenResponseInterface = {
  id: 'test-id',
  name: 'test-name',
  content: 'test-content',
  expLevel: ExpLevelEnum.ENTRY,
  timeLimit: 10,
};

describe(QuestionDetailItemComponent.name, () => {
  let component: QuestionDetailItemComponent;
  let fixture: ComponentFixture<QuestionDetailItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuestionDetailItemComponent, TranslateModule.forRoot()],
    });
    fixture = TestBed.createComponent(QuestionDetailItemComponent);
    component = fixture.componentInstance;
    component.type = 'OPEN';
    component.data = testData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
