import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class UsersService {

    users: User[] = []

    constructor(private http: HttpClient) {}

    getUsers() {
      return this.http.get<User[]>(environment.baseURL + 'users');
    }

    getUser (id: number) {
        return this.http.get<User>(environment.baseURL + 'users/' +id);
    }
}
