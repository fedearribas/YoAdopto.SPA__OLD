import { MarkedAdoptions } from './marked-adoptions.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../../environments/environment';

@Injectable()
export class MarkedAdoptionsService {

  postUrl = environment.base_url_api_marked_adoptions;
  baseUrl = environment.base_url_api_marked_adoptions + 'user';

  constructor(private http: HttpClient) { }

  getMarkedAdoptionsByUserId(user_id: number) {
    return this.http.get(this.baseUrl + '/' + user_id + '/type/adoption').map(
      (res: MarkedAdoptions[]) => {
        return res;
      }
    );
  }

  getMarkedMissingByUserId(user_id: number) {
    return this.http.get(this.baseUrl + '/' + user_id + '/type/missing').map(
      (res: MarkedAdoptions[]) => {
        return res;
      }
    );
  }


  getMarkedAdoptionByUserIdAndAdoptionId(user_id: number, adoption_id: number) {
    return this.http.get(this.baseUrl + '/' + user_id + '/' + adoption_id).map(
      (res: MarkedAdoptions) => {
        return res;
      }
    );
  }

  insertAdoptionMark(mark: MarkedAdoptions) {
    return this.http.post(this.postUrl, mark);
  }

  deleteAdoptionMark(markId: number) {
    return this.http.delete(this.postUrl + '/' + markId);
  }

}
