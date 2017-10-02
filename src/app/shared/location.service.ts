import { Location } from './location.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LocationService {
  constructor(private http: HttpClient) { }

  getLocation(lat: number, long: number) {
    return this.http
      .get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&result_type=locality&key=AIzaSyCt52gbXl4-emOldG2d6cP-QEVEeiZDFBs')
      .map(
        (res: any) => res.results[0].address_components[0]);
  }
}
