import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SignupComponent } from './signup/signup.component';


const appRoutes: Routes = [

  {path:  '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login',component: LoginComponent},
  {path: 'main', component: MainComponent},
  {path: 'navigation', component: NavigationComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
