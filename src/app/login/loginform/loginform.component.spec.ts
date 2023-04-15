import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginformComponent } from './loginform.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

xdescribe('LoginformComponent', () => {
  let component: LoginformComponent;
  let fixture: ComponentFixture<LoginformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginformComponent ],
      imports: [ToastrModule.forRoot(), FormsModule, ReactiveFormsModule],
      providers: [HttpClientModule, HttpClient, HttpHandler, ToastrService, { provide: Store, useValue: true }, { provide: 'BACKEND_URL', useValue: '' }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
