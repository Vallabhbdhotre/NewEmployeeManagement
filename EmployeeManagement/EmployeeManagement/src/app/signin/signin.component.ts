import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  emailPattern: any | RegExp = '[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}';
  // passPattern:any |RegExp ='^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d]{4,})(?=.*[\W_]).+$'
  constructor(private login:LoginService,private route:Router,private snack:MatSnackBar){}
  logindata = {
    email: '',
    password: ''
  }
  onlogin(){
    this.login.loguser(this.logindata).subscribe(
      (data:any)=>{
        console.log(data)
        this.login.settoken(data.token);
        this.route.navigate(['/home'])
        this.snack.open('Succesfully LoggedIn...! ','',{duration:1500,verticalPosition:'top'})
      }
    )
  }
}
