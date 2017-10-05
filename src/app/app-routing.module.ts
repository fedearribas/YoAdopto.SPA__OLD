import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './core/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  { path: 'adoptions', loadChildren: './adoptions/adoption.module#AdoptionModule' },
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
