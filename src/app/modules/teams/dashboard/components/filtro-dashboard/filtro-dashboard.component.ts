import { Component, OnInit } from '@angular/core';
import { faList, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filtro-dashboard',
  templateUrl: './filtro-dashboard.component.html',
  styleUrls: ['./filtro-dashboard.component.scss']
})
export class FiltroDashboardComponent implements OnInit {

  faList = faList;
  faClock = faClock;

  constructor() { }

  ngOnInit(): void {
  }

}
