import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';

describe(AppComponent.name, () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AppComponent, TranslateModule.forRoot()],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
