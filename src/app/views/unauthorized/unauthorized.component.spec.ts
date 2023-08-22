import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { UnauthorizedComponent } from './unauthorized.component';

describe(UnauthorizedComponent.name, () => {
  let component: UnauthorizedComponent;
  let fixture: ComponentFixture<UnauthorizedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UnauthorizedComponent, RouterTestingModule, TranslateModule.forRoot()],
    });
    fixture = TestBed.createComponent(UnauthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
