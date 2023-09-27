import { Injectable } from '@angular/core';
import { UserInterface } from '@backend/users';
import { AppState } from '@core/store/app.reducer';
import { AuthActions } from '@core/store/auth';
import { Store } from '@ngrx/store';
import { RoleEnum } from '@shared/enums';
import jwtDecode from 'jwt-decode';

interface TokenInterface {
  sub: string;
  firstName: string;
  lastName: string;
  role: RoleEnum;
  exp: number;
  iat: number;
}

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private store: Store<AppState>) {}
  public initAuth(): void {
    const token: string | null = this.getTokenFromLocalStorage();

    if (!token) return;

    if (this.tokenIsExpired()) {
      this.removeTokenFromLocalStorage();
    } else {
      this.store.dispatch(AuthActions.loginSuccess({ res: { access_token: token } }));
    }
  }

  public setUser(token: string): void {
    const decodedToken: TokenInterface = this.decodeToken(token);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { sub, exp, iat, ...res } = decodedToken;

    const user: UserInterface = {
      ...res,
      id: sub,
    };

    this.setTokenInLocalStorage(token, exp);
    this.store.dispatch(AuthActions.setCurrentUser({ user }));
  }

  public handleLogout(): void {
    this.removeTokenFromLocalStorage();
    this.store.dispatch(AuthActions.logout());
  }

  public tokenIsExpired(): boolean {
    const expiredTo: string | null = this.getTokenExpiredFromLocalStorage();

    if (!expiredTo) return true;

    return expiredTo ? +expiredTo < new Date().getTime() / 1000 : true;
  }

  private getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('access_token');
  }

  private getTokenExpiredFromLocalStorage(): string | null {
    return localStorage.getItem('expired_at');
  }

  private setTokenInLocalStorage(token: string, exp: number): void {
    localStorage.setItem('access_token', token);
    localStorage.setItem('expired_at', exp.toString());
  }

  private removeTokenFromLocalStorage(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expired_at');
  }

  private decodeToken(token: string): TokenInterface {
    return jwtDecode(token);
  }
}
