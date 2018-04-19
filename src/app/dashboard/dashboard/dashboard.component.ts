import { Component, OnInit } from '@angular/core';
import { DashboardStoreService } from '../dashboardStore.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  widgetsData;

  constructor(private dashboardStoreService: DashboardStoreService ) {}

  ngOnInit() {
    this.widgetsData = this.dashboardStoreService.getWidgetsData();
  }
}
