import { TestBed } from '@angular/core/testing';

import { SignUpFormAdapterService } from './sign-up-form-adapter.service';

describe(SignUpFormAdapterService.name, () => {
  let service: SignUpFormAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignUpFormAdapterService],
    });
    service = TestBed.inject(SignUpFormAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
