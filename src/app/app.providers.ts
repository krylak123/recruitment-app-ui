import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EnvironmentProviders, InjectionToken, Provider } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { AuthInterceptor } from '@core/interceptors';
import { TitleService } from '@core/services/title.service';
import { environment } from '@envs/environment';

export const API_URL: InjectionToken<string> = new InjectionToken<string>('API_URL');
export const appProviders: (Provider | EnvironmentProviders)[] = [
  {
    provide: TitleStrategy,
    useClass: TitleService,
  },
  {
    provide: API_URL,
    useValue: environment.API_URL,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
];
