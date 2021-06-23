import { Component, OnInit } from '@angular/core';
import { UserForm } from '../../@commons/forms/user.form';
import { AuthService } from '../../@commons/services/auth.service';
import { UserEntity } from "../../@commons/entities/user.entity";
import { $e } from "codelyzer/angular/styles/chars";
import { Router } from "@angular/router";

@Component({
    selector: 'app-sgbd-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    userForm: UserForm = new UserForm();

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {
    }

    ngOnInit(): void {

    }

    register($event: any): void {
        const user = new UserEntity();
        user.firstname = $event.firstname;
        user.lastname = $event.lastname;
        user.password = $event.password;
        user.confirmPassword = $event.confirmPassword;
        user.email = $event.email;
        this.authService.signup(user).subscribe((authUser) => {
            if (authUser){
                this.router.navigate(['/signin']);
            }
        });
    }
}
