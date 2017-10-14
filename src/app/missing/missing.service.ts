import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Missing } from './missing.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import {environment} from '../../environments/environment';

@Injectable()
export class MissingService {

  private baseUrl = environment.base_url_api_publications;
  private baseUrlFiltered = this.baseUrl + '/type/missing';
  private currentUserHeader;
  public missing: Missing[] = [];

  public missingListChanged: Subject<Missing[]> = new BehaviorSubject<Missing[]>(null);

  constructor(private httpClient: HttpClient,
              private authService: AuthService,
              private router: Router) { }

  getAll(): Observable<Missing[]>  {
    if (this.missing) {
      this.missingListChanged.next(this.missing);
    }
     this.httpClient.get<Missing[]>(this.baseUrlFiltered).map(
      missing => missing)
      .subscribe(
      (res: Missing[]) =>  {
        this.missing = res;
        this.missingListChanged.next(this.missing);
      }
    );
    return this.missingListChanged;
  }

  getMiss(id: number): Observable<Missing> {
    const ad = this.getMissingArray(id);
    if (ad) {
     return Observable.of(ad);
    } else {
      return this.httpClient.get<Missing>(this.baseUrl + '/' + id).map(
        (miss: Missing) => {
          console.log(miss);
          return miss;
        }
      );
    }
  }

  insertMissing(miss: Missing) {
    return this.httpClient.post(this.baseUrl, miss).subscribe(
      (data: Missing) => {
        this.missingListChanged.next(this.missing);
        this.router.navigate(['/missing']);
      });
    }

  updateMissing(miss: Missing, redirect: boolean = true) {
    this.currentUserHeader = new HttpHeaders().set('CURRENTUSERID', this.authService.current_user.id.toString());
    return this.httpClient.put(this.baseUrl + '/' + miss.id, miss, {headers: this.currentUserHeader})
      .subscribe(
        (data: Missing) => {
          const itemIndex = this.missing.findIndex(item => item.id == miss.id);
          this.missing[itemIndex] = data;
          console.log('updated: ' + data);
          this.missingListChanged.next(this.missing);
          if (redirect) {
            this.router.navigate(['/missing']);
          }
        },
        (error) => alert(error.error)
      );
  }

  getMissingArray(id: number): Missing {
    return this.missing.find(x => x.id == id);
 }

  deleteMissing(miss: Missing) {
    return this.httpClient.delete(this.baseUrl + '/' + miss.id).subscribe(
      (data) => {
        const itemIndex = this.missing.findIndex(item => item.id == miss.id);
        this.missing.splice(itemIndex, 1);
        this.missingListChanged.next(this.missing);
        this.router.navigate(['/missing']);
      }
    );
  }
}
