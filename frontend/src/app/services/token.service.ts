import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss={
    login : 'http://localhost:8000/api/login',
    signup: 'http://localhost:8000/api/signup'
  }


  constructor() { }

  handle(token){
     this.set(token);
    //  console.log(this.isValid());
  }


//set token in local storage
  set(token){
    localStorage.setItem('token',token);
  }


  get(){
    return localStorage.getItem('token');
  }

  
//remove token from local storage

  remove(){
    localStorage.removeItem('token');
  }

  //check whether the token is on local database or not

  isValid(){
    const token =this.get();
    if(token){
      const payload = this.payload(token);
      if(payload){
        return Object.values(this.iss).indexOf(payload.iss) > -1 ?true:false;
      }
    }
    return false;
  }

  payload(token){
    const payload =token.split('.')[1];
     return this.decode(payload);
  }

//to decode base 64 decoded value  
  decode(payload){
    return JSON.parse(atob(payload));
  } 

  loggedIn(){
    return this.isValid();
  }

}
