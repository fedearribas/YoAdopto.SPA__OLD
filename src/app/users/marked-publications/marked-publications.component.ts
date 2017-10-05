import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marked-publications',
  templateUrl: './marked-publications.component.html',
  styleUrls: ['./marked-publications.component.css']
})
export class MarkedPublicationsComponent implements OnInit {
  adoptionsTabSelected = true;
  missingTabSelected = false;
  constructor() { }

  ngOnInit() {
  }

  onSelectAdoptionsTab() {
    this.adoptionsTabSelected = true;
    this.missingTabSelected = false;
  }
  onSelectMissingTab() {
    this.missingTabSelected = true;
    this.adoptionsTabSelected = false;
  }

}
