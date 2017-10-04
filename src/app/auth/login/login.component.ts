import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInUser = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onSignInSubmit() {
    this.authService.signIn(this.signInUser);
  }

  loginWithFacebook(): void {
    this.authService.signInOAuth('facebook').subscribe(
      res => this.router.navigate(['/adoptions']),
      err => this.router.navigate(['/login'])
    );
  }

}
