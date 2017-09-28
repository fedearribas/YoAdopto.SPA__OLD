import { Adoption } from './../adoptions/adoption.model';
import { AuthService } from './../auth/auth.service';
import { Comment } from './comment.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() adoption: Adoption;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  getCommentsCount() {
    let c = this.adoption.comments.length === 1 ? ' comentario' : ' comentarios';
    return this.adoption.comments.length + c;
  }

}
