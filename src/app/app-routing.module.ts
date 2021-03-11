import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
    },
    {
        path: 'cours',
        loadChildren: () => import('./cours/cours.module').then(mod => mod.CoursModule),
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: '**',
        loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
