import { Injectable } from '@angular/core';
import { UserEntity } from '../entities/user.entity';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() {
    }

    getCurrentAuthenticatedUser(): UserEntity | boolean {
        return StorageService.currentAuthenticatedUser();
    }

    signin(email: string, password: string): Promise<UserEntity> | null {
        console.log(email);
        console.log(password);
        return null;
    }
}
