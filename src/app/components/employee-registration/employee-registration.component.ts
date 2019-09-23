import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/Employee';
import { PostServiceService } from '../../services/post/post-service.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  public employee: Employee = new Employee();
  callMade = false;
  errorMsg: string;

  constructor(private postService: PostServiceService, private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {


  }

  onSave() {
    
    console.log(this.employee);

    let saveEmployee = environment.save_get_employeeList_url;

    if (this.employee.employeeName && this.employee.employeeName != "") {
      this.callMade = true;
      this.postService.postData(saveEmployee, this.employee).subscribe(
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
          this.snackBar.open("Save Employee", "Failed", {
            duration: 1000,
          });
        }
      )
    }
    else{
      this.errorMsg = "Please enter valid fields";
    }
  }

}
