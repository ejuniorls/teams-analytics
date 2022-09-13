import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { CadenceComponent } from './modules/admin/cadence/cadence.component';
import { TenantsComponent } from './modules/admin/tenants/tenants.component';
import { PermissionsComponent } from './modules/admin/permissions/permissions.component';
import { PricingComponent } from './modules/admin/pricing/pricing.component';
import { SessionsComponent } from './modules/teams/sessions/sessions.component';
import { CallrecordsComponent } from './modules/teams/callrecords/callrecords.component';
import { ReportsComponent } from './modules/teams/reports/reports.component';
import { DashboardComponent } from './modules/teams/dashboard/dashboard.component';
import { AdminUsersComponent } from './modules/admin/admin-users/admin-users.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { CardTotalizadorComponent } from './modules/teams/dashboard/components/card-totalizador/card-totalizador.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FiltroDashboardComponent } from './modules/teams/dashboard/components/filtro-dashboard/filtro-dashboard.component';

import { NgChartsModule } from "ng2-charts";
import { DashChartCallrecordsComponent } from './modules/teams/dashboard/charts/dash-chart-callrecords/dash-chart-callrecords.component';
import { DashChartMoreTimeOnCallsComponent } from './modules/teams/dashboard/charts/dash-chart-more-time-on-calls/dash-chart-more-time-on-calls.component';
import { DashChartDevicesSessionsComponent } from './modules/teams/dashboard/charts/dash-chart-devices-sessions/dash-chart-devices-sessions.component';
import { DashChartCallsPerPeriodComponent } from './modules/teams/dashboard/charts/dash-chart-calls-per-period/dash-chart-calls-per-period.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CadenceComponent,
    TenantsComponent,
    PermissionsComponent,
    PricingComponent,
    SessionsComponent,
    CallrecordsComponent,
    ReportsComponent,
    DashboardComponent,
    AdminUsersComponent,
    LoginComponent,
    CardTotalizadorComponent,
    FiltroDashboardComponent,
    DashChartCallrecordsComponent,
    DashChartMoreTimeOnCallsComponent,
    DashChartDevicesSessionsComponent,
    DashChartCallsPerPeriodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
