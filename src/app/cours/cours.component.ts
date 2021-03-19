import { Component, OnInit } from '@angular/core';
import { CoursService } from '../@commons/services/cours.service';
import { from } from 'rxjs';
import { CoursEntity } from '../@commons/entities/cours.entity';
import { RoleType } from '../@commons/enums/roleType';

@Component({
    selector: 'app-sgbd-cours',
    templateUrl: './cours.component.html',
    styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {

    cours: CoursEntity[] = [];

    constructor(
        private coursService: CoursService,
    ) {
    }

    ngOnInit(): void {
        from(this.coursService.get()).subscribe((cours) => {
            this.cours = cours._embedded.classeList;
            this.computeTeacher();
        });
    }


    onCoursClicked(uuid: string): void {
        console.log(uuid);
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
        console.log(uuid);
    }
}
