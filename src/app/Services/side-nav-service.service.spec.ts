import { TestBed } from '@angular/core/testing';

import { SideNavServiceService } from './side-nav-service.service';

describe('SideNavServiceService', () => {
  let service: SideNavServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideNavServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
