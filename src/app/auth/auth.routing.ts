import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';


const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'signup', component: AuthComponent},
  { path: 'login', component: AuthComponent },
  { path: 'forgot', component: AuthComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
