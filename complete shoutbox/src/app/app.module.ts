import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import {HeaderComponent} from './Component/header/header.component';
import { HomeComponent } from './Component/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import{ ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { SideBarComponent } from './Component/side-bar/side-bar.component';
import { ShoutsComponent } from './Component/shouts/shouts.component';
import { ProfileSideBarComponent } from './Component/profile-side-bar/profile-side-bar.component';
import { SearchPipePipe } from './search-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    SideBarComponent,
    ShoutsComponent,
    ProfileSideBarComponent,
    SearchPipePipe,
    ConfirmEqualValidatorDirective
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
