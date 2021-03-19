import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "../../@commons/services/auth.service";
import { UserEntity } from "../../@commons/entities/user.entity";
import { from } from "rxjs";

@Component({
    selector: 'app-sgbd-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    user: any;
    form: FormGroup;
    formErrors: { code: string, message: string, name: string } | undefined;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
    ) {
        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnInit(): void {
    }

    onLogoutClicked(): void {
        console.log("signout");
    }

    signin(): void {
        const val = this.form.value;
        if (val.email && val.password) {
            // @ts-ignore
            from(this.authService.signin(val.email, val.password)).subscribe((user: UserEntity) => {
                if (user) {
                    this.router.navigate(['/home']);
                }
            });
        }
    }
}
