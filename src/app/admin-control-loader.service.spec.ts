import { TestBed } from '@angular/core/testing';

import { AdminControlLoaderService } from './admin-control-loader.service';

describe('AdminControlLoader.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminControlLoaderService = TestBed.get(AdminControlLoaderService);
    expect(service).toBeTruthy();
  });
});
