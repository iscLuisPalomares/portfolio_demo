import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdMonitorComponent } from './prod-monitor.component';

describe('ProdMonitorComponent', () => {
  let component: ProdMonitorComponent;
  let fixture: ComponentFixture<ProdMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdMonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
