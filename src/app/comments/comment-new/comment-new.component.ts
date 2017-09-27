import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-new',
  templateUrl: './comment-new.component.html',
  styleUrls: ['./comment-new.component.css']
})
export class CommentNewComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }

}
