import { TestBed } from '@angular/core/testing';

import { AuthuserguardGuard } from './authuserguard.guard';

describe('AuthuserguardGuard', () => {
  let guard: AuthuserguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthuserguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
