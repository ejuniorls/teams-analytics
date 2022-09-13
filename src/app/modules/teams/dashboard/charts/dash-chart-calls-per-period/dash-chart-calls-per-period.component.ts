import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dash-chart-calls-per-period',
  templateUrl: './dash-chart-calls-per-period.component.html',
  styleUrls: ['./dash-chart-calls-per-period.component.scss'],
})
export class DashChartCallsPerPeriodComponent implements OnInit {
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: '',
        backgroundColor: '#464775',
        borderColor: '#464775',
        hoverBackgroundColor: '#3c3d66',
        hoverBorderColor: '#3c3d66',
        borderWidth: 1,
      },
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor() {}

  ngOnInit(): void {}
}
