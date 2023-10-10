import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { API_URL } from '@providers';
import { MessageService } from 'primeng/api';

import { CandidatesComponent } from './candidates.component';

describe(CandidatesComponent.name, () => {
  let component: CandidatesComponent;
  let fixture: ComponentFixture<CandidatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CandidatesComponent, HttpClientTestingModule, TranslateModule.forRoot()],
      providers: [{ provide: API_URL, useValue: '' }, MessageService],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(CandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
