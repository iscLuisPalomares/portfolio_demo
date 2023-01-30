import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbsmanagerComponent } from './dbsmanager.component';

describe('DbsmanagerComponent', () => {
  let component: DbsmanagerComponent;
  let fixture: ComponentFixture<DbsmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbsmanagerComponent ]
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
