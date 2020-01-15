import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  myuser:any;
  name:string;
  nameList=[];
  req={
    user_id:null,
    friend_id:null
  };
  requser ={
    name:null,
    id:null
  };
  constructor(private _userserve:UserService) { 
    this.myuser=this._userserve.get();
    console.log(this.myuser);
  }


  ngOnInit() { 
    this.myuser=this._userserve.get();
   }
   searchUser(event: MouseEvent){
    
    event.preventDefault();
    console.log(this.name);
    this.requser.name=this.name;
    this.requser.id=this.myuser.id;
    // console.log(this.requser);
        this._userserve.searchUser(this.requser).subscribe(
          data=>this.handleResponse(data),
          error=>console.log(error)
        );
   }
   handleResponse(data){
      this.nameList = data.users; 
      console.log(this.nameList);
      console.log(data);
   }

  sendRequest(item){
    this.req.user_id = this.myuser.id;
    
    this.req.friend_id = item.id;
    this._userserve.sendFriendRequest(this.req).subscribe(
      data =>console.log(data),
      error => console.log(error)
    );
    var index = this.nameList.indexOf(item);
    this.nameList.splice(index, 1);
  }
  unfriend(item){
    this.req.user_id = this.myuser.id;
    this.req.friend_id = item.id;
    this._userserve.removeFriend(this.req).subscribe(
      data=> console.log(data),
      error=>console.log(error)
    );
    var index = this.nameList.indexOf(item);
    this.nameList.splice(index, 1);
  }
}
