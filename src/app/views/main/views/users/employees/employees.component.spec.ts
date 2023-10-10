import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { API_URL } from '@providers';
import { MessageService } from 'primeng/api';

import { EmployeesComponent } from './employees.component';

describe(EmployeesComponent.name, () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmployeesComponent, HttpClientTestingModule, TranslateModule.forRoot()],
      providers: [{ provide: API_URL, useValue: '' }, MessageService],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
