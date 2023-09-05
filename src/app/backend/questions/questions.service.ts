import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { QuestionClosePayload } from '@backend/questions/models/question-close-payload';
import { API_URL } from '@providers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private readonly url: string = `${this.apiUrl}/question`;
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string
  ) {}

  public createCloseQuestion(payload: QuestionClosePayload): Observable<void> {
    return this.http.post<void>(`${this.url}/close`, payload);
  }
}
