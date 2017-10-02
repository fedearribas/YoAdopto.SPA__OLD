import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Adoption } from './adoption.model';
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
export class AdoptionsService {

  private baseUrl = environment.base_url_api_adoptions;
  private currentUserHeader;
  public adoptions: Adoption[] = [];

  public adoptionsListChanged: Subject<Adoption[]> = new BehaviorSubject<Adoption[]>(null);

  constructor(private httpClient: HttpClient,
              private authService: AuthService,
              private router: Router) { }

  getAll() {
     return this.httpClient.get<Adoption[]>(this.baseUrl).map(
      (adoptions: Adoption[]) => {
       return adoptions;
      }
    ).subscribe(
      (res: Adoption[]) =>  {
        this.adoptions = res;
        this.adoptionsListChanged.next(this.adoptions);
      }
    );
  }

  getAdoption(id: number): Observable<Adoption> {
    const ad = this.getAdoptionArray(id);
    if (ad) {
     return Observable.of(ad);
    } else {
      return this.httpClient.get<Adoption>(this.baseUrl + '/' + id).map(
        (adoption: Adoption) => {
          console.log(adoption);
          return adoption;
        }
      );
    }
  }

  insertAdoption(adoption: Adoption) {
    return this.httpClient.post(this.baseUrl, adoption).subscribe(
      (data: Adoption) => {
        this.adoptionsListChanged.next(this.adoptions);
        this.router.navigate(['/adoptions']);
      });
    }

  updateAdoption(adoption: Adoption) {
    this.currentUserHeader = new HttpHeaders().set('CURRENTUSERID', this.authService.current_user.id.toString());
    return this.httpClient.put(this.baseUrl + '/' + adoption.id, adoption, {headers: this.currentUserHeader})
      .subscribe(
        (data: Adoption) => {
          const itemIndex = this.adoptions.findIndex(item => item.id == adoption.id);
          this.adoptions[itemIndex] = data;
          this.adoptionsListChanged.next(this.adoptions);
        },
        (error) => alert(error.error)
      );
  }

  getAdoptionArray(id: number): Adoption {
    return this.adoptions.find(x => x.id == id);
 }

  deleteAdoption(adoption: Adoption) {
    return this.httpClient.delete(this.baseUrl + '/' + adoption.id).subscribe(
      (data) => {
        const itemIndex = this.adoptions.findIndex(item => item.id == adoption.id);
        this.adoptions.splice(itemIndex, 1);
        this.adoptionsListChanged.next(this.adoptions);
        this.router.navigate(['/adoptions']);
      }
    );
  }
}
