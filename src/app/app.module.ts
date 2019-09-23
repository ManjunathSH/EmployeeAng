import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { EmployeeRegistrationComponent } from './components/employee-registration/employee-registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { EmployeelistComponent } from './components/employee-list/employee-list.component';
import { GetServiceService } from './services/get/get-service.service';
import { PostServiceService } from './services/post/post-service.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegistrationComponent,
    DashboardComponent,
    EmployeelistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  providers: [
    GetServiceService,
    PostServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
