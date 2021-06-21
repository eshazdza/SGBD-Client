import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { TestResultsService } from '../@commons/services/test-results.service';
import { TestResultEntity } from '../@commons/entities/test-result.entity';

@Component({
    selector: 'app-sgbd-test-results',
    templateUrl: './test-results.component.html',
    styleUrls: ['./test-results.component.scss']
})
export class TestResultsComponent implements OnInit {

    results: TestResultEntity[] = [];

    constructor(
        private testResultService: TestResultsService,
    ) {
    }

    ngOnInit(): void {
        from(this.testResultService.get()).subscribe((testResults) => {
            this.results = testResults._embedded.userTestList;
            console.log(this.results);
        });
    }

    onDownloadCliked() {
        from(this.testResultService.downloadBulletin().subscribe(()))
    }
}
