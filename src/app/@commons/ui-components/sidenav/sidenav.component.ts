import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
    selector: 'app-sgbd-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
    opened = true;
    userGroups: string[] | undefined;
    isAdmin = false;

    constructor(
    ) {
    }

    ngOnInit(): void {
        // from(this.cognitoService.getCurrentAuthenticatedUser()).subscribe((user) => {
        //     if (user) {
        //         this.userGroups = user?.getSignInUserSession()?.getAccessToken().decodePayload()['cognito:groups'];
        //         if (this.userGroups && this.userGroups.length && this.userGroups.includes('Admin')) {
        //             this.isAdmin = true;
        //         }
        //     }
        // });
    }

    toggleSideBar(): void {
        this.opened = !this.opened;
    }
}
