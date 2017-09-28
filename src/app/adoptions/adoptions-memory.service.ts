import { Adoption } from './adoption.model';
import { AdoptionsService } from './adoptions.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AdoptionsMemoryService {

  public adoptions: Adoption[] = [];
  public adoptionsListChanged = new Subject<Adoption[]>();
  hasData: boolean;

  constructor() { }

  getData() {
    return this.adoptions.slice();
  }

  getAdoption(id: number): Adoption {
     return this.adoptions.find(x => x.id == id);
  }

  insertAdoption(adoption: Adoption) {
    this.adoptions.unshift(adoption);
    this.adoptionsListChanged.next(this.adoptions.slice());
  }

  updateAdoption(adoption: Adoption) {
    this.adoptions[this.adoptions.indexOf(this.getAdoption(adoption.id))] = adoption;
    this.adoptionsListChanged.next(this.adoptions.slice());
  }

  deleteAdoption(adoption: Adoption) {
    const index = this.adoptions.indexOf(adoption);
    this.adoptions.splice(index, 1);
    this.adoptionsListChanged.next(this.adoptions.slice());
  }


}
