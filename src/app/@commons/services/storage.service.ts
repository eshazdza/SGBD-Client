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
            console.log(localStorage.getItem('currentAuthUser'));
            const user: UserEntity = new UserEntity();
            user.id = localStorage.getItem('currentAuthUserId');
            user.firstname = localStorage.getItem('currentAuthUserFirstName');
            user.lastname = localStorage.getItem('currentAuthUserLastName');
            return user;
        } else {
            return false;
        }
    }


}
