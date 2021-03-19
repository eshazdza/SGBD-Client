import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';


const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {path: 'signup', component: SignupComponent},
            {path: 'signin', component: SigninComponent},
            {path: 'signout', component: SignoutComponent},
            {path: '**', redirectTo: '/home'},
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {
}
