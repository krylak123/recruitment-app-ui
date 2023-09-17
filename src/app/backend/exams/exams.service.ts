import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_URL } from '@providers';
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

  public createExam(payload: ExamPayloadInterface): Observable<void> {
    return this.http.post<void>(`${this.url}`, payload);
  }
}
