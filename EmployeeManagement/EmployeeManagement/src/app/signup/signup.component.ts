import { Component } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private signservice:SignupService,private route:Router,private snack:MatSnackBar){}
 signup={
  firstname: '',
  lastname:'',
  email: '',
  password :''
}
namePattern:any|RegExp='[A-Za-z\-_]+';
emailPattern:any|RegExp= '[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}';

onSignup(){

  this.signservice.registerUser(this.signup).subscribe(
    (data)=>{
      console.log(data)
      this.snack.open('User Registered..!','',{duration:1500,verticalPosition:'top'})
      this.route.navigate(['/login'])
    }
  )
}

}
