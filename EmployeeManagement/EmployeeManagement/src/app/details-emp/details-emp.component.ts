import { Component ,OnInit} from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-emp',
  templateUrl: './details-emp.component.html',
  styleUrls: ['./details-emp.component.css']
})
export class DetailsEmpComponent implements OnInit {
  id: number|any;
  employee: Employee | any ;
  constructor(private empservice:EmployeeService ,private route:ActivatedRoute){}

 ngOnInit(): void {
     this.id =this.route.snapshot.params['id'];
     this.employee =new Employee();
     this.empservice.getById(this.id).subscribe((data)=>{
     this.employee=data; 
     })
 }
}
