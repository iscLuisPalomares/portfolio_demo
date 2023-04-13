import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerComponent } from './colorpicker.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ColorpickerComponent', () => {
  let component: ColorPickerComponent;
  let fixture: ComponentFixture<ColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPickerComponent ],
      providers: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
