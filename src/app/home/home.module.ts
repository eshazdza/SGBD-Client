import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonsModule } from '../@commons/commons.module';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        CommonsModule,
        HomeRoutingModule,
    ]
})
export class HomeModule {
}
