import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashChartMoreTimeOnCallsComponent } from './dash-chart-more-time-on-calls.component';

describe('DashChartMoreTimeOnCallsComponent', () => {
  let component: DashChartMoreTimeOnCallsComponent;
  let fixture: ComponentFixture<DashChartMoreTimeOnCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashChartMoreTimeOnCallsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashChartMoreTimeOnCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
