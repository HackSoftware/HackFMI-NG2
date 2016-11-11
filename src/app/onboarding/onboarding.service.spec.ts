/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OnboardgingService } from './onboarding.service';

describe('Service: Onboardging', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnboardgingService]
    });
  });

  it('should ...', inject([OnboardgingService], (service: OnboardgingService) => {
    expect(service).toBeTruthy();
  }));
});
