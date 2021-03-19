import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationGuard } from './@commons/guards/navigation.guard';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
        canActivate: [NavigationGuard],
    },
    {
        path: 'cours',
        loadChildren: () => import('./cours/cours.module').then(mod => mod.CoursModule),
        canActivate: [NavigationGuard],
    },
    {
        path: 'profil',
        loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule),
        canActivate: [NavigationGuard],
    },
    {
        path: 'resultats',
        loadChildren: () => import('./test-results/test-results.module').then(mod => mod.TestResultsModule),
        canActivate: [NavigationGuard],
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: '**',
        loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
        canActivate: [NavigationGuard],
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
