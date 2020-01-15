import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { TaskDetailComponent } from './components/task-manager/task-detail/task-detail.component';



 const appRoutes: Routes=[
  
    {path:"",component:HeaderComponent},
    {path:"header",component:HeaderComponent},
    {path:"home",component:HomeComponent},
    {path:"aboutus",component:AboutUsComponent},  
    {path:"contactus",component:ContactUsComponent},
    {path:"user",component:UserDashboardComponent},
    {path:"userProfile/:username",component: UserProfileComponent},

    
    {
     path:'login',component:LoginComponent,
    //canActivate:[BeforeLoginService]
  

   },
   {
    path:'signup',
    component:SignupComponent,
    // canActivate:[BeforeLoginService]
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AfterLoginService]

  },
 

  {path:'user/task',component:TaskManagerComponent},
  {path:'task/:id',component:TaskDetailComponent},
  {path:"**",component:PageNotFoundComponent},

 ]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
