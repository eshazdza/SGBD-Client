import { Component, OnInit } from '@angular/core';
import { UserForm } from '../../@commons/forms/user.form';

@Component({
    selector: 'app-sgbd-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    userForm: UserForm = new UserForm();

    constructor() {
    }

    ngOnInit(): void {

    }

    onValueChange($event: any, identity: string) {
        
    }

    register($event: any) {
        
    }
}