import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { CognitoService } from '../../services/cognito.service';
import { from } from 'rxjs';

@Component({
    selector: 'app-sgbd-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    value = '';
    isLoggedIn = false;

    constructor(
        private readonly router: Router,
    ) {
    }

    ngOnInit(): void {
        // from(this.cognitoService.getCurrentAuthenticatedUser()).subscribe((isAuth) => {
        //     this.isLoggedIn = isAuth;
        // });
    }

    onLogoutClicked(): void {
        // this.cognitoService.signout().then(() => {
        //     this.router.navigate(['/auth/signin']);
        // });
    }
}
