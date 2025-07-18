import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdMonitorComponent } from './prod-monitor.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

xdescribe('ProdMonitorComponent', () => {
  let component: ProdMonitorComponent;
  let fixture: ComponentFixture<ProdMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdMonitorComponent ],
      providers: [HttpClient, HttpClientModule, HttpHandler, { provide: 'BACKEND_URL', useValue: '' }]
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
