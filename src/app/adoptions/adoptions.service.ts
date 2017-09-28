import { Router } from '@angular/router';
import { AdoptionsMemoryService } from './adoptions-memory.service';
import { AuthService } from './../auth/auth.service';
import { Adoption } from './adoption.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AdoptionsService {

  // private baseUrl = 'https://yoadoptoapi.herokuapp.com/adoptions';
  private baseUrl = 'https://yoadopto-api-fedearribas.c9users.io/adoptions';
  private currentUserHeader;

  constructor(private httpClient: HttpClient,
              private authService: AuthService,
              private adoptionsMemoryService: AdoptionsMemoryService,
              private router: Router) { }

  getAll() {
    return this.httpClient.get<Adoption[]>(this.baseUrl).map(
      (adoptions: Adoption[]) => {
        console.log(adoptions);
        this.adoptionsMemoryService.adoptions = adoptions;
        this.adoptionsMemoryService.adoptionsListChanged.next(this.adoptionsMemoryService.adoptions.slice());
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
    return this.httpClient.post(this.baseUrl, adoption).subscribe(
      (data: Adoption) => {
        this.adoptionsMemoryService.insertAdoption(data);
        this.router.navigate(['/adoptions']);
      });
    }

  updateAdoption(adoption: Adoption) {
    this.currentUserHeader = new HttpHeaders().set('CURRENTUSERID', this.authService.current_user.id.toString());
    return this.httpClient.put(this.baseUrl + '/' + adoption.id, adoption, {headers: this.currentUserHeader})
      .subscribe(
        (data: Adoption) => {
          this.adoptionsMemoryService.updateAdoption(data);
          this.router.navigate(['/adoptions']);
        },
        (error) => alert(error.error)
      );
  }

  deleteAdoption(adoption: Adoption) {
    return this.httpClient.delete(this.baseUrl + '/' + adoption.id).subscribe(
      (data) => {
        this.adoptionsMemoryService.deleteAdoption(adoption);
        this.router.navigate(['/adoptions']);
      }
    );
  }

}
