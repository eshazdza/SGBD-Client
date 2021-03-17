import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { TestResultsService } from '../@commons/services/test-results.service';

@Component({
    selector: 'app-sgbd-test-results',
    templateUrl: './test-results.component.html',
    styleUrls: ['./test-results.component.scss']
})
export class TestResultsComponent implements OnInit {

    constructor(
        private testResultService: TestResultsService,
    ) {
    }

    ngOnInit(): void {
        from(this.testResultService.get()).subscribe((testResults) => {
            console.log(testResults);
        });
    }

}
