import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { environment } from '@envs/environment';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

if (environment.PRODUCTION) {
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
