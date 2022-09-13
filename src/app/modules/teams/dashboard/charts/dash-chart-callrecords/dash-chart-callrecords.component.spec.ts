import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashChartCallrecordsComponent } from './dash-chart-callrecords.component';

describe('DashChartCallrecordsComponent', () => {
  let component: DashChartCallrecordsComponent;
  let fixture: ComponentFixture<DashChartCallrecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashChartCallrecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashChartCallrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
