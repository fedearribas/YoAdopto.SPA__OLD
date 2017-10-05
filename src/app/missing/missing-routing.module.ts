import { MarkedAdoptionsComponent } from './../users/marked-adoptions/marked-adoptions.component';
import { MissingDetailComponent } from './missing-detail/missing-detail.component';
import { MissingFormComponent } from './missing-form/missing-form.component';
import { MissingContainerComponent } from './missing-container/missing-container.component';
import { MissingComponent } from './missing.component';

import { Angular2TokenService } from 'angular2-token';
import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

const missingRoutes: Routes = [
  {path: '', component: MissingComponent, children: [
    {path: '', component: MissingContainerComponent },
    {path: 'new', component: MissingFormComponent, canActivate: [Angular2TokenService] },
    {path: ':id', component: MissingDetailComponent },
    {path: ':id/edit', component: MissingFormComponent, canActivate: [Angular2TokenService] },
    { path: 'user/marked_publications/missing', component: MarkedAdoptionsComponent, canActivate: [Angular2TokenService] }
  ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(missingRoutes)
  ],
  exports: [RouterModule]
})

export class MissingRoutingModule {

}
