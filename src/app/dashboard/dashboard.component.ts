import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../models/user';
import {  AuthenticationService } from '../auth/auth.service';
import {UserService} from '../auth/user.service';

@Component({ templateUrl: 'dashboard.component.html' })
export class DashboardComponent implements OnInit {
    // currentUser: User;
    users = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        // this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        // this.userService.delete(id)
        //     .pipe(first())
        //     .subscribe(() => this.loadAllUsers());
    }

    private loadAllUsers() {
        // this.userService.getAll()
        //     .pipe(first())
        //     .subscribe(users => this.users = users);
    }
}