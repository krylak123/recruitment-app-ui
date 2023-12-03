import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ExamResponseInterface } from '@backend/exams/models/exam-response.interface';
import { API_URL } from '@providers';
import { ListResponseInterface } from '@shared/models/list-response.interface';
import { Observable } from 'rxjs';

import { ExamPayloadInterface } from './models/exam-payload.interface';

@Injectable({
  providedIn: 'root',
})
export class ExamsService {
  private readonly url: string = `${this.apiUrl}/exam`;

  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string
  ) {}

  public getExamList(): Observable<ListResponseInterface<ExamResponseInterface>> {
    return this.http.get<ListResponseInterface<ExamResponseInterface>>(`${this.url}/all`);
  }

  public createExam(payload: ExamPayloadInterface): Observable<void> {
    return this.http.post<void>(`${this.url}`, payload);
  }
}
