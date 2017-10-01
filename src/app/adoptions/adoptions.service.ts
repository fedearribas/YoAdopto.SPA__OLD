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

@Injectable()
export class AdoptionsService {

  // private baseUrl = 'https://yoadoptoapi.herokuapp.com/adoptions';
  private baseUrl = 'https://yoadopto-api-fedearribas.c9users.io/adoptions';
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
          this.adoptions[this.adoptions.indexOf(data)] = data;
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
        this.router.navigate(['/adoptions']);
      }
    );
  }

}
