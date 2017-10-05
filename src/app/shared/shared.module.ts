import { CommentsModule } from './../comments/comments.module';
import { RouterModule } from '@angular/router';
import { MissingContainerComponent } from './../missing/missing-container/missing-container.component';
import { MissingFormComponent } from './../missing/missing-form/missing-form.component';
import { MissingDetailComponent } from './../missing/missing-detail/missing-detail.component';
import { MissingListComponent } from './../missing/missing-list/missing-list.component';
import { MissingItemComponent } from './../missing/missing-list/missing-item/missing-item.component';
import { AdoptionsContainerComponent } from './../adoptions/adoptions-container/adoptions-container.component';
import { AdoptionFormComponent } from './../adoptions/adoption-form/adoption-form.component';
import { AdoptionDetailComponent } from './../adoptions/adoption-detail/adoption-detail.component';
import { AdoptionListComponent } from './../adoptions/adoption-list/adoption-list.component';
import { AdoptionItemComponent } from './../adoptions/adoption-list/adoption-item/adoption-item.component';
import { MarkedAdoptionsComponent } from './../users/marked-adoptions/marked-adoptions.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MarkedAdoptionsComponent,
    AdoptionItemComponent,
    AdoptionListComponent,
    AdoptionDetailComponent,
    AdoptionFormComponent,
    AdoptionsContainerComponent,
    MissingItemComponent,
    MissingListComponent,
    MissingDetailComponent,
    MissingFormComponent,
    MissingContainerComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    CommentsModule
  ]
})
export class SharedModule {
}
