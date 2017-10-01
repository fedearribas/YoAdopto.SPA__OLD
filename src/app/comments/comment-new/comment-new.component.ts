import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Comment } from './../comment.model';
import { CommentsService } from './../comments.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-new',
  templateUrl: './comment-new.component.html',
  styleUrls: ['./comment-new.component.css']
})
export class CommentNewComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  adoption_id: number;

  constructor(private commentsService: CommentsService,
              private authService: AuthService,
              private acivatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit() {
    this.acivatedRoute.params.subscribe(
      (params: Params) => this.adoption_id = Number(params['id'])
    );
    const value = this.form.value;
    const comment = new Comment(value.message, this.adoption_id, this.authService.current_user.id);
    console.log(comment);
    this.commentsService.createComment(comment);
    this.form.reset();
  }

}
