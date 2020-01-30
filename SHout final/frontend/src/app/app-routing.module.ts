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

import { PostComponent } from './post/post.component';




 const appRoutes: Routes=[
  
    {path:"",component:HeaderComponent},
    {path:"header",component:HeaderComponent},
    {path:"home",component:HomeComponent},
    {path:"aboutus",component:AboutUsComponent},  
    {path:"contactus",component:ContactUsComponent},

    //for feeds
    {path:"user",component:PostComponent,canActivate:[AfterLoginService]},

    // for Profile
    {path:"userProfile",component: UserProfileComponent,canActivate:[AfterLoginService]},
    
    //NOTE user-dashboard.component is not used

    
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
    path:'upload',
    component:PostComponent,
    canActivate:[AfterLoginService]

  },
 
  
  //{path:'post',component:PostComponent},
  {path:'header/login',component:LoginComponent,
  canActivate:[AfterLoginService]},

  
  {path:"**",component:PageNotFoundComponent},

 ]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
