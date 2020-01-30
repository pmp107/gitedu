import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http1:HttpClient) { }
 
//MET services Upload


  insertPost(data)
{
 // console.log(data);
 return this.http1.post('http://127.0.0.1:8000/api/addPost',data); 
}
// insertImage(data)
// {

//  return this.http1.post('http://127.0.0.1:8000/api/addPost11',data); 
// }

getData()
{
 return this.http1.get('http://127.0.0.1:8000/getPost'); 
}






}
