import { AdoptionListComponent } from './adoptions/adoption-list/adoption-list.component';
import { AdoptionDetailComponent } from './adoptions/adoption-detail/adoption-detail.component';
import { AdoptionsComponent } from './adoptions/adoptions.component';
import { LostComponent } from './lost/lost.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'adoptions', component: AdoptionsComponent, children: [
    {path: '', component: AdoptionListComponent },
    {path: ':id', component: AdoptionDetailComponent }
  ] },
  {path: 'lost', component: LostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
