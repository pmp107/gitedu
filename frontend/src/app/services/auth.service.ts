import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; //dout ful bhu sugg
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();

//to change the status related login

  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }

  constructor(private Token : TokenService) {
    
   }
}
