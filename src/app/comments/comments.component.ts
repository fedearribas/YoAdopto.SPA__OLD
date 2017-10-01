import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { AnonymousSubscription } from 'rxjs/Subscription';
import { CommentsService } from './comments.service';
import { AuthService } from './../auth/auth.service';
import { Comment } from './comment.model';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {

  @Input() id: number;
  comments: Comment[];
  commentsCount = '';

  private commentsSubscription: AnonymousSubscription;
  private timerSubscription: AnonymousSubscription;

  constructor(public authService: AuthService,
      public commentsService: CommentsService) { }

  ngOnInit() {
    this.timerSubscription = TimerObservable.create(0, 2000).subscribe(() => this.getComments());
  }

  getComments() {
    this.commentsSubscription = this.commentsService.commentListChanged.subscribe(
      (res: Comment[]) => {
        this.comments = res;
        if (this.comments) {
          let c = this.comments.length === 1 ? ' comentario' : ' comentarios';
          this.commentsCount = this.comments.length + c;
        }
      }
    );
    this.commentsService.getCommentsByAdoptionId(this.id);
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    if (this.commentsSubscription) {
      this.commentsSubscription.unsubscribe();
    }
  }
}
