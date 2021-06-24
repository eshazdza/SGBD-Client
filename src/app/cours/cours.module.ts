import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursComponent } from './cours.component';
import { CoursRoutingModule } from './cours-routing.module';
import { CommonsModule } from '../@commons/commons.module';
import { ModalComponent } from './modal/modal.component';


@NgModule({
    declarations: [CoursComponent, ModalComponent],
    imports: [
        CommonModule,
        CoursRoutingModule,
        CommonsModule,
    ]
})
export class CoursModule {
}
