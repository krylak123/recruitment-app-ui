import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { API_URL } from '@providers';
import { MessageService } from 'primeng/api';

import { CreatorQuestionsComponent } from './creator-questions.component';

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));

describe(CreatorQuestionsComponent.name, () => {
  let component: CreatorQuestionsComponent;
  let fixture: ComponentFixture<CreatorQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreatorQuestionsComponent, TranslateModule.forRoot(), RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: API_URL, useValue: '' }, MessageService],
    });
    fixture = TestBed.createComponent(CreatorQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
