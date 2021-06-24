import { Component, OnInit } from '@angular/core';
import { CoursService } from '../@commons/services/cours.service';
import { from } from 'rxjs';
import { CoursEntity } from '../@commons/entities/cours.entity';
import { RoleType } from '../@commons/enums/roleType';
import { AuthService } from '../@commons/services/auth.service';
import { UserEntity } from '../@commons/entities/user.entity';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from "./modal/modal.component";

@Component({
    selector: 'app-sgbd-cours',
    templateUrl: './cours.component.html',
    styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {

    cours: CoursEntity[] = [];
    allCours: CoursEntity[] = [];
    user: UserEntity | undefined;

    constructor(
        private coursService: CoursService,
        private authService: AuthService,
        private modalService: NgbModal,
    ) {
    }

    ngOnInit(): void {
        from(this.authService.getUser()).subscribe((user) => {
            if (user) {
                this.user = user;
                console.log(this.user.inscriptionList);
                if (this.user && this.user.id) {
                    this.getCoursList();
                    this.getUnregistered();
                }
            }

        });

    }

    getCoursList(): void {
        if (this.user && this.user.id) {
            from(this.coursService.list({id: this.user.id})).subscribe((cours) => {
                if (cours && cours._embedded) {
                    this.cours = cours._embedded.classeList;
                    this.computeTeacher();
                }
            });
            console.log(this.user);
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

    onRegisterClassClicked(uuid: any): void {
        if (this.user && this.user.id) {
            from(this.coursService.register(uuid, this.user)).subscribe((inscription) => {
                this.getCoursList();
                this.getUnregistered();
            });
        }
    }

    private getUnregistered(): void {
        if (this.user && this.user.id) {
            from(this.coursService.getUnregistered(this.user.id)).subscribe((cours) => {
                if (cours && cours._embedded) {
                    this.allCours = cours._embedded.classeList;
                    this.computeTeacher();
                }
            });
        }
    }

    onEncodeResultsClicked(uuid: any) {
        console.log(uuid);
    }

    onPlanTestClicked(uuid: any): void {
        const modalRef = this.modalService.open(ModalComponent, {centered: true, backdrop: true});
        modalRef.componentInstance.courId = uuid;
        modalRef.componentInstance.interroSave.subscribe((e: any) => {
            console.log(e);
        });
    }
}
