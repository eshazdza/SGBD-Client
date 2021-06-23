import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ProfileService } from '../@commons/services/profile.service';

@Component({
    selector: 'app-sgbd-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    constructor(
        private profileService: ProfileService
    ) {
    }

    ngOnInit(): void {

    }

}
