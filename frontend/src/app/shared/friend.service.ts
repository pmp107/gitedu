import { Injectable } from '@angular/core';
import { Iuser } from '../iuser';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  friendList:Iuser[];
filter:string;
    flag:boolean=true;
  //  id:number; 

  constructor() { 

    this.friendList = [{
     //id: [113,Validators.required],
     friend_id: 11,
     email_id: 'janadavangave2gmail.com',
     username: "jana",
     passward: 'xyz',
     confirm_passward:'xyz',
     flag: true,

  },
  {
    friend_id: 12,
    email_id: 'janadavangave2gmail.com',
    username: "jerry",
    passward: '',
    confirm_passward:'',
    flag: true,

  },



];

  }

  getFriendList():Iuser[]{ 
return this.friendList;

  }

  getFriendByUsername(username:string):Iuser{
    return this.friendList.find((m)=>m.username==username);
  }

getIndexByFriend(friend_id:number):number{
  return this.friendList.findIndex((m)=>{m.friend_id==friend_id})
}

  // updateProfile(friend_id:number,m:Iuser){

  //   this.friendList.splice(this.getIndexByFriendId(friend_id),1,m);
  //   console.log(this.getFriendById(username));
  // }
}


