import { Router } from '@angular/router';
import { Missing } from './../../missing.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-missing-item',
  templateUrl: './missing-item.component.html',
  styleUrls: ['./missing-item.component.css']
})
export class MissingItemComponent implements OnInit {

  @Input() miss: Missing;

  constructor(private router: Router) {}

  ngOnInit() {
    // Needed to go to the top of the page when changing route
    this.router.events.subscribe(
      () => window.scrollTo(0, 0)
    );
  }

}
