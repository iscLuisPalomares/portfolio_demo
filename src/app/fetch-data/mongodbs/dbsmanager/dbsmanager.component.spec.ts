import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbsmanagerComponent } from './dbsmanager.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { getBackEndUrl } from 'src/main';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

describe('DbsmanagerComponent', () => {
  let component: DbsmanagerComponent;
  let fixture: ComponentFixture<DbsmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ],
      providers: [HttpClientModule, HttpClient, HttpHandler, { provide: 'BACKEND_URL', useValue: '' }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbsmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
