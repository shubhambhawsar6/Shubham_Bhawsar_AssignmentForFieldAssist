import { Component, OnInit } from '@angular/core';
import { employees } from './employees';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit
{
  title = 'jsonServerAPI';

  constructor(private rs : RestService){}
 
  columns = ["Employee Id", "Employee Name", "Working Time"];

  index = ["id" , "Name" , "WorkimgTime"];

  employee : employees[] = [];

  ngOnInit(): void {
    this.rs.getemployees().subscribe
    (
      (response)=>
      {
        this.employee=response;
      },
      (error)=>
      {
        console.log("Error Occured : "+error);
      }
    )
    
  }
}
