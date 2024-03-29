import { Missing } from './../missing.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-missing-list',
  templateUrl: './missing-list.component.html',
  styleUrls: ['./missing-list.component.css']
})
export class MissingListComponent implements OnInit {

  constructor () {}

  @Input() missing: Missing[];

  ngOnInit() { }

}
