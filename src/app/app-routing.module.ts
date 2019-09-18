import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeRegistrationComponent } from './components/employee-registration/employee-registration.component';
import { EmployeelistComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetaisByIdComponent } from './components/employee-detais-by-id/employee-detais-by-id.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employee/registration', component: EmployeeRegistrationComponent },
  { path: 'employee/list', component: EmployeelistComponent },
  { path: 'employee/employeeId', component: EmployeeDetaisByIdComponent },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
