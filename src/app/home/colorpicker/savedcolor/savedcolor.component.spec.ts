import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedcolorComponent } from './savedcolor.component';

describe('SavedcolorComponent', () => {
  let component: SavedcolorComponent;
  let fixture: ComponentFixture<SavedcolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedcolorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
