import { Adoption } from './../../../adoptions/adoption.model';
import { AuthService } from './../../../auth/auth.service';
import { AdoptionsMemoryService } from './../../../adoptions/adoptions-memory.service';
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
  @Input() adoption: Adoption;

constructor(private commentsService: CommentsService,
              private adoptionsMemoryService: AdoptionsMemoryService,
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
      this.commentsService.deleteComment(id).subscribe(
        (data: Comment) => {
          const commentIndex = this.adoption.comments.findIndex((x => x.id == id));
          this.adoption.comments.splice(commentIndex, 1);
          this.adoptionsMemoryService.updateAdoption(this.adoption);
        }
      );
    }
  }
}
