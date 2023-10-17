import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  public baseUrl: string = 'http://localhost:8080/employees';
  //getting emp data from server
  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }
  //posting data to server
  public addEmp(employee:Employee):Observable<any>
  {
    return this.http.post(<any>`${this.baseUrl}`,employee);
  }
  //get emp by id
  public getById(id:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);

  }
  //update emp
  public update(id:number ,employee:Employee):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,employee);
  }
  //delete emp
  public deleteemp(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  
}
