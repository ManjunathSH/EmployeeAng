import { Component, OnInit } from '@angular/core';
import { GetServiceService } from '../../services/get/get-service.service';
import { Employee } from '../../model/Employee';
import { MatTableDataSource } from '@angular/material';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor(private getService : GetServiceService) { }
  displayedColumns: string[] = ['id', 'name','email', 'phone', 'address' ];
  
  dataSource: MatTableDataSource<Employee>;

  ngOnInit() {
    console.log(this.dataSource);
    let getEmployee = environment.save_get_employeeList_url;
    this.getService.getData(getEmployee).subscribe(
      response =>{
        this.dataSource =  new MatTableDataSource(response);
      }
    )

  }

}
