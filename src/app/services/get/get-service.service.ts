import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class GetServiceService {

  constructor(private http : HttpClient) { }

  getData(url : string) : Observable<any> 
  {
    return this.http.get(url).pipe(
    retry(3),
    catchError(this.handleError) );

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
