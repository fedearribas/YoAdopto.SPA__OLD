import { Adoption } from './../../adoption.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-adoption-item',
  templateUrl: './adoption-item.component.html',
  styleUrls: ['./adoption-item.component.css']
})
export class AdoptionItemComponent implements OnInit {

  @Input() adoption: Adoption;

  constructor() { }

  ngOnInit() {
  }

}
