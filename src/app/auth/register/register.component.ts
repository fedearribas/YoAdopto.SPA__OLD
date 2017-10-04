import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpUser = {
    email: '',
    name: '',
    password: '',
    passwordConfirmation: ''
  };
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSignUpSubmit() {
    this.authService.signUp(this.signUpUser);
  }

  loginWithFacebook(): void {
    this.authService.signInOAuth('facebook');
  }

}
