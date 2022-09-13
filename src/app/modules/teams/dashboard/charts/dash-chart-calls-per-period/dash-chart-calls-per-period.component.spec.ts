import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashChartCallsPerPeriodComponent } from './dash-chart-calls-per-period.component';

describe('DashChartCallsPerPeriodComponent', () => {
  let component: DashChartCallsPerPeriodComponent;
  let fixture: ComponentFixture<DashChartCallsPerPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashChartCallsPerPeriodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashChartCallsPerPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
