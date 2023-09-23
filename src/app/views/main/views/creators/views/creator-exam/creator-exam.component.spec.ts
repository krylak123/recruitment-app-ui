import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { API_URL } from '@providers';
import { MessageService } from 'primeng/api';

import { CreatorExamComponent } from './creator-exam.component';

describe(CreatorExamComponent.name, () => {
  let component: CreatorExamComponent;
  let fixture: ComponentFixture<CreatorExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CreatorExamComponent,
        RouterTestingModule,
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
      providers: [MessageService, provideMockStore(), { provide: API_URL, useValue: '' }],
    });
    fixture = TestBed.createComponent(CreatorExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
