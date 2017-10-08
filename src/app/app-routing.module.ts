import { ProfileComponent } from './users/profile/profile.component';
import { MarkedPublicationsComponent } from './users/marked-publications/marked-publications.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './core/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  { path: 'adoptions', loadChildren: './adoptions/adoption.module#AdoptionModule' },
  { path: 'missing', loadChildren: './missing/missing.module#MissingModule' },

  { path: 'user/profile', component: ProfileComponent, children: [
    { path: 'marked_publications', component: MarkedPublicationsComponent }
  ] }, // Move to own module later
 
  { path: '**', redirectTo: 'notfound'},
  { path: 'notfound', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
