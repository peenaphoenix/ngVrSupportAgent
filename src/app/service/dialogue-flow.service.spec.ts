import { TestBed, inject } from '@angular/core/testing';

import { DialogueFlowService } from './dialogue-flow.service';

describe('DialogueFlowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogueFlowService]
    });
  });

  it('should be created', inject([DialogueFlowService], (service: DialogueFlowService) => {
    expect(service).toBeTruthy();
  }));
});
