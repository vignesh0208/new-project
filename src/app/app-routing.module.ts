import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
    },
    {
        path: 'members',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
        canActivate: [AuthGuardService]
    },
    {
        path: 'image-page',
        loadChildren: () => import('./image-page/image-page.module').then( m => m.ImagePagePageModule)
    },
    {
        path: 'type-selection',
        loadChildren: () => import('./type-selection/type-selection.module').then( m => m.TypeSelectionPageModule)
    },
    {
        path: 'title-desc',
        loadChildren: () => import('./title-desc/title-desc.module').then( m => m.TitleDescPageModule)
    },
    {
        path: 'post-content',
        loadChildren: () => import('./post-content/post-content.module').then( m => m.PostContentPageModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
