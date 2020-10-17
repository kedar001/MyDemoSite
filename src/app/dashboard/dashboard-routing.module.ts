import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleDashboardComponent } from './simple-dashboard/simple-dashboard.component';
import { AdvanceDashboardComponent } from './advance-dashboard/advance-dashboard.component';

const routes: Routes = [
  { path: '', component: SimpleDashboardComponent},
  { path: 'advance', component: AdvanceDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
