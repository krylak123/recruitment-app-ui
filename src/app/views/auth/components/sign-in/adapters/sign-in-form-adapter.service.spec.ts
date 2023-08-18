import { TestBed } from '@angular/core/testing';

import { SignInFormAdapterService } from './sign-in-form-adapter.service';

describe('SignInFormAdapterService', () => {
  let service: SignInFormAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignInFormAdapterService],
    });
    service = TestBed.inject(SignInFormAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
