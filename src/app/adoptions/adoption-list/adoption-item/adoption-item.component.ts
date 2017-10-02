import { Router } from '@angular/router';
import { Adoption } from './../../adoption.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-adoption-item',
  templateUrl: './adoption-item.component.html',
  styleUrls: ['./adoption-item.component.css']
})
export class AdoptionItemComponent implements OnInit {

  @Input() adoption: Adoption;

  constructor(private router: Router) {}

  ngOnInit() {
    // Needed to go to the top of the page when changing route
    this.router.events.subscribe(
      () => window.scrollTo(0, 0)
    );
  }

}
