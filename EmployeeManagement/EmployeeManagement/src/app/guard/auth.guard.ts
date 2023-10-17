import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth =inject(LoginService)
  const router =inject(Router)
  const snack =inject(MatSnackBar)
  if(auth.isLogin()){
    return true;
  }
  else{
    snack.open('You Need To Log In First!','',{duration:1500,verticalPosition:'top'})
    router.navigate(['/login'])
    return false;
  }
  
};
