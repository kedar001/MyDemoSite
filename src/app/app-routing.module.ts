import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { DASHBOARD_LAYOUT } from './routes/dashboard-layout-routes';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DEFAULT_ROUTES } from './routes/default-layout-routes';

const routes: Routes = [
  { path: '', component: AuthLayoutComponent, children: DEFAULT_ROUTES },
  { path: 'dashboard', component: DashboardLayoutComponent, children: DASHBOARD_LAYOUT },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }