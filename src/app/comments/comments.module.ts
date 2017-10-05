import { FormsModule } from '@angular/forms';
import { CommentItemComponent } from './comment-list/comment-item/comment-item.component';
import { CommentNewComponent } from './comment-new/comment-new.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentsComponent } from './comments.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CommentsComponent,
    CommentListComponent,
    CommentNewComponent,
    CommentItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommentsComponent
  ]
})
export class CommentsModule {
}
