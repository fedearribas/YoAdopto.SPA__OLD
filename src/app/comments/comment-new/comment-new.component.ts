import { AdoptionsService } from './../../adoptions/adoptions.service';
import { AuthService } from './../../auth/auth.service';
import { Adoption } from './../../adoptions/adoption.model';
import { Comment } from './../comment.model';
import { CommentsService } from './../comments.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-new',
  templateUrl: './comment-new.component.html',
  styleUrls: ['./comment-new.component.css']
})
export class CommentNewComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  @Input() adoption: Adoption;

  constructor(private commentsService: CommentsService,
              private authService: AuthService,
              private adoptionsService: AdoptionsService) { }

  ngOnInit() {
  }

  onSubmit() {
    const value = this.form.value;
    const comment = new Comment(value.message, this.adoption.id, this.authService.current_user.id);
    console.log(comment);
    this.commentsService.createComment(comment).subscribe(
      (data: Comment) => {
        this.adoption.comments.push(data);
        this.adoptionsService.updateAdoptionArray(this.adoption);
      }
    );
    this.form.reset();

  }

}
