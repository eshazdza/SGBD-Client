import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SignoutComponent } from './signout/signout.component';
import { CommonsModule } from '../@commons/commons.module';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AuthComponent,
        SigninComponent,
        SignupComponent,
        SignoutComponent,
    ],
    imports: [
        CommonModule,
        CommonsModule,
        AuthRoutingModule,
        ReactiveFormsModule
    ]
})
export class AuthModule {
}
