import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { API_URL } from '@providers';
import { MessageService } from 'primeng/api';

import { CreatorQuestionsFormAdapterService } from '../../adapters/creator-questions-form-adapter.service';
import { QuestionCloseComponent } from './question-close.component';

describe(QuestionCloseComponent.name, () => {
  let component: QuestionCloseComponent;
  let fixture: ComponentFixture<QuestionCloseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuestionCloseComponent, RouterTestingModule, HttpClientTestingModule, TranslateModule.forRoot()],
      providers: [CreatorQuestionsFormAdapterService, { provide: API_URL, useValue: '' }, MessageService],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(QuestionCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
