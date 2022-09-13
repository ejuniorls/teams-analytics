import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dash-chart-more-time-on-calls',
  templateUrl: './dash-chart-more-time-on-calls.component.html',
  styleUrls: ['./dash-chart-more-time-on-calls.component.scss']
})
export class DashChartMoreTimeOnCallsComponent implements OnInit {
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Desktop', backgroundColor: '#464775' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Mobile', backgroundColor: '#8e578a' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
