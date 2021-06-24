import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { TestResultsService } from '../@commons/services/test-results.service';
import { TestResultEntity } from '../@commons/entities/test-result.entity';
import { UserEntity } from '../@commons/entities/user.entity';
import { AuthService } from '../@commons/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../@commons/services/test.service';
import { TestEntity } from '../@commons/entities/test.entity';
import { CoursService } from '../@commons/services/cours.service';
import { FormControl, FormGroup } from '@angular/forms';
import { RoleType } from '../@commons/enums/roleType';
import { InscriptionEntity } from '../@commons/entities/inscription.entity';

@Component({
    selector: 'app-sgbd-test-results',
    templateUrl: './test-results.component.html',
    styleUrls: ['./test-results.component.scss']
})
export class TestResultsComponent implements OnInit {

    results: TestResultEntity[] = [];
    user: UserEntity | undefined;
    coursId: string | undefined;
    encode = false;
    testList: TestEntity[] | undefined;
    studentList: InscriptionEntity[] | undefined;
    showStudentList = false;
    resultsGroup = new FormGroup({});

    constructor(
        private testResultService: TestResultsService,
        private testService: TestService,
        private coursService: CoursService,
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.user = this.authService.getCurrentAuthenticatedUser();

        this.route.queryParams
            .subscribe(params => {
                    this.coursId = params.cours;
                    this.encode = true;
                    this.testService.list({
                        uuid: this.coursId
                    }).subscribe((testList) => {
                        this.testList = testList._embedded.testList;
                        console.log(this.testList);
                    });
                }
            );

        if (this.user && this.user.id) {
            from(this.testResultService.list({id: this.user.id})).subscribe((testResults) => {
                this.results = testResults._embedded.userTestList;
            });
        }
    }

    onDownloadCliked(): void {
        if (this.user && this.user.id) {
            this.testResultService.downloadBulletin(this.user.id);
        }

    }

    onInterroClicked(): void {
        if (!this.showStudentList) {
            if (this.coursId) {
                from(this.coursService.getById(this.coursId)).subscribe((cours) => {
                    this.studentList = cours.userList;
                    this.showStudentList = true;
                    if (this.studentList) {
                        for (const inscription of this.studentList) {
                            if (inscription?.role?.roleType === RoleType.STUDENT) {
                                this.resultsGroup.addControl(inscription?.user?.id as string, new FormControl(''));
                            }
                        }
                    }
                });
            }
        } else {
            this.showStudentList = false;
        }
    }

    saveResults(testId?: string, inscription?: InscriptionEntity): void {
        if (testId && inscription) {
            const formControlTarget: string = inscription?.user?.id as string;

            const userTest = new TestResultEntity();
            userTest.present = true;
            userTest.inscription = {id: inscription.id};
            userTest.points = this.resultsGroup.get(`${formControlTarget}`)?.value;
            userTest.test = {id: testId};
            from(this.testResultService.post(userTest)).subscribe((test) => {
                console.log(test);
            });
        }
    }
}
