import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsModule } from '../@commons/commons.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';


@NgModule({
    declarations: [ProfileComponent],
    imports: [
        CommonModule,
        CommonsModule,
        ProfileRoutingModule,
    ]
})
export class ProfileModule {
}
