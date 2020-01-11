import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getFriendById(username: string): import("../iuser").Iuser {
    throw new Error("Method not implemented.");
  }

  webUrl:string;
  webUrl1:string;

  constructor(private _httpSer:HttpClient) { 

    this.webUrl="https://reqres.in/api/users/2";
    this.webUrl1="https://reqres.in/api/users";
  }

  getUser():Observable<User>{
   return this._httpSer.get<User>(this.webUrl);

  }

  
  getUsers():Observable<User[]>{
    return this._httpSer.get<User[]>(this.webUrl1);
 
   }

   addUser():Observable<any>{
    
    return this._httpSer.post<any>(this.webUrl1,{"name": "morpheus",
     "job": "leader"});
   }
}
export class User{

  friend_id:number;
  email_id: string;
  username: string;
  password: string;
  confirm_password:string;
  flag:boolean;
}


