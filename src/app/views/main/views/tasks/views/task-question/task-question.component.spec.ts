import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { API_URL } from '@providers';
import { MessageService } from 'primeng/api';

import { TaskQuestionComponent } from './task-question.component';

describe.skip(TaskQuestionComponent.name, () => {
  let component: TaskQuestionComponent;
  let fixture: ComponentFixture<TaskQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TaskQuestionComponent, HttpClientTestingModule, TranslateModule.forRoot()],
      providers: [{ provide: API_URL, useValue: '' }, MessageService],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(TaskQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
