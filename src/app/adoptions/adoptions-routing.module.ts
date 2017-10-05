import { MarkedAdoptionsComponent } from './../users/marked-adoptions/marked-adoptions.component';
import { Angular2TokenService } from 'angular2-token';
import { AdoptionDetailComponent } from './adoption-detail/adoption-detail.component';
import { AdoptionFormComponent } from './adoption-form/adoption-form.component';
import { AdoptionsContainerComponent } from './adoptions-container/adoptions-container.component';
import { AdoptionsComponent } from './adoptions.component';
import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

const adoptionRoutes: Routes = [
  {path: '', component: AdoptionsComponent, children: [
    {path: '', component: AdoptionsContainerComponent },
    {path: 'new', component: AdoptionFormComponent, canActivate: [Angular2TokenService] },
    {path: ':id', component: AdoptionDetailComponent },
    {path: ':id/edit', component: AdoptionFormComponent, canActivate: [Angular2TokenService] },
    { path: 'user/marked_publications/adoptions', component: MarkedAdoptionsComponent, canActivate: [Angular2TokenService] }
  ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(adoptionRoutes)
  ],
  exports: [RouterModule]
})

export class AdoptionsRoutingModule {

}
