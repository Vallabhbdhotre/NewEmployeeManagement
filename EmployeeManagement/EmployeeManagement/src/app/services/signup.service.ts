import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  public registerUrl:any ='';

  constructor(private http:HttpClient) { }
  registerUser(signup:any)
  {
    return this.http.post(`${this.registerUrl}/registration`,signup)
  }
}
