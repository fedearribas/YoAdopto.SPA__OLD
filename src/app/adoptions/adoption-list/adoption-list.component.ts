import { AdoptionsService } from './../adoptions.service';
import { Pet } from './../../shared/pet.model';
import { Adoption } from './../adoption.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adoption-list',
  templateUrl: './adoption-list.component.html',
  styleUrls: ['./adoption-list.component.css']
})
export class AdoptionListComponent implements OnInit {

  constructor (private adoptionService: AdoptionsService) {}

  adoptions: Adoption[] = [
   /*  new Adoption(
      new Pet('Chango',
      10,
      'http://www.vonverbunden.com/imagenes/harley.JPG',
      false, false),
      'Hermoso ovejero', new Date()),
    new Adoption(
      new Pet ('Eru',
      4,
      'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx', 
      false, false),
      'Hermoso gato', new Date()) */
  ];

  ngOnInit() {
    this.adoptionService
    .getAll()
    .subscribe(p => this.adoptions = p);
  }

}
