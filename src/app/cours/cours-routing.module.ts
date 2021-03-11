import { RouterModule, Routes } from '@angular/router';
import { CoursComponent } from './cours.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: CoursComponent,
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class CoursRoutingModule {
}
