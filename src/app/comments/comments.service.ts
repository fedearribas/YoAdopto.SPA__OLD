import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Comment } from './comment.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentsService {

  private baseUrl = 'https://yoadopto-api-fedearribas.c9users.io/comments';
  private baseUrlGet = this.baseUrl + '/adoption';

  public comments: Comment[] = [];
  public commentListChanged: Subject<Comment[]> = new BehaviorSubject<Comment[]>(null);
  private lastAdoptionVisitedId: number;

  constructor(private http: HttpClient) { }

  getCommentsByAdoptionId(adoption_id: number) {
   if (this.lastAdoptionVisitedId !== adoption_id) {
     this.comments = null;
     this.commentListChanged.next(this.comments);
   }
    return this.http.get(this.baseUrlGet + '/' + adoption_id).map(
      (res) => res
    ).subscribe(
      (res: Comment[]) =>  {
        this.comments = res;
        this.commentListChanged.next(this.comments);
        this.lastAdoptionVisitedId = adoption_id;
      }
    );
  }

  createComment(comment: Comment) {
    return this.http.post(this.baseUrl, comment).subscribe(
      (res: Comment) => {
        this.comments.push(res);
        this.commentListChanged.next(this.comments);
      }
    );
  }

  deleteComment(id: number) {
    return this.http.delete(this.baseUrl + '/' + id).subscribe(
      (res: Comment) => {
        this.comments.splice(this.comments.indexOf(res), 1);
        this.commentListChanged.next(this.comments);
      }
    );
  }
}
