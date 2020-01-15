import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Component/login/login.component';
import {RegisterComponent} from './Component/register/register.component';
import { HomeComponent } from './Component/home/home.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';

const routes: Routes = [
  {path:'Login',
  component:LoginComponent,
  canActivate:[BeforeLoginService]
  },
  {path: 'signup', 
  component:RegisterComponent,
  canActivate:[BeforeLoginService]
  },
  {path: 'home', 
  component:HomeComponent,
  canActivate:[AfterLoginService]
},
{
  path: '**', 
  component:LoginComponent,
  canActivate:[BeforeLoginService]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents =  [SignUpComponent]
