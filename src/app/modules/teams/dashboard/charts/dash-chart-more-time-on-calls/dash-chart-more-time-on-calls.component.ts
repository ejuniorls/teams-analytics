import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dash-chart-more-time-on-calls',
  templateUrl: './dash-chart-more-time-on-calls.component.html',
  styleUrls: ['./dash-chart-more-time-on-calls.component.scss'],
})
export class DashChartMoreTimeOnCallsComponent implements OnInit {
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Júnior', 'Bruno', 'Maria', 'André', 'Juliana', 'Pedro', 'Suzana'],
    datasets: [
      {
        data: [180, 175, 160, 130, 40, 55, 90],
        label: 'Desktop',
        backgroundColor: '#464775',
        borderColor: '#464775',
        hoverBackgroundColor: '#3c3d66',
        hoverBorderColor: '#3c3d66',
        borderWidth: 1,
      },
      {
        data: [21, 14, 8, 11, 90, 27, 2],
        label: 'Mobile',
        backgroundColor: '#8e578a',
        borderColor: '#8e578a',
        hoverBackgroundColor: '#804d7c',
        hoverBorderColor: '#804d7c',
        borderWidth: 1,
      },
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
