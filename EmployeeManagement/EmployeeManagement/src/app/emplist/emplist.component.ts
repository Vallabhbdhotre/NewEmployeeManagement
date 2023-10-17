import { Component, OnInit,  } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  employee: Employee[] = [];
  currentPage:number =1;
  pageSize:number=3;
  constructor (private employeeservice:EmployeeService, private route:Router ,private snack:MatSnackBar){}
  ngOnInit(): void {
      this.getdata();
  }
  public getdata()
  {
    return this.employeeservice.getEmployees()
    .subscribe((data)=>{
      this.employee =data;
    })
  }
  public update(id:number){
    return this.route.navigate(['updateemp' ,id])
  
  }
  public details(id:number){
    return this.route.navigate(['details' ,id])
  }
  public delete(id:number){
    this.employeeservice.deleteemp(id)
    .subscribe(data=>{
      console.log(data)
      this.getdata();
    })
    this.snack.open('Employee Deleted !','',{duration:2000,verticalPosition:'top'})
  }
 
}
