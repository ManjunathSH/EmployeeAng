import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EmployeeRegistrationComponent } from './components/employee-registration/employee-registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { EmployeelistComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetaisByIdComponent } from './components/employee-detais-by-id/employee-detais-by-id.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegistrationComponent,
    DashboardComponent,
    EmployeelistComponent,
    EmployeeDetaisByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
