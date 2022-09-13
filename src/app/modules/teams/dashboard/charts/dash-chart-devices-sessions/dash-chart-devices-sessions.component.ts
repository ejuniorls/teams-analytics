import {Component, OnInit} from '@angular/core';
import {ChartConfiguration} from 'chart.js';

@Component({
  selector: 'app-dash-chart-devices-sessions',
  templateUrl: './dash-chart-devices-sessions.component.html',
  styleUrls: ['./dash-chart-devices-sessions.component.scss']
})
export class DashChartDevicesSessionsComponent implements OnInit {
  title = 'ng2-charts-demo';

  // Doughnut
  public doughnutChartLabels: string[] = ['Desktop', 'Mobile'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    {data: [51802, 850], label: 'Series A', backgroundColor: ['#464775', '#8e578a']}
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
