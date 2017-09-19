import { AdoptionsService } from './../adoptions.service';
import { Adoption } from './../adoption.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adoption-list',
  templateUrl: './adoption-list.component.html',
  styleUrls: ['./adoption-list.component.css']
})
export class AdoptionListComponent implements OnInit {

  constructor (private adoptionService: AdoptionsService) {}

  adoptions: Adoption[] = [];

  dataAvailable = true;
  errorMessage = '';

  ngOnInit() {
    this.adoptionService
    .getAll()
    .subscribe(
      p => {
        this.dataAvailable = true;
        this.adoptions = p;
        if (this.adoptions.length <= 0) {
          this.errorMessage = 'No hay adopciones cargadas.';
        }
      },
      err => {
        this.dataAvailable = false;
        this.errorMessage = 'Ocurrió un problema recuperando la información. Vuelva a intentarlo en unos minutos.';
        console.log('Error obteniendo la información');
      }
    );
  }

}
