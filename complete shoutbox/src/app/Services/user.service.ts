import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:any;
  constructor(private http:HttpClient,private _tokenserve:TokenService) { }
  httpOptions = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this._tokenserve.get()}) }; 
  login(data){
    return this.http.post('http://localhost:8000/api/login', data);
  }

  register(data){
    return this.http.post('http://localhost:8000/api/register', data);
  }

  postImage(data){
    return this.http.post('http://localhost:8000/api/profile/image', data,this.httpOptions);
  }
  logout(data){
    this.remove();
    this.http.post('http://localhost:8000/api/logout', data,this.httpOptions).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  set(user){
    localStorage.setItem('user',JSON.stringify(user));
  }

  get(){
    return JSON.parse(localStorage.getItem('user'));
  }

  remove(){
    localStorage.removeItem('user')
  }
  searchUser(data){
    
    return this.http.post('http://localhost:8000/api/search',data,this.httpOptions);
  }
  sendFriendRequest(data){
    return this.http.post('http://localhost:8000/api/sendfriendRequest',data,this.httpOptions);
  }
  getFriendRequests(){
    let url='http://localhost:8000/api/getfriendRequest/'+this.get().id;
    return this.http.get(url);
  }
  acceptFriendRequest(id){
    return this.http.post('http://localhost:8000/api/acceptfriend',id,this.httpOptions);
  }
  rejectFriendRequest(id){
    return this.http.post('http://localhost:8000/api/rejectfriend',id,this.httpOptions);
  }
  removeFriend(ids){
    return this.http.post('http://localhost:8000/api/removefriend',ids,this.httpOptions);
  }
  getfriends(id){
    return this.http.post('http://localhost:8000/api/getfriends',id,this.httpOptions);
  }
}
