import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LoginPayloadInterface, LoginResponseInterface, RegisterPayloadInterface } from '@backend/auth/models';
import { API_URL } from '@providers';
import { Observable } from 'rxjs';

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

  public registerUser(payload: RegisterPayloadInterface): Observable<LoginResponseInterface> {
    return this.http.post<LoginResponseInterface>(`${this.url}/sign-up-user`, payload);
  }

  public registerEmployee(payload: RegisterPayloadInterface): Observable<void> {
    return this.http.post<void>(`${this.url}/sign-up-employee`, payload);
  }
}
