import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { SuggestedUsers } from '../SuggestedUsers';

// import { Post11 } from './post11.model';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  post1 = new Post();
  post11: any;
  name: any;
  body: any;
  user1:any;
 
  constructor(private data1: DataService, private http: HttpClient, private Token: TokenService) { }
  ngOnInit() {
    this.getPost();
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    const formData = new FormData();
    formData.append('file', this.fileData);
    console.log(this.fileData.name);
    
    // alert('SUCCESS hjncjtjh!!');
    this.http.post('http://127.0.0.1:8000/api/insertFile', formData).subscribe(res => {

      alert('SUCCESS !!');
      // console.log(res);
    });
    this.insertPost();

  }
  insertPost() {
console.log("insertPost");
    this.post1.image = this.fileData;
    this.post1.image = this.fileData.name;

    this.user1=this.Token.getuser();
    this.post1.u_id=this.user1.id
     console.log(this.post1.u_id);
    //this.post1.id=this.Token.getuser();

    console.log(this.post1);
    this.data1.insertPost(this.post1).subscribe(res => {
      console.log(res)
     
    });

  }


  //getting data
  getPost() {
    this.data1.getData().subscribe(res => { this.post11 = res });
  }

  
  

}
