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
import { LostComponent } from './lost/lost.component';
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
  {path: 'lost', component: LostComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'user/marked_adoptions', component: MarkedAdoptionsComponent, canActivate: [Angular2TokenService] },
  {path: '**', redirectTo: 'notfound'},
  {path: 'notfound', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
