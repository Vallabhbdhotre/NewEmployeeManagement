import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient ,private snack:MatSnackBar) { }
  public logurl:any='';

  //posting login data to server

  loguser(logindata:any){

    return this.http.post(`${this.logurl}/token`,logindata)
  }
  //setting token in local storage
  settoken(token:any){
    localStorage.setItem('token',token)
  }
  // checking if user is loggd in or not
  isLogin(){
   const userToken=localStorage.getItem('token')
   if (userToken==undefined ||userToken ==null ||userToken=="")
   {
    this.snack.open('Something went Wrong !!!','Ok')
    return false;
   }
     else{
    return true;
   }
  

  }
}
