import { MissingContainerComponent } from './missing-container/missing-container.component';
import { MissingFormComponent } from './missing-form/missing-form.component';
import { MissingDetailComponent } from './missing-detail/missing-detail.component';
import { MissingListComponent } from './missing-list/missing-list.component';
import { MissingItemComponent } from './missing-list/missing-item/missing-item.component';
import { MissingComponent } from './missing.component';
import { CommentsModule } from './../comments/comments.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MissingRoutingModule } from './missing-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MissingComponent,
    MissingItemComponent,
    MissingListComponent,
    MissingDetailComponent,
    MissingFormComponent,
    MissingContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MissingRoutingModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    CommentsModule
  ],
  exports: [
    MissingListComponent
  ]
})
export class MissingModule {
}
