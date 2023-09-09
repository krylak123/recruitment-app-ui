import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { QuestionOpenPayload } from '@backend/questions/models/question-open-payload';
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

  public createOpenQuestion(payload: QuestionOpenPayload): Observable<void> {
    return this.http.post<void>(`${this.url}/open`, payload);
  }
}
