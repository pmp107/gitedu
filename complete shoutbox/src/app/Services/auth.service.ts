import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _token:TokenService) { }
  private loggedIn = new BehaviorSubject <boolean> (this._token.loggedIn());
  authStatus = this.loggedIn.asObservable();

  changeAuthStatus(value : boolean){
    this.loggedIn.next(value);

  }
}
