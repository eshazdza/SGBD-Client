import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
        console.log("signin");
    }
}
