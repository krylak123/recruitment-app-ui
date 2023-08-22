import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpFormAdapterService } from '@views/auth/components/sign-up/adapters/sign-up-form-adapter.service';

import { SignUpFormComponent } from './sign-up-form.component';

describe(SignUpFormComponent.name, () => {
  let component: SignUpFormComponent;
  let fixture: ComponentFixture<SignUpFormComponent>;
  let formAdapter: SignUpFormAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignUpFormComponent],
      providers: [SignUpFormAdapterService],
    });
    fixture = TestBed.createComponent(SignUpFormComponent);
    component = fixture.componentInstance;
    formAdapter = TestBed.inject(SignUpFormAdapterService);
    component.form = formAdapter.createForm();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
