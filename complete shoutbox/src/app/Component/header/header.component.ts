import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name:string;
  public loggedIn : boolean;
  constructor(
    private _auth:AuthService,
    private router : Router,
    private _token : TokenService,
    private _userserve:UserService
  ) { }
    myuser:any;
    FRList=[];
    ids = {
      user_id:null,
      friend_id:null
    } 
  ngOnInit() {
     this._auth.authStatus.subscribe(value => this.loggedIn = value);
     this.myuser=this._userserve.get();
     if(this.myuser){
     this._userserve.getFriendRequests().subscribe(
      data => this.handleFRResponse(data),
      error => console.log(error)
    );
     }
  }
   logout(event: MouseEvent){
    event.preventDefault();
    this._token.remove();
    this._auth.changeAuthStatus(false);
    this._userserve.logout(null)
    this.router.navigateByUrl('/Login');
   }

   searchUser(event: MouseEvent){

    event.preventDefault();
    console.log(this.name);
        // this._userserve.searchUser(this.name).subscribe(
        //   data=>console.log(data),
        //   error=>console.log(error)
        // );
   }
   handleFRResponse(data){
    console.log(data.requests);
    this.FRList = data.requests;
  }
  acceptfriend(item){
    console.log(item.id);
    this.ids.user_id = this.myuser.id;
    this.ids.friend_id = item.id;
    this._userserve.acceptFriendRequest(this.ids).subscribe(
      data => this.handleAcceptFriendResponse(data),
      error => console.log(error)
    );
    var index = this.FRList.indexOf(item);
    this.FRList.splice(index, 1); 
  }
  handleAcceptFriendResponse(data){
    console.log(data);
  }
  rejectfriend(item){
    console.log(item.id);
    this.ids.user_id = this.myuser.id;
    this.ids.friend_id = item.id;
    this._userserve.rejectFriendRequest(this.ids).subscribe(
      data => this.handleRejectFriendResponse(data),
      error => console.log(error)
    );
    var index = this.FRList.indexOf(item);
    this.FRList.splice(index, 1); 
  }
  handleRejectFriendResponse(data){
    console.log(data);
  }
}
