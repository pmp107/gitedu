import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { TokenService } from './token.service';
import { UserService } from './user.service';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoutService {
  
  constructor(private http:HttpClient,
    private _tokenserve:TokenService,
    private _userserve:UserService) { }
  
  httpOptions = { headers: new HttpHeaders({ 'Authorization': 'Bearer' + this._tokenserve.get()}) };   
  
  // postShout(data){
  //   return this.http.post('http://localhost:8000/api/shout', data,this.httpOptions);
  // }
  getShouts(){
    let url='http://localhost:8000/api/shouts/'+this._userserve.get().id;
    return this.http.get(url);
  }
  reportShout(data){
    return this.http.post('http://localhost:8000/api/reportShout', data,this.httpOptions);
  }

  //------------------------------------***********-----------------------
  postShout(data){
    return this.http.post<any>('http://localhost:8000/api/shout',data,
    {reportProgress:true,observe : 'events'}).pipe(
        map(event=> this.getEventMessage(event,data)),
        catchError(this.handleError)
      );
  }

  private getEventMessage(event: HttpEvent<any>, data) {
  // alert(HttpEventType.UploadProgress)
  // alert(HttpEventType.Response)
    switch (event.type) {

      case HttpEventType.UploadProgress:
        // alert('case1')
        return this.fileUploadProgress(event);

      case HttpEventType.Response:

        return this.apiResponse(event);

      default:
      // alert('case3')
        return `File "${data.get('post').name}" surprising upload event: ${event.type}.`;
    }
  }

  private fileUploadProgress(event) {
    const percentDone = Math.round(100 * event.loaded / event.total);
    return { status: 'progress', message:percentDone };
  }

  private apiResponse(event) {

    return event.body;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
    
}
