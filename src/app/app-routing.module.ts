import { MissingDetailComponent } from './missing/missing-detail/missing-detail.component';
import { MissingFormComponent } from './missing/missing-form/missing-form.component';
import { MissingContainerComponent } from './missing/missing-container/missing-container.component';
import { OauthCallbackComponent } from './auth/oauth-callback/oauth-callback.component';
import { AdoptionsContainerComponent } from './adoptions/adoptions-container/adoptions-container.component';
import { MarkedAdoptionsComponent } from './users/marked-adoptions/marked-adoptions.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Angular2TokenService } from 'angular2-token';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AdoptionFormComponent } from './adoptions/adoption-form/adoption-form.component';
import { AdoptionListComponent } from './adoptions/adoption-list/adoption-list.component';
import { AdoptionDetailComponent } from './adoptions/adoption-detail/adoption-detail.component';
import { AdoptionsComponent } from './adoptions/adoptions.component';
import { MissingComponent } from './missing/missing.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'adoptions', component: AdoptionsComponent, children: [
    {path: '', component: AdoptionsContainerComponent },
    {path: 'new', component: AdoptionFormComponent, canActivate: [Angular2TokenService] },
    {path: ':id', component: AdoptionDetailComponent },
    {path: ':id/edit', component: AdoptionFormComponent, canActivate: [Angular2TokenService] }
  ] },
  {path: 'missing', component: MissingComponent, children: [
    {path: '', component: MissingContainerComponent },
    {path: 'new', component: MissingFormComponent, canActivate: [Angular2TokenService] },
    {path: ':id', component: MissingDetailComponent },
    {path: ':id/edit', component: MissingFormComponent, canActivate: [Angular2TokenService] }
  ] },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'user/marked_adoptions', component: MarkedAdoptionsComponent, canActivate: [Angular2TokenService] },
  {path: 'oauth_callback', component: OauthCallbackComponent },
  {path: '**', redirectTo: 'notfound'},
  {path: 'notfound', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
