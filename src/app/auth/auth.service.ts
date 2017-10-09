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
  public signed_in = false;
  private validated_token = false;

  constructor(private http: Http,
              public tokenService: Angular2TokenService,
              private router: Router) { }

  signIn(signInUser) {
    this.tokenService.signIn(signInUser).subscribe(
      res => {
        if(res.status == 200){
          console.log(res);
          this.current_user = res.json().data;
          this.signed_in = true;
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
          this.signed_in = true;
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
    this.signed_in = false;
  }

  updateProfileSettings(user) {
    this.tokenService.patch('auth', user).subscribe(
      (res) => {
        // this.validateToken();
        this.router.navigate(['/user/profile/settings/updating-dummy']);
      });
  }

  userSignedIn() {
     return this.signed_in;
  }

  tokenWasValidated() {
    return this.validated_token;
  }

  signInOAuth(authType: string) {
    return this.tokenService.signInOAuth(authType);
  }

  processOAuthCallback() {
    return this.tokenService.processOAuthCallback();
  }

  proccessResponse() {
    this.tokenService.processOAuthCallback();
    this.validateToken();
  }

  validateToken() {
    this.tokenService.validateToken().subscribe(
      (res) => {
        this.signed_in = true;
        this.current_user = res.json().data;
        this.validated_token = true;
        console.log(this.tokenService.currentUserData);
      },
      (err) => {
        this.validated_token = true;
      }
    );
  }
}
