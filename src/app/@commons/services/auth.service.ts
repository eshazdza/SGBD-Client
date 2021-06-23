import { Injectable } from '@angular/core';
import { UserEntity } from '../entities/user.entity';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { from, Observable } from 'rxjs';
import { QueryParamService } from './query-param.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService extends BaseService {

    constructor(
        protected http: HttpClient,
        protected queryParamService: QueryParamService,
    ) {
        super('users', http, queryParamService);
    }

    getCurrentAuthenticatedUser(): any {
        return StorageService.currentAuthenticatedUser();
    }

    signin(email: string, password: string): Observable<UserEntity> {
        return this.http.post<UserEntity>(this.path + '/signin', {email, password});
    }

    signup(user: UserEntity): Observable<UserEntity> {
        return this.post(user);
    }

    signout(): void {
        StorageService.logoutUser();
    }
}
