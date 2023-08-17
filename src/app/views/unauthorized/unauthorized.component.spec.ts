import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedComponent } from './unauthorized.component';

describe(UnauthorizedComponent.name, () => {
  let component: UnauthorizedComponent;
  let fixture: ComponentFixture<UnauthorizedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UnauthorizedComponent],
    });
    fixture = TestBed.createComponent(UnauthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});