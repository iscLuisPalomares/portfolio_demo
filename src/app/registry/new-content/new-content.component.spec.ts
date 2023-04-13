import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContentComponent } from './new-content.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('NewContentComponent', () => {
  let component: NewContentComponent;
  let fixture: ComponentFixture<NewContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewContentComponent ],
      providers: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
