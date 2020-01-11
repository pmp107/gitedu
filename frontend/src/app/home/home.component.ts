import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public loggedIn :boolean;

  constructor(
    private Auth:AuthService,
    private router:Router,
    private Token:TokenService
  ) { }



//here value is taken from Auth and if it is True then navbar Property will be hide or displayed 
  ngOnInit() {
   this.Auth.authStatus.subscribe(value => this.loggedIn=value);
  }

  logout(event:MouseEvent){
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
   this.router.navigateByUrl('/header');
  }


}
