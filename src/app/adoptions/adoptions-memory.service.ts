import { Adoption } from './adoption.model';
import { AdoptionsService } from './adoptions.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AdoptionsMemoryService {

  private adoptions: Adoption[] = [];
  adoptionsListChanged = new Subject<Adoption[]>();

  constructor(private adoptionsService: AdoptionsService) { }

  getData() {
    if (this.adoptions.length <= 0) {
      this.setData();
    }
    return this.adoptions.slice();
  }

  getAdoption(id: number): Adoption {
     return this.adoptions.find(x => x.id == id);
  }

  setData() {
    this.adoptionsService.getAll().subscribe(
      adoptions => {
        this.adoptions = adoptions;
        this.adoptionsListChanged.next(this.adoptions.slice());
      }
    );
  }

}
