import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuardService] },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule', canActivate: [AuthGuardService] },
  { path: 'cv', loadChildren: './cv/cv.module#CvPageModule', canActivate: [AuthGuardService] },
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsPageModule', canActivate: [AuthGuardService] },
  { path: 'extra', loadChildren: './extra/extra.module#ExtraPageModule', canActivate: [AuthGuardService] },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule', canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
