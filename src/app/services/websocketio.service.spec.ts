import { TestBed } from '@angular/core/testing';

import { WebsocketioService } from './websocketio.service';

xdescribe('WebsocketioService', () => {
  let service: WebsocketioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsocketioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
