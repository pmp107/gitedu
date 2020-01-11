import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public error =[];
  
  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };

  constructor(private Jarwis:JarwisService ,
    private Token:TokenService ,
    private router:Router
    ) { }

  onSubmit(){
   this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
   }

   handleError(error){
     
    this.error = error.error.errors;
}
handleResponse(data){
  this.Token.handle(data.access_token);
  this.router.navigateByUrl('/login');
   }
  ngOnInit() {
  }

}
