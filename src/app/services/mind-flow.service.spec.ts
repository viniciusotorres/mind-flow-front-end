import { TestBed } from '@angular/core/testing';

import { MindFlowService } from './mind-flow.service';

describe('MindFlowService', () => {
  let service: MindFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MindFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
