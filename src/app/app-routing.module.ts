import { OauthCallbackComponent } from './auth/oauth-callback/oauth-callback.component';
import { MarkedAdoptionsComponent } from './users/marked-adoptions/marked-adoptions.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Angular2TokenService } from 'angular2-token';
import { HomeComponent } from './core/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  { path: 'adoptions', loadChildren: './adoptions/adoptions.module#AdoptionsModule' },
  { path: 'missing', loadChildren: './missing/missing.module#MissingModule' },

  { path: '**', redirectTo: 'notfound'},
  { path: 'notfound', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
