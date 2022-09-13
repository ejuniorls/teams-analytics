import {Component, OnInit} from '@angular/core';
import {ChartConfiguration} from 'chart.js';

@Component({
  selector: 'app-dash-chart-callrecords',
  templateUrl: './dash-chart-callrecords.component.html',
  styleUrls: ['./dash-chart-callrecords.component.scss']
})
export class DashChartCallrecordsComponent implements OnInit {
  title = 'ng2-charts-demo';

  // Doughnut
  public doughnutChartLabels: string[] = ['Atendidas', 'Não Atendidas'];
  public doughnutChartDatasets: { data: number[]; label: string; backgroundColor: string[]; hoverBackgroundColor: string[]; borderColor: string[] } [] = [
    {
      data: [160, 25],
      label: 'Series A',
      backgroundColor: ['#464775', '#8e578a'],
      hoverBackgroundColor: ['#464775', '#8e578a'],
      borderColor: ['#464775', '#8e578a']
    }
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
