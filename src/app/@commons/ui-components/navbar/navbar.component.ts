import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
        private authService: AuthService,
    ) {
    }

    ngOnInit(): void {
        if (this.authService.getCurrentAuthenticatedUser()) {
            this.isLoggedIn = true;
        }
    }

    onLogoutClicked(): void {
        this.authService.signout();
        this.router.navigate(['auth/signin']);
    }
}
