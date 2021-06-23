import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../@commons/services/auth.service';
import { from } from 'rxjs';
import { StorageService } from '../../@commons/services/storage.service';

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
        this.authService.signout();
    }

    signin(): void {
        const val = this.form.value;
        if (val.email && val.password) {
            from(this.authService.signin(val.email, val.password)).subscribe((user) => {
                if (user) {
                    StorageService.logUser(user);
                    this.router.navigate(['/home']);
                }
            });
        }
    }
}
