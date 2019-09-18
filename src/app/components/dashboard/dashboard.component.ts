import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onEmployeeRegistration() {
    console.log("Employee Registered");
    this.router.navigateByUrl('employee/registration');
  }

  listEmployees(){
    console.log("Employee List");
    this.router.navigateByUrl('employee/list');
  }

  employeeById(){
    console.log("Employee By Id");
    this.router.navigateByUrl('employee/employeeId');
  }
}
