import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
//After login is true when user is loggegin

export class AfterLoginService implements CanActivate{
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
   return this.Token.loggedIn();
  }



  constructor(private Token:TokenService) { }
}
