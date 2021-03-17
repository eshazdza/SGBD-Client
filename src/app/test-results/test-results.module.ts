import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestResultsComponent } from './test-results.component';
import { CommonsModule } from '../@commons/commons.module';
import { TestResultsRoutingModule } from './test-results-routing.module';


@NgModule({
    declarations: [TestResultsComponent],
    imports: [
        CommonModule,
        CommonsModule,
        TestResultsRoutingModule,
    ]
})
export class TestResultsModule {
}
