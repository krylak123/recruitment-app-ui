import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

import { AppComponent } from './app.component';

describe(AppComponent.name, () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AppComponent, TranslateModule.forRoot()],
      providers: [MessageService, provideMockStore()],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
