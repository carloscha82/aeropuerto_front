import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, catchError, of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  usuario:any;
  base_url:string = 'http://127.0.0.1:8000';
  header_login = new HttpHeaders().set('Content-Type', 'application/json');
  options_login = {
    headers: this.header_login
  }
  header_token:any;
  options_token:any;

  constructor(private http:HttpClient) { }

  login(data:any){
    let url:string = `${this.base_url}/token`;
    let credenciales = JSON.stringify(data);
    return this.http.post(url, credenciales, this.options_login).pipe(catchError(this.handleError<any>()));
  }

  get(end_point:string):Observable<any[]>{
    let url = `${this.base_url}/${end_point}/`;
    return this.http.get(url, this.options_token).pipe(catchError(this.handleError<any>()));
  }

  crear_header_token(token:string){
    this.header_token = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Token ${token}`);

    this.options_token = { headers: this.header_token };
  }

  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {
      console.log(error.error)
      return of(result as T);
    };
  }

/*  private handleError(error: HttpErrorResponse){
    if (error.status === 0){
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    }
    else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }*/
}
