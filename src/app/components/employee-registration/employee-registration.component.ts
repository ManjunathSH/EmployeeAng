import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/Employee';
import { PostServiceService } from '../../services/post/post-service.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  public employee: Employee = new Employee();
  callMade = false;
  constructor(private postService: PostServiceService, private snackBar : MatSnackBar,
    private router : Router) { }

  ngOnInit() {


  }

  onSave() {
    this.callMade = true;
    console.log(this.employee);


    this.postService.postData("http://localhost:8080/api/employee", this.employee).subscribe(
      response => {
        console.log(response);
        this.callMade = false;
        this.snackBar.open("Save Employee", "Success", {
          duration: 1000,
          
        });
        this.router.navigateByUrl('/dashboard');
      },
      error => {
        console.log(error);
        this.callMade = false;
      }
    )

  }

}
