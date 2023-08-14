import { EnvironmentProviders, Provider } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { TitleService } from '@core/services/title.service';

export const appProviders: (Provider | EnvironmentProviders)[] = [
  {
    provide: TitleStrategy,
    useClass: TitleService,
  },
];
