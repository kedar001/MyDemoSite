import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { AuthFooterComponent } from './auth-footer/auth-footer.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';

@NgModule({
  declarations: [AuthHeaderComponent,AuthFooterComponent,DashboardHeaderComponent,DashboardFooterComponent, DashboardNavComponent],
  exports:[
    AuthHeaderComponent,
    AuthFooterComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent,        
    DashboardNavComponent
  ],   
  imports: [
    CommonModule,
    SharedRoutingModule    
  ]
})
export class SharedModule { }
