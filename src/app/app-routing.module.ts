import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadenceComponent} from "./modules/admin/cadence/cadence.component";
import {TenantsComponent} from "./modules/admin/tenants/tenants.component";
import {PermissionsComponent} from "./modules/admin/permissions/permissions.component";
import {PricingComponent} from "./modules/admin/pricing/pricing.component";
import {AdminUsersComponent} from "./modules/admin/admin-users/admin-users.component";
import {CallrecordsComponent} from "./modules/teams/callrecords/callrecords.component";
import {DashboardComponent} from "./modules/teams/dashboard/dashboard.component";
import {ReportsComponent} from "./modules/teams/reports/reports.component";
import {SessionsComponent} from "./modules/teams/sessions/sessions.component";
import {LoginComponent} from "./modules/auth/login/login.component";
import {UsersComponent} from "./modules/teams/users/users.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },

  { path: 'login', component: LoginComponent },

  { path: 'admin/cadence', component: CadenceComponent },
  { path: 'admin/permissions', component: PermissionsComponent },
  { path: 'admin/pricing', component: PricingComponent },
  { path: 'admin/tenants', component: TenantsComponent },
  { path: 'admin/users', component: AdminUsersComponent },

  { path: 'teams/callrecords', component: CallrecordsComponent },
  { path: 'teams/dashboard', component: DashboardComponent },
  { path: 'teams/reports', component: ReportsComponent },
  { path: 'teams/sessions', component: SessionsComponent },
  { path: 'teams/users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
