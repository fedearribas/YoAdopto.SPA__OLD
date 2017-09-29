import { MarkedAdoptions } from './marked-adoptions.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MarkedAdoptionsService {

  baseUrl = 'https://yoadopto-api-fedearribas.c9users.io/marked_adoptions/user/';
  postUrl = 'https://yoadopto-api-fedearribas.c9users.io/marked_adoptions/';

  constructor(private http: HttpClient) { }

  getMarkedAdoptionsByUserId(user_id: number) {
    return this.http.get(this.baseUrl + '/' + user_id).map(
      (res: MarkedAdoptions[]) => {
        return res;
      }
    );
  }

  insertAdoptionMark(adoption_id: number, user_id: number) {
    const mark = {'adoption_id': adoption_id, 'user_id': user_id};
    return this.http.post(this.postUrl, mark);
  }

}
