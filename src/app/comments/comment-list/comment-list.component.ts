import { Comment } from './../comment.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() comments: Comment[];
  constructor() { }

  getProfileImage(image) {
    if (!image) {
      return '../../../assets/images/profile_image_default.png';
    }
    return image;
  }
  ngOnInit() {
    console.log(this.comments);
  }

}
