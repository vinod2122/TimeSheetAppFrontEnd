import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private token = '013181bd-b0ef-4c78-842a-b2104cbb8cc6';
  private apiUrl = 'http://localhost:1996/api/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}` 
      }),
      params: { email, password } 
    };

    return this.http.post(this.apiUrl, null, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      // Handle unauthorized access error
      console.error('Unauthorized access');
    } else {
      // Handle other errors
      console.error('An error occurred:', error.error);
    }
    return ('Something went wrong. Please try again later.');
  }
}
