import { TestBed } from '@angular/core/testing';

import { CharacterProviderService } from './character-provider.service';

describe('CharacterProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterProviderService = TestBed.get(CharacterProviderService);
    expect(service).toBeTruthy();
  });
});
