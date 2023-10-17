import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmplistComponent } from './emplist/emplist.component';
import { HomeComponent } from './home/home.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { DetailsEmpComponent } from './details-emp/details-emp.component';
import { AddRouteComponent } from './add-route/add-route.component';
import { ViewRouteComponent } from './view-route/view-route.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'emplist', component: EmplistComponent, pathMatch: 'full', canActivate: [authGuard] },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'addemp', component: CreateEmpComponent, pathMatch: 'full', canActivate: [authGuard] },
  { path: 'updateemp/:id', component: UpdateEmpComponent },
  { path: 'details/:id', component: DetailsEmpComponent, pathMatch: 'full', },
  { path: 'addroute', component: AddRouteComponent, },
  { path: 'viewroute', component: ViewRouteComponent },
  { path: 'login', component: SigninComponent, pathMatch: 'full' },
  { path: 'register', component: SignupComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
