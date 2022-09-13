import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashChartDevicesSessionsComponent } from './dash-chart-devices-sessions.component';

describe('DashChartDevicesSessionsComponent', () => {
  let component: DashChartDevicesSessionsComponent;
  let fixture: ComponentFixture<DashChartDevicesSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashChartDevicesSessionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashChartDevicesSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
