import { Comment } from './comment.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentsService {

  private baseUrl = 'https://yoadopto-api-fedearribas.c9users.io/comments';

  constructor(private http: HttpClient) { }

  createComment(comment: Comment) {
    return this.http.post(this.baseUrl, comment);
  }

  deleteComment(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
