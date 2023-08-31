import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_URL } from '@providers';
import { Observable } from 'rxjs';
import { LoginPayloadInterface, LoginResponseInterface } from 'src/app/backend/auth/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url: string = `${this.apiUrl}/auth`;
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string
  ) {}

  public login(payload: LoginPayloadInterface): Observable<LoginResponseInterface> {
    return this.http.post<LoginResponseInterface>(`${this.url}/sign-in`, payload);
  }
}
