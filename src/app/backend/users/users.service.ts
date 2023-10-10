import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_URL } from '@providers';
import { ListResponseInterface } from '@shared/models/list-response.interface';
import { Observable } from 'rxjs';

import { UserResponseInterface } from './models/user-response.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly url: string = `${this.apiUrl}/users`;
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string
  ) {}

  public getCandidatesList(): Observable<ListResponseInterface<UserResponseInterface>> {
    return this.http.get<ListResponseInterface<UserResponseInterface>>(`${this.url}/candidates`);
  }

  public getEmployeesList(): Observable<ListResponseInterface<UserResponseInterface>> {
    return this.http.get<ListResponseInterface<UserResponseInterface>>(`${this.url}/employees`);
  }
}
