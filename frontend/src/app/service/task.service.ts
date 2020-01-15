import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {Task} from '../Task'
 import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


 
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  server:string="http://localhost:8000/api/";
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
addTask(upload:Blob):Observable<Task>
{
  const newTask=new Task(upload);
  return this.http.post<Task>(this.server+'add',newTask);

}

getTasks():Observable<Task[]>
{
 return this.http.get<Task[]>(this.server+'get');
}

deleteTask(no: any):Observable<Task>
{
  const newTask={
    id:no,
    upload:'not set',
    status:false,
 
  };
  return this.http.post<Task>(this.server+'delete',newTask);

}
getOne(no: any):Observable<Task>{

  const newTask={
    id:no,
    title:'not set',
    status:false,
   
  };
  return this.http.post<Task>(this.server+'getone',newTask);
}

}
