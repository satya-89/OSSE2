import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User> | undefined;
    public value = '{"currentUser":"test"}';

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(this.value));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(password: string, phone: string) {
        const body = { password: password, phone: phone };
        console.log("payload", body);
        return this.http.post<any>(`${environment.apiUrl}/api/authenticate`, body)
            .pipe(map(user => {
                console.log("user service", user);
                // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
                // user.authdata = window.btoa(username + ':' + password);
                // localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        //  this.currentUserSubject.next(null);
    }
}