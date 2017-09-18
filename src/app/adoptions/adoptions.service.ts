import { Adoption } from './adoption.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdoptionsService {

  private baseUrl = 'http://yoadoptoap.azurewebsites.net/api/adoptions';

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Adoption[]>(this.baseUrl).map(
      (adoptions: Adoption[]) => {
        console.log(adoptions);
        return adoptions;
      }
    );
  }

  getAdoption(id: number) {
    return this.httpClient.get<Adoption>(this.baseUrl + '/' + id).map(
      (adoption: Adoption) => {
        console.log(adoption);
        return adoption;
      }
    );
  }

  insertAdoption(adoption: Adoption) {
    return this.httpClient.post(this.baseUrl, adoption);
  }
}
