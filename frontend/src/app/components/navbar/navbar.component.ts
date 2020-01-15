import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { error } from 'protractor';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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


//note this method is copied in home.ts 
  logout(event:MouseEvent){
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
   this.router.navigateByUrl('/login');
  }


}
