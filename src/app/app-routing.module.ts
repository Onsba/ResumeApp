import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthenticationService] },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule', canActivate: [AuthenticationService] },
  { path: 'cv', loadChildren: './cv/cv.module#CvPageModule', canActivate: [AuthenticationService] },
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsPageModule', canActivate: [AuthenticationService] },
  { path: 'extra', loadChildren: './extra/extra.module#ExtraPageModule', canActivate: [AuthenticationService] },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule', canActivate: [AuthenticationService] },
  { path: 'skills', loadChildren: './skills/skills.module#SkillsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
