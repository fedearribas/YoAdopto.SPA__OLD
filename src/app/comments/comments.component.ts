import { AuthService } from './../auth/auth.service';
import { Comment } from './comment.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() comments: Comment[];
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
