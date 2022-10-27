import { TestBed } from '@angular/core/testing';

import { NavBottomLinksService } from './nav-bottom-links.service';

describe('NavBottomLinksService', () => {
  let service: NavBottomLinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavBottomLinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
