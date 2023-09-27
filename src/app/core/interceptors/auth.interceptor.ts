import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const idToken: string | null = localStorage.getItem('access_token');

    if (idToken) {
      const cloned: HttpRequest<unknown> = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + idToken).append('Content-Type', 'application/json'),
      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
