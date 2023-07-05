import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';
import { config } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    registerUrl='http://localhost:1996/api/register';
    apiUrl='http://localhost:1996';
    constructor(private http: HttpClient) { }

    getAll() {
         return this.http.get<User[]>(`${this.apiUrl}/users`);
    }

    register(user: User) {
         return this.http.post(this.registerUrl, user);
    }

    delete(id: number) {
         return this.http.delete(`${this.apiUrl}/api/${id}`);
    }
}