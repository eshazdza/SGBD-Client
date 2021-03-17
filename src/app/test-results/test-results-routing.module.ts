import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestResultsComponent } from './test-results.component';

const routes: Routes = [
    {
        path: '',
        component: TestResultsComponent,
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class TestResultsRoutingModule {
}
