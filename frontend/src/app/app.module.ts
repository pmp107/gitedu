import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { SearchTextPipe } from './shared/search-text.pipe';



import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { TaskFormComponent } from './components/task-manager/task-form/task-form.component';
import { TaskListComponent } from './components/task-manager/task-list/task-list.component';
import { TaskDetailComponent } from './components/task-manager/task-detail/task-detail.component';
import { TaskItemComponent } from './components/task-manager/task-list/task-item/task-item.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,

    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    PageNotFoundComponent,

    UserDashboardComponent,
    UserProfileComponent,

    SearchTextPipe,


    TaskManagerComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskItemComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
