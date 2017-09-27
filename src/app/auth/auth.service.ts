import { Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  public current_user;

  constructor(private http: Http,
              public tokenService: Angular2TokenService,
              private router: Router) { }

  signIn(signInUser) {
    this.tokenService.signIn(signInUser).subscribe(
      res => {
        if(res.status == 200){
          console.log(res);
          this.current_user = res.json().data;
          this.router.navigate(['/adoptions']);
          console.log(this.current_user);
        }
      },
      err => {
        console.log('err:', err);
        alert(err.json().errors[0]);
      }
    );
  }

  signUp(signUpUser) {
    this.tokenService.registerAccount(signUpUser).subscribe(
      (res) => {
        if (res.status == 200) {
          this.current_user = res.json().data;
          this.router.navigate(['/adoptions']);
          console.log(res);
        }
      },
      (err) => {
        console.log(err.json());
        alert(err);
      }
    );
  }

  signOut() {
    this.tokenService.signOut();
    this.router.navigate(['/']);
    this.current_user = null;
  }

  userSignedIn() {
    return this.tokenService.userSignedIn();
  }

  validateToken() {
    this.tokenService.validateToken().subscribe(
      (res) => this.current_user = res.json().data
    );
  }
}
