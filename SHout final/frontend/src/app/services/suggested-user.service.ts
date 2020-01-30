import { Injectable } from '@angular/core';
import { SuggestedUsers } from '../SuggestedUsers';

import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuggestedUserService {
  server:string="http://localhost:8000/";
  headers:HttpHeaders = new HttpHeaders();
  options:any;


  constructor(private http:HttpClient) {
    this.headers.append('enctype','multipart/form-data');
    this.headers.append('Content-Type','application-json');
    this.headers.append('X-Requested-With','XMLHttpRequest');

    this.options={
      headers:this.headers
    };

   }

  getUsers()
  {  
   return this.http.get<SuggestedUsers[]>(this.server+'getlist/friends');
  }
 
  addfriend(id)
  {
    console.log(id);
    return this.http.post<SuggestedUsers>('http://localhost:8000/api/friendadd',id);
  }
}
 // getcurrentuser(curuser)
  // {
  //   return this.http.get<any>(this.server+'getcurrent',curuser);
  // }
