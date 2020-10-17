import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SimpleDashboardComponent } from './simple-dashboard/simple-dashboard.component';
import { AdvanceDashboardComponent } from './advance-dashboard/advance-dashboard.component';


@NgModule({
  declarations: [SimpleDashboardComponent, AdvanceDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
