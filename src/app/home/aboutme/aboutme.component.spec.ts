import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { getBackEndUrl } from 'src/main';
import { AboutmeComponent } from './aboutme.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

xdescribe('AboutmeComponent', () => {
  let component: AboutmeComponent;
  let fixture: ComponentFixture<AboutmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientModule]
    });

    fixture = TestBed.createComponent(AboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
