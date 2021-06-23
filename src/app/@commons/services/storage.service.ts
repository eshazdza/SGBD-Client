import { Injectable } from '@angular/core';
import { UserEntity } from '../entities/user.entity';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() {
    }

    static currentAuthenticatedUser(): UserEntity | boolean {
        if (localStorage.getItem('currentAuthUser')) {
            const user: UserEntity = new UserEntity();
            user.id = localStorage.getItem('currentAuthUserId');
            user.firstname = localStorage.getItem('currentAuthUserFirstName');
            user.lastname = localStorage.getItem('currentAuthUserLastName');
            return user;
        } else {
            return false;
        }
    }

    static logUser(user: UserEntity): UserEntity {
        localStorage.setItem('currentAuthUser', 'true');
        localStorage.setItem('currentAuthUserId', user.id || '');
        localStorage.setItem('currentAuthUserFirstName', user.firstname || '');
        localStorage.setItem('currentAuthUserLastName', user.lastname || '');
        return user;
    }

    static logoutUser(): void {
        localStorage.removeItem('currentAuthUser');
        localStorage.removeItem('currentAuthUserId');
        localStorage.removeItem('currentAuthUserFirstName');
        localStorage.removeItem('currentAuthUserLastName');
    }


}
