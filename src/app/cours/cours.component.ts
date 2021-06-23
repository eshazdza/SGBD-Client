import { Component, OnInit } from '@angular/core';
import { CoursService } from '../@commons/services/cours.service';
import { from } from 'rxjs';
import { CoursEntity } from '../@commons/entities/cours.entity';
import { RoleType } from '../@commons/enums/roleType';
import { AuthService } from '../@commons/services/auth.service';
import { UserEntity } from '../@commons/entities/user.entity';
import { unwatchFile } from "fs";

@Component({
    selector: 'app-sgbd-cours',
    templateUrl: './cours.component.html',
    styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {

    cours: CoursEntity[] = [];

    constructor(
        private coursService: CoursService,
        private authService: AuthService,
    ) {
    }

    ngOnInit(): void {
        const user: UserEntity = this.authService.getCurrentAuthenticatedUser();
        if (user && user.id) {
            from(this.coursService.list({id: user.id})).subscribe((cours) => {
                if (cours && cours._embedded) {
                    this.cours = cours._embedded.classeList;
                    this.computeTeacher();
                }
            });
        }
    }


    onCoursClicked(uuid: string): void {
    }


    private computeTeacher(): void {
        this.cours.map((cours) => {
            cours.userList?.map((inscription) => {
                if (inscription.role?.roleType === RoleType.TEACHER) {
                    cours.teacher = inscription.user;
                    return;
                }
            });
        });
    }

    onResultsClicked(uuid: any): void {
    }
}
