import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, config } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    // private currentUserSubject: BehaviorSubject<User>;
    // public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        // this.currentUser = this.currentUserSubject.asObservable();
    }

    // public get currentUserValue(): User {
    //     return this.currentUserSubject.value;
    // }

    
    //  token = '5e4348fc-5e99-4526-839d-49b2b9b036a2'; 
    //  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    //  httpOptions = {
        
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json'
    //     })
    //   };


    // loginUrl="http://localhost:1996/api/login";
    // login(email: any, password: any) {
    //     //ToDO Set API URL here
    //     return this.http.post(this.loginUrl, { email, password }, this.httpOptions )
    //         .pipe(map(user => {
    //             // store user details and jwt token in local storage to keep user logged in between page refreshes
    //             localStorage.setItem('currentUser', JSON.stringify(user));
    //             // this.currentUserSubject.next(user);
    //             return user;
    //         }));
    // }

    token: string = 'f48f2926-b991-4924-b9cc-944d4dbd745b';
    loginUrl = "http://localhost:1996/api/login";
    login(email: string, password: string): Observable<any> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      });
    
      const body = {
        email: email,
        password: password
      };
    
      return this.http.post(this.loginUrl, body, { headers });
    }
logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        // this.currentUserSubject.next(null);
    }
}