import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroDashboardComponent } from './filtro-dashboard.component';

describe('FiltroDashboardComponent', () => {
  let component: FiltroDashboardComponent;
  let fixture: ComponentFixture<FiltroDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
