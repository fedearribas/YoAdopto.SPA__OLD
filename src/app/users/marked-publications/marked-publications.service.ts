import { MarkedPublications } from './marked-publications.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../../environments/environment';

@Injectable()
export class MarkedPublicationsService {

  postUrl = environment.base_url_api_marked_publications;
  baseUrl = environment.base_url_api_marked_publications + 'user';

  constructor(private http: HttpClient) { }

  getMarkedAdoptionsByUserId(user_id: number) {
    return this.http.get(this.baseUrl + '/' + user_id + '/type/adoption').map(
      (res: MarkedPublications[]) => {
        return res;
      }
    );
  }

  getMarkedMissingByUserId(user_id: number) {
    return this.http.get(this.baseUrl + '/' + user_id + '/type/missing').map(
      (res: MarkedPublications[]) => {
        return res;
      }
    );
  }


  getMarkedPublicationByUserIdAndAdoptionId(user_id: number, adoption_id: number) {
    return this.http.get(this.baseUrl + '/' + user_id + '/' + adoption_id).map(
      (res: MarkedPublications) => {
        return res;
      }
    );
  }

  insertPublicationMark(mark: MarkedPublications) {
    return this.http.post(this.postUrl, mark);
  }

  deletePublicationMark(markId: number) {
    return this.http.delete(this.postUrl + '/' + markId);
  }

}
