import { Component, OnInit, ElementRef } from '@angular/core';
import { ShoutService } from 'src/app/Services/shout.service';
import { UserService } from 'src/app/Services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-shouts',
  templateUrl: './shouts.component.html',
  styleUrls: ['./shouts.component.css']
})
export class ShoutsComponent implements OnInit {
  title = 'ShoutBOX';
  myuser:any;
  shoutList =[];
  fileaccess:Boolean;
  feedform:FormGroup;
  error:string;
  @ViewChild('myfile',{read:false})//{static: false}
  myInputVariable: ElementRef;
  //for displying server error responce
  fileUpload = {status: '',message: '', filePath: ''};
  filepathclient="http://localhost:8000//";
  public shout={
    user_id:null,
    description:null,
    content_type:null
  };
  public reported={
       user_id:null,
       shout_id:null
  };
  constructor(private _shoutserve:ShoutService,
              private _userserve:UserService,
              private formbuilderobject:FormBuilder
    ) { }

  ngOnInit() {
    this.myuser=this._userserve.get();
    this._shoutserve.getShouts().subscribe(
      data=>this.handleResponse(data),
      error=>console.log(error)
    );
    this.feedform=this.formbuilderobject.group({
      // user_id:null,
      // description:null,

      post:['']
    });
  }
  uploadFile(event){
    // event.preventDefault();
    let allowedextension=['png','jpg','mp3','3gp','gif',' mkv','mp4','pdf','doc','xslx','ppt','txt','jpeg','bmp'];
    let filename=event.target.files[0].name;
    let filesize=event.target.files[0].size;
    this.shout.content_type=event.target.files[0].type.split('/')[0];
    // console.log(this.shout.content_type);
    // console.log(event.target.files[0]);
    //lowercase do it...
    const extension = filename.split('.')[1].toLowerCase();
    if(event.target.files.length>0)
  { if(filesize<10485760)
      {
        for(let allow of allowedextension)
        {
          if(extension==allow)
          {
            this.fileaccess=true;
            break;

          }
          else{
            this.fileaccess=false;
          }
        }
        if(this.fileaccess)
        {

        const file = event.target.files[0];
          this.feedform.get('post').setValue(file);
        }else{
          alert("Wrong File Type")

        }
      }
      else{
        alert("Max file size is 15MB");
      }
     }
    if(!this.fileaccess){
      console.log(this.myInputVariable.nativeElement.files);
      this.myInputVariable.nativeElement.value = "";
      console.log(this.myInputVariable.nativeElement.files);
    }
  }
  postShout(){
    const formDataObject=new FormData();
    formDataObject.append('user_id',this.myuser.id);
    formDataObject.append('description',this.shout.description);
    formDataObject.append('post',this.feedform.get('post').value);
    formDataObject.append('content_type',this.shout.content_type);
    this._shoutserve.postShout(formDataObject).subscribe(
      data=>this.handlePostResponse(data),
      error=>console.log(error)
      );
  }
  postHere() {

    const postObject = {};
    postObject['like'] = 0;
    postObject['dislike'] = 0;
    postObject['post'] = this.shout.description;
    this.shout.user_id = this._userserve.get().id;
    console.log(this.shout);
    // this.shoutList.splice(0, 0, postObject);
    this._shoutserve.postShout(this.shout).subscribe(
      data=>this.handlePostResponse(data),
      error=>console.log(error)
      );
    // this.shoutList.splice(0, 0, postObject);

    this.shout.description = '';
  }


  likeCount(item) {
    event.preventDefault();
    item.like += 1;
  }

  dislikeCount(item) {
    event.preventDefault();
    item.dislike += 1;
  }
  handleResponse(data){
    this.shoutList=data.Shouts;
    console.log(data);
  }
  handlePostResponse(data){
    this._shoutserve.getShouts().subscribe(
      data=>this.handleResponse(data),
      error=>console.log(error)
    );
    console.log(data);
  }
  report(item){
    this.reported.user_id= this.myuser.id;
    this.reported.shout_id = item.shout_id;
    this._shoutserve.reportShout(this.reported).subscribe(
      data => this.handlePostResponse(data),
      error => console.log(error)
    );
    // console.log();
  }
 
}
