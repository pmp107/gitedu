import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    currentUserValue: any;

  constructor() { }
}
