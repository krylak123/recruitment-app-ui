import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_URL } from '@providers';
import { ExpLevelEnum } from '@shared/enums';
import { Observable } from 'rxjs';

import {
  QuestionClosePayload,
  QuestionCloseResponseInterface,
  QuestionOpenPayload,
  QuestionOpenResponseInterface,
} from './models';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private readonly url: string = `${this.apiUrl}/question`;
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string
  ) {}

  public getQuestionOpenList(phrase: string, expLevel?: ExpLevelEnum): Observable<QuestionOpenResponseInterface[]> {
    console.log(phrase, expLevel);
    return this.http.get<QuestionOpenResponseInterface[]>(`${this.url}/open/all`);
  }

  public getQuestionOCloseList(phrase: string, expLevel?: ExpLevelEnum): Observable<QuestionCloseResponseInterface[]> {
    console.log(phrase, expLevel);
    return this.http.get<QuestionCloseResponseInterface[]>(`${this.url}/close/all`);
  }

  public createOpenQuestion(payload: QuestionOpenPayload): Observable<void> {
    return this.http.post<void>(`${this.url}/open`, payload);
  }

  public createCloseQuestion(payload: QuestionClosePayload): Observable<void> {
    return this.http.post<void>(`${this.url}/close`, payload);
  }
}