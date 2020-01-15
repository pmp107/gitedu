import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(){
    
  }

public form={ 
   firstname : null,
   lastname : null,
   email:null,
   password:null,
   confirm_password:null,
   contact_no: null,
   gender: null,
   city:null,
   state:null,
   country:null,
   dob:null

};
public error = null;
public success = null;
  constructor(private _userserve:UserService,
    private _tokenserve:TokenService,
    private router : Router,
    private _auth : AuthService) { }

  onSubmit(){
    this._userserve.register(this.form).subscribe(
      data=>this.handleResponse(data),
    error=>this.handleError(error));
    console.log(this.form);
  }
  handleError(error){
    this.error = error.error.errors;
  }
  handleResponse(data){
    // this._tokenserve.handle(data.access_token);
    // this._userserve.set(data.user);
    // this._auth.changeAuthStatus(true);
    console.log(data.success);
    this.success= data.success;
    setTimeout(() => {
      this.router.navigateByUrl('/login');
    },5000);
    
}
}
