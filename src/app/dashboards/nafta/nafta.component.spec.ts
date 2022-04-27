import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaftaComponent } from './nafta.component';

describe('NaftaComponent', () => {
  let component: NaftaComponent;
  let fixture: ComponentFixture<NaftaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaftaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaftaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
