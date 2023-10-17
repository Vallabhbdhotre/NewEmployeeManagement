import { Component ,OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit  {

  constructor(private empservice: EmployeeService, private route: ActivatedRoute,private router:Router) { }
  id:number| any;
  employee: Employee = new Employee();
  namePattern:any|RegExp='[A-Za-z\-_]+';
  emailPattern:any|RegExp= '[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}';

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
      this.empservice.getById(this.id).subscribe((data)=>{
        this.employee=data;
      })
  }
  onSubmit() {
    this.empservice.update(this.id,this.employee)
    .subscribe((data)=>{
      console.log(data)
    })
    this.router.navigate(['/emplist'])
  }
  }

