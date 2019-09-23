import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class PostServiceService {


  constructor(private http : HttpClient) { }

  postData(url: string, data: any) : Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post(url, data, httpOptions)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  handleError(error : HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    }
    else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return Observable.throw("error");

  }

}
