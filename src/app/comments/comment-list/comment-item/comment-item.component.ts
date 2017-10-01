import { AuthService } from './../../../auth/auth.service';
import { CommentsService } from './../../comments.service';
import { Comment } from './../../comment.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {

  @Input() comment: Comment;

constructor(private commentsService: CommentsService,
              private authService: AuthService) { }

  getProfileImage(image) {
    if (!image) {
      return '../../../assets/images/profile_image_default.png';
    }
    return image;
  }
  ngOnInit() {

  }

  canDeleteComment() {
    if (this.authService.userSignedIn()) {
      return this.authService.current_user.id === this.comment.user.id || this.authService.current_user.admin;
    }
    return false;
  }

  onDelete(id: number) {
    if (confirm('Esta seguro de borrar este comentario?')) {
      return this.commentsService.deleteComment(id);
    }
  }
}
