import { Adoption } from './../adoption.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-adoption-list',
  templateUrl: './adoption-list.component.html',
  styleUrls: ['./adoption-list.component.css']
})
export class AdoptionListComponent implements OnInit {

  constructor () {}

  @Input() adoptions: Adoption[];

  errorMessage: string;
  noDataMsg: string;

  ngOnInit() {
    if (!this.adoptions ) {
      this.noDataMsg = 'Aun no hay datos cargados, vuelva a intentarlo mas tarde!';
    }
  }

}
