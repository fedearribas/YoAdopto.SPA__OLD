import { Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
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

  constructor(private tokenAuthSerivce: Angular2TokenService,
              private router: Router) { }

  ngOnInit() {
  }

  onSignInSubmit() {
    this.tokenAuthSerivce.signIn(this.signInUser).subscribe(
        res => {
          if(res.status == 200){
            console.log(res);
            this.router.navigate(['/']);
          }
        },
        err => {
          console.log('err:', err);
          alert(err.json().errors[0]);
        }
    );
  }

}
