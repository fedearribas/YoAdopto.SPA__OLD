import { MarkedAdoptionsComponent } from './../users/marked-adoptions/marked-adoptions.component';
import { CommentsModule } from './../comments/comments.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdoptionsRoutingModule } from './adoptions-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdoptionsComponent } from './adoptions.component';
import { AdoptionItemComponent } from './adoption-list/adoption-item/adoption-item.component';
import { AdoptionListComponent } from './adoption-list/adoption-list.component';
import { AdoptionDetailComponent } from './adoption-detail/adoption-detail.component';
import { AdoptionFormComponent } from './adoption-form/adoption-form.component';
import { AdoptionsContainerComponent } from './adoptions-container/adoptions-container.component';

@NgModule({
  declarations: [
    AdoptionsComponent,
    AdoptionItemComponent,
    AdoptionListComponent,
    AdoptionDetailComponent,
    AdoptionFormComponent,
    AdoptionsContainerComponent,
    MarkedAdoptionsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdoptionsRoutingModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    CommentsModule
  ],
  exports: [
    AdoptionListComponent
  ]
})
export class AdoptionModule {
}
