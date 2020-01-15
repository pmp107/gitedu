import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form={
    email:null,
    password:null,
  };
  user ={
    id:null,
    firstname:null
  };
  public error = null;
  constructor(private _userserve:UserService,
    private _tokenserve:TokenService,
    private router : Router,
    private _auth : AuthService
    ) {

   }
  onSubmit(){
    this._userserve.login(this.form).subscribe(
    data=>this.handleResponse(data),
    error=>this.handleError(error));

    // console.log(this.form);
    
  }
  handleResponse(data){
    if(data.access_token){
      this._tokenserve.handle(data.access_token);
      this.user.id=data.user.id;
      this.user.firstname=data.user.firstname;
      this._userserve.set(data.user);
      // console.log(data);
      console.log(data);
      this._auth.changeAuthStatus(true);
      this.router.navigateByUrl('/home');
    }
    else {
      console.log(data);
    }
  }
  handleError(error){
    this.error = error.error.error;
  }
  ngOnInit() {
   
  }
  
}
