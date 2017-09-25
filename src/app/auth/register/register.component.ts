import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

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
  constructor(private tokenAuthSerivce: Angular2TokenService,
              private router: Router) { }

  ngOnInit() {
  }

  onSignUpSubmit() {
    this.tokenAuthSerivce.registerAccount(this.signUpUser).subscribe(
      (res) => {
        if (res.status == 200) {
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

}
