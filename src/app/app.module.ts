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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
