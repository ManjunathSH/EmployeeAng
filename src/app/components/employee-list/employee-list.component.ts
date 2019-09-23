import { Component, OnInit } from '@angular/core';
import { GetServiceService } from '../../services/get/get-service.service';
import { Employee } from '../../model/Employee';
import { MatTableDataSource } from '@angular/material';

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

    this.getService.getData("http://localhost:8080/api/employee/").subscribe(
      response =>{
        this.dataSource =  new MatTableDataSource(response);
      }
    )

  }

}
