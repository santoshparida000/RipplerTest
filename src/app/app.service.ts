import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { GlobalConstants } from './app.global';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiBaseURL: string = GlobalConstants.DOMAIN_END_POINT + 'api/';

  constructor(private http: HttpClient) {
  }

  get(apiUrl: string, httpOptions?: any): Observable<any>{
    return this.http.get(this.apiBaseURL + apiUrl, httpOptions).pipe(
      catchError((error:HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }  

}
