import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { TestResultsService } from '../@commons/services/test-results.service';
import { TestResultEntity } from '../@commons/entities/test-result.entity';
import { UserEntity } from '../@commons/entities/user.entity';
import { AuthService } from '../@commons/services/auth.service';

@Component({
    selector: 'app-sgbd-test-results',
    templateUrl: './test-results.component.html',
    styleUrls: ['./test-results.component.scss']
})
export class TestResultsComponent implements OnInit {

    results: TestResultEntity[] = [];
    user: UserEntity | undefined;

    constructor(
        private testResultService: TestResultsService,
        private authService: AuthService,
    ) {
    }

    ngOnInit(): void {
        this.user = this.authService.getCurrentAuthenticatedUser();
        if (this.user && this.user.id) {
            from(this.testResultService.list({id: this.user.id})).subscribe((testResults) => {
                console.log(testResults);
                this.results = testResults._embedded.userTestList;
            });
        }
    }

    onDownloadCliked(): void {
        if (this.user && this.user.id) {
            this.testResultService.downloadBulletin(this.user.id);
        }

    }
}
