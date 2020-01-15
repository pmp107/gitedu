import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile-side-bar',
  templateUrl: './profile-side-bar.component.html',
  styleUrls: ['./profile-side-bar.component.css']
})
export class ProfileSideBarComponent implements OnInit {
  myuser:any;
  nameList=[];
  req={
    user_id:null,
    friend_id:null
  };
  constructor(private _userserve:UserService) { 
  
  }

  ngOnInit() {
    this.myuser=this._userserve.get();
    this._userserve.getfriends(this.myuser).subscribe(
      data => this.handleFRResponse(data),
      error => console.log(error)
    );
  }
  onSubmit(){
    
  }
  uploadFile(event){    
    let elem = event.target;  
    if(elem.files.length > 0){    
      let formData = new FormData(); 
      formData.append('profile_image', elem.files[0]); 
      formData.append('id', this.myuser.id);  
      this._userserve.postImage(formData).subscribe( 
        (response) => this.handleResponse(response),
        error => console.log(error));
    }
  elem.value = "";
  }
  handleResponse(data){
    console.log(data.success.user);
    this._userserve.remove();
    this._userserve.set(data.success.user);
    this.myuser=this._userserve.get();
    // console.log(data.suuser);
  }
  handleFRResponse(data){
    console.log(data.friends);
    this.nameList = data.friends;
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
