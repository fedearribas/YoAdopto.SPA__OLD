import { Adoption } from './../../adoptions/adoption.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() adoption: Adoption;

  constructor() { }

  ngOnInit() {

  }
}
