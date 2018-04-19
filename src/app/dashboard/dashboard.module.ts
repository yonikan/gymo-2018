import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard.routing';
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetComponent } from './widget/widget.component';
import { DashboardStoreService } from './dashboardStore.service';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    ChartsModule
  ],
  declarations: [
    DashboardComponent,
    WidgetComponent
  ],
  providers: [
    DashboardStoreService
  ]
})
export class DashboardModule { }
